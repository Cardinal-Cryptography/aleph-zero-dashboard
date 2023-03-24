// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BN, BN_MILLION } from '@polkadot/util';
import { DefaultParams } from 'consts';
import { ReactComponent as AzeroIconSVG } from 'img/a0_icon.svg';
import { ReactComponent as AzeroInlineSVG } from 'img/a0_inline.svg';
import { ReactComponent as AzeroLogoSVG } from 'img/a0_logo.svg';
import { Networks } from 'types';

/*
 * Network Configuration
 */
export const NETWORKS: Networks = {};

if (process.env.REACT_APP_DISABLE_MAINNET !== '1') {
  NETWORKS.alephzero = {
    name: 'Aleph Zero',
    endpoints: {
      rpc: 'wss://ws.azero.dev',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'AZERO',
    units: 12,
    ss58: 42,
    brand: {
      icon: AzeroIconSVG,
      logo: {
        svg: AzeroLogoSVG,
        width: '8.5rem',
      },
      inline: {
        svg: AzeroInlineSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'AZERO',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}

NETWORKS.alephzerotestnet = {
  name: 'Aleph Zero Testnet',
  endpoints: {
    rpc: 'wss://ws.test.azero.dev',
    lightClient: null,
  },
  colors: {
    primary: {
      light: '#00ccab',
      dark: '#00ccab',
    },
    secondary: {
      light: '#00eac7',
      dark: '#00eac7',
    },
    stroke: {
      light: '#00ccab',
      dark: '#00ccab',
    },
    transparent: {
      light: 'rgba(0, 204, 171, .5)',
      dark: 'rgba(0, 204, 171, .5)',
    },
  },
  unit: 'TZERO',
  units: 12,
  ss58: 42,
  brand: {
    icon: AzeroIconSVG,
    logo: {
      svg: AzeroLogoSVG,
      width: '8.5rem',
    },
    inline: {
      svg: AzeroInlineSVG,
      size: '1.2rem',
    },
  },
  api: {
    unit: 'TZERO',
    priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
  },
  params: {
    ...DefaultParams,
    stakeTarget: 0.5,
    yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
  },
};

if (process.env.REACT_APP_ENABLE_CUSTOM_NETWORK === '1') {
  NETWORKS.azerocustom = {
    name: 'Aleph Zero Custom',
    endpoints: {
      rpc: process.env.REACT_APP_CUSTOM_WS_ADDRESS ?? '',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'CZERO',
    units: 12,
    ss58: 42,
    brand: {
      icon: AzeroIconSVG,
      logo: {
        svg: AzeroLogoSVG,
        width: '8.5rem',
      },
      inline: {
        svg: AzeroInlineSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'CZERO',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}

if (process.env.NODE_ENV === 'development') {
  NETWORKS.azerolocal = {
    name: 'Aleph Zero Local',
    endpoints: {
      rpc: 'ws://localhost:9944',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'LZERO',
    units: 12,
    ss58: 42,
    brand: {
      icon: AzeroIconSVG,
      logo: {
        svg: AzeroLogoSVG,
        width: '8.5rem',
      },
      inline: {
        svg: AzeroInlineSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'LZERO',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
  NETWORKS.azerodevnet = {
    name: 'Aleph Zero Devnet',
    endpoints: {
      rpc: 'wss://ws.dev.azero.dev',
      lightClient: null,
    },
    colors: {
      primary: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      secondary: {
        light: '#00eac7',
        dark: '#00eac7',
      },
      stroke: {
        light: '#00ccab',
        dark: '#00ccab',
      },
      transparent: {
        light: 'rgba(0, 204, 171, .5)',
        dark: 'rgba(0, 204, 171, .5)',
      },
    },
    unit: 'DZERO',
    units: 12,
    ss58: 42,
    brand: {
      icon: AzeroIconSVG,
      logo: {
        svg: AzeroLogoSVG,
        width: '8.5rem',
      },
      inline: {
        svg: AzeroInlineSVG,
        size: '1.2rem',
      },
    },
    api: {
      unit: 'DZERO',
      priceTicker: 'DOTUSDT', // this is for compatibility with binance endpoint, it's pinged for current token value, but we don't display that value
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.5,
      yearlyInflationInTokens: BN_MILLION.mul(new BN(30)).toNumber(),
    },
  };
}
