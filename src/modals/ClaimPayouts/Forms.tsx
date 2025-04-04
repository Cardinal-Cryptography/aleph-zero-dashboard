// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
  ActionItem,
  ButtonSubmitInvert,
  ModalWarnings,
} from '@polkadot-cloud/react';
import { planckToUnit } from '@polkadot-cloud/utils';
import BigNumber from 'bignumber.js';
import { forwardRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useApi } from 'contexts/Api';
import { useConnect } from 'contexts/Connect';
import { Warning } from 'library/Form/Warning';
import { useSignerWarnings } from 'library/Hooks/useSignerWarnings';
import { useSubmitExtrinsic } from 'library/Hooks/useSubmitExtrinsic';
import { SubmitTx } from 'library/SubmitTx';
import { useOverlay } from '@polkadot-cloud/react/hooks';
import { useBatchCall } from 'library/Hooks/useBatchCall';
import type { AnyApi } from 'types';
import { usePayouts } from 'contexts/Payouts';
import type { FormProps, ActivePayout } from './types';
import { ContentWrapper } from './Wrappers';

export const Forms = forwardRef(
  ({ setSection, payouts, setPayouts }: FormProps, ref: any) => {
    const { t } = useTranslation('modals');
    const { api, network } = useApi();
    const { activeAccount } = useConnect();
    const { newBatchCall } = useBatchCall();
    const { removeEraPayout } = usePayouts();
    const { setModalStatus } = useOverlay().modal;
    const { getSignerWarnings } = useSignerWarnings();
    const { units } = network;

    const totalPayout =
      payouts?.reduce(
        (total: BigNumber, cur: ActivePayout) => total.plus(cur.payout),
        new BigNumber(0)
      ) || new BigNumber(0);

    // Get the total number of validators to payout (the same validator can repeat for separate
    // eras).
    const totalPayoutValidators =
      payouts?.reduce(
        (prev, { paginatedValidators }) =>
          prev + (paginatedValidators?.length || 0),
        0
      ) || 0;

    const getCalls = () => {
      if (!api) return [];

      const calls: AnyApi[] = [];
      payouts?.forEach(({ era, paginatedValidators }) => {
        if (!paginatedValidators) {
          return [];
        }
        return paginatedValidators.forEach(([page, v]) =>
          calls.push(api.tx.staking.payoutStakersByPage(v, era, page))
        );
      });
      return calls;
    };

    // Store whether form is valid to submit transaction.
    const [valid, setValid] = useState<boolean>(
      totalPayout.isGreaterThan(0) && totalPayoutValidators > 0
    );

    // Ensure payouts value is valid.
    useEffect(
      () => setValid(totalPayout.isGreaterThan(0) && totalPayoutValidators > 0),
      [payouts]
    );

    const getTx = () => {
      const tx = null;
      const calls = getCalls();
      if (!valid || !api || !calls.length) return tx;

      return calls.length === 1
        ? calls.pop()
        : newBatchCall(calls, activeAccount);
    };

    const submitExtrinsic = useSubmitExtrinsic({
      tx: getTx(),
      from: activeAccount,
      shouldSubmit: valid,
      callbackSubmit: () => {
        setModalStatus('closing');
      },
      callbackInBlock: () => {
        // Deduct from `unclaimedPayouts` in Payouts context.
        payouts?.forEach(({ era, paginatedValidators }) => {
          for (const v of paginatedValidators || []) {
            removeEraPayout(era, v[1]);
          }
        });

        // Reset active form payouts for this modal.
        setPayouts([]);
      },
    });

    const warnings = getSignerWarnings(
      activeAccount,
      false,
      submitExtrinsic.proxySupported
    );

    return (
      <ContentWrapper>
        <div ref={ref}>
          <div className="padding">
            {warnings.length > 0 ? (
              <ModalWarnings withMargin>
                {warnings.map((text, i) => (
                  <Warning key={`warning${i}`} text={text} />
                ))}
              </ModalWarnings>
            ) : null}
            <div style={{ marginBottom: '2rem' }}>
              <ActionItem
                text={`${t('claim')} ${planckToUnit(totalPayout, units)} ${
                  network.unit
                }`}
              />
              <p>{t('afterClaiming')}</p>
            </div>
          </div>
          <SubmitTx
            fromController={false}
            valid={valid}
            buttons={[
              <ButtonSubmitInvert
                key="button_back"
                text={t('back')}
                iconLeft={faChevronLeft}
                iconTransform="shrink-1"
                onClick={() => setSection(0)}
              />,
            ]}
            {...submitExtrinsic}
          />
        </div>
      </ContentWrapper>
    );
  }
);
