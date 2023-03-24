// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { AccountProvider } from 'contexts/Account';
import { APIProvider, useApi } from 'contexts/Api';
import { BalancesProvider } from 'contexts/Balances';
import { ConnectProvider } from 'contexts/Connect';
import { ExtensionsProvider } from 'contexts/Extensions';
import { ExtrinsicsProvider } from 'contexts/Extrinsics';
import { FiltersProvider } from 'contexts/Filters';
import { HelpProvider } from 'contexts/Help';
import { MenuProvider } from 'contexts/Menu';
import { ModalProvider } from 'contexts/Modal';
import { NetworkMetricsProvider } from 'contexts/Network';
import { NotificationsProvider } from 'contexts/Notifications';
import { OverlayProvider } from 'contexts/Overlay';
import { ActivePoolsProvider } from 'contexts/Pools/ActivePools';
import { BondedPoolsProvider } from 'contexts/Pools/BondedPools';
import { PoolMembersProvider } from 'contexts/Pools/PoolMembers';
import { PoolMembershipsProvider } from 'contexts/Pools/PoolMemberships';
import { PoolsConfigProvider } from 'contexts/Pools/PoolsConfig';
import { SessionEraProvider } from 'contexts/SessionEra';
import { StakingProvider } from 'contexts/Staking';
import { useTheme } from 'contexts/Themes';
import { TooltipProvider } from 'contexts/Tooltip';
import { TransferOptionsProvider } from 'contexts/TransferOptions';
import { TxFeesProvider } from 'contexts/TxFees';
import { UIProvider } from 'contexts/UI';
import { ValidatorsProvider } from 'contexts/Validators';
import { withProviders } from 'library/Hooks';
import { PayoutsCacheProvider } from 'library/Hooks/usePayouts';
import Router from 'Router';
import { ThemeProvider } from 'styled-components';
import { EntryWrapper as Wrapper } from 'Wrappers';

// `polkadot-dashboard-ui` theme classes are inserted here.
export const WrappedRouter = () => {
  const { mode } = useTheme();
  const { network } = useApi();
  const networkName = network.name.toLowerCase().replaceAll(' ', '-');

  return (
    <Wrapper className={`theme-${networkName} theme-${mode}`}>
      <Router />
    </Wrapper>
  );
};

// App-specific theme classes are inserted here.
export const ThemedRouter = () => {
  const { mode } = useTheme();
  const { network } = useApi();

  return (
    <ThemeProvider
      theme={{ mode, card: 'shadow', network: `${network.name}-${mode}` }}
    >
      <WrappedRouter />
    </ThemeProvider>
  );
};

export const Providers = withProviders(
  FiltersProvider,
  APIProvider,
  ExtensionsProvider,
  ConnectProvider,
  HelpProvider,
  NetworkMetricsProvider,
  AccountProvider,
  BalancesProvider,
  StakingProvider,
  PoolsConfigProvider,
  BondedPoolsProvider,
  PoolMembershipsProvider,
  PoolMembersProvider,
  ActivePoolsProvider,
  TransferOptionsProvider,
  ValidatorsProvider,
  UIProvider,
  MenuProvider,
  TooltipProvider,
  NotificationsProvider,
  TxFeesProvider,
  ExtrinsicsProvider,
  ModalProvider,
  SessionEraProvider,
  OverlayProvider,
  PayoutsCacheProvider
)(ThemedRouter);

export default Providers;
