// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type React from 'react';
import type { FunctionComponent, SVGProps } from 'react';
import type { Theme } from 'contexts/Themes/types';
import BigNumber from 'bignumber.js';

export enum NetworkNameEnum {
  AlephZero = 'Aleph Zero',
  AlephZeroTestnet = 'Aleph Zero Testnet',
  AlephZeroDevNet = 'Aleph Zero Devnet',
  AzeroLocal = 'Aleph Zero Local',
  AzeroCustom = 'Aleph Zero Custom',
  Polkadot = 'polkadot',
  Kusama = 'kusama',
  Westend = 'westend',
}

export type NetworkName =
  | 'Aleph Zero'
  | 'Aleph Zero Testnet'
  | 'Aleph Zero Devnet'
  | 'Aleph Zero Local'
  | 'Aleph Zero Custom'
  | 'polkadot'
  | 'kusama'
  | 'westend';

export enum Toggle {
  Open = 'open',
  Closed = 'closed',
}

export type Networks = Record<string, Network>;

type NetworkColor =
  | 'primary'
  | 'secondary'
  | 'stroke'
  | 'transparent'
  | 'pending';
export interface Network {
  name: NetworkName;
  endpoints: {
    rpc: string;
    lightClient: AnyApi;
  };
  namespace: string;
  colors: Record<NetworkColor, { [key in Theme]: string }>;
  unit: string;
  units: number;
  ss58: number;
  brand: {
    icon: FunctionComponent<
      SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    token: FunctionComponent<
      SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    logo: {
      svg: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
      >;
      width: string;
    };
    inline: {
      svg: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
      >;
      size: string;
    };
  };
  api: {
    unit: string;
    priceTicker: string;
  };
  params: Record<string, number>;
  defaultFeeReserve: number;
  maxExposurePageSize: BigNumber;
}

export interface PageCategory {
  id: number;
  key: string;
}

export type PageCategoryItems = PageCategory[];

export interface PageItem {
  category: number;
  key: string;
  uri: string;
  hash: string;
  Entry: React.FC<PageProps>;
  lottie: AnyJson;
  action?: {
    type: string;
    status: string;
    text?: string | undefined;
  };
}

export type PagesConfigItems = PageItem[];

export interface PageProps {
  page: PageProp;
}

interface PageProp {
  key: string;
}

export type MaybeAccount = string | null;

export type MaybeString = string | null;

// track the status of a syncing / fetching process.
export type Sync = 'unsynced' | 'syncing' | 'synced';

// track whether bonding should be for nominator or nomination pool.
export type BondFor = 'pool' | 'nominator';

// generic function with no args or return type.
export type Fn = () => void;

// any types to compress compiler warnings
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyApi = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyJson = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyMetaBatch = any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnySubscan = any;
