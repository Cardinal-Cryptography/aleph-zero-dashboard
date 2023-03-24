// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  .head {
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    padding: 0 0.25rem;
    margin-top: 1rem;

    > h3 {
      flex: 1;
    }
  }
`;
