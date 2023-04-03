// Copyright 2022 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { NETWORKS } from 'config/networks';
import { Network } from 'types';

// configure theme
const v = (light: string, dark: string) => ({
  light,
  dark,
});

// eslint-disable-next-line
export const defaultThemes: { [key: string]: any } = {
  transparent: v('rgba(255,255,255,0', 'rgba(0,0,0,0)'),
  text: {
    primary: v('#333', '#ccc'),
    secondary: v('#444', '#aaa'),
    invert: v('#fafafa', '#0e0e0e'),
    warning: v('#be7900', '#be7900'),
    danger: v('#ae2324', '#d14445'),
    success: v('#66d16f', '#66d16f'),
  },
  background: {
    primary: v('#f3f5f7', '#111b24'),
    gradient: v('#f3f5f7', '#111b24'),
    secondary: v('rgba(255,255,255,0.58)', '#14202a'),
    network: v('#edf0f3', '#0f171f'),
    dropdown: v('#f3f5f7', '#16232e'),
    modalitem: v('rgba(244,244,244,0.6)', 'rgba(22,22,22,0.4)'),
    validator: v(
      'linear-gradient(90deg, rgba(240,240,239,0.95) 0%, rgba(240,240,239,0.7) 100%)',
      'linear-gradient(90deg, rgba(30,30,30,0.8) 0%, rgba(30,30,30,0.5) 100%)'
    ),
    label: v('#e3e9ef', '#182733'),
    tag: v('rgba(220,220,220,0.75)', 'rgba(36,36,36,0.75)'),
    identicon: v('#eee', '#333'),
    overlay: v(
      'linear-gradient(180deg, rgba(244,242,242,0.93) 0%, rgba(228,225,225,0.93) 100%)',
      'linear-gradient(180deg, rgba(20,20,20,0.93) 0%, rgba(14,14,14,0.93) 100%)'
    ),
    success: v('#66d16f', '#66d16f'),
    error: v('#ff4f4c', '#ff4f4c'),
  },
  highlight: {
    primary: v(
      '#e3e9ef',
      'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 100%)'
    ),
    secondary: v(
      '#dbe4eb',
      'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
    ),
  },
  graphs: {
    active: {
      available: v('#66a4d1', '#66a4d1'),
      unlocking: v('#7866d1', '#7866d1'),
      nominating: v('#edd069', '#edd069'),
      inPool: v('#d16666', '#d16666'),
      active: v('#d166b9', '#d166b9'),
      free: v('#66d171', '#66d171'),
    },
    inactive: {
      available: v('#66a4d120', '#66a4d120'),
      unlocking: v('#7866d120', '#7866d120'),
      nominating: v('#edd06920', '#edd06920'),
      inPool: v('#d1666620', '#d1666620'),
      active: v('#d166b920', '#d166b920'),
      free: v('#66d17120', '#66d17120'),
    },
    tooltip: v('#182733', '#edf0f3'),
    grid: v('#e3e9ef', '#182733'),
  },
  buttons: {
    primary: { background: v('rgba(248, 248, 248, 0.9)', '#182733') },
    secondary: { background: v('#e3e9ef', '#1b2b38') },
    toggle: { background: v('rgba(244,243,242,1)', '#1b2b38') },
    help: { background: v('#ececec', '#182733') },
    hover: { background: v('#e8e6e6', '#080808') },
    disabled: {
      background: v('#F3F6F4', '#000000'),
      text: v('#ececec', '#444444'),
    },
  },
  border: {
    primary: v('#e6e6e6', '#1b2b38'),
    secondary: v('#ccc', '#444'),
  },
  modal: {
    overlay: v('rgba(242,240,240,0.6)', 'rgba(15,23,31,0.9)'),
    background: v('#fff', '#14202a'),
  },
  overlay: {
    background: v('rgba(200,200,200,0.45)', 'rgb(17,27,36, 0.9)'),
  },
  help: {
    button: {
      background: v('rgba(255,255,255,0.90)', 'rgba(0,0,0,0.85)'),
    },
  },
  loader: {
    foreground: v('#e1e1e1', '#151515'),
    background: v('#dadada', '#101010'),
  },
  shadow: {
    primary: v('transparent', 'transparent'),
    secondary: v('transparent', 'transparent'),
  },
  status: {
    danger: {
      solid: v('red', 'red'),
      transparent: v('rgba(255,0,0,0.25)', 'rgba(255,0,0,0.25)'),
    },
    warning: {
      solid: v('rgba(219, 161, 0, 1)', 'rgba(219, 161, 0,1)'),
      transparent: v('rgba(255,165,0,0.5)', 'rgba(255,165,0,0.5)'),
    },
    success: {
      solid: v('#66d16f', '#66d16f'),
      transparent: v('rgba(0,128,0,0.25)', 'rgba(0,128,0,0.25)'),
    },
  },
  radio: {
    background: v('#fff', '#0f171f'),
    border: v('#e6e6e6', '#00eac7'),
  },
};

// configure card style
const c = (flat: string, border: string, shadow: string) => ({
  flat,
  border,
  shadow,
});

// eslint-disable-next-line
export const cardThemes = {
  card: {
    border: c('none', '1px solid', 'none'),
    shadow: c('none', 'none', '-2px 2px 10px'),
  },
};

// configure network colors
export const networkColors: { [key: string]: string } = {};
export const networkColorsSecondary: { [key: string]: string } = {};
export const networkColorsStroke: { [key: string]: string } = {};
export const networkColorsTransparent: { [key: string]: string } = {};

Object.values(NETWORKS).forEach((node: Network) => {
  const { name, colors } = node;
  const { primary, secondary, stroke, transparent } = colors;

  networkColors[`${name}-light`] = primary.light;
  networkColors[`${name}-dark`] = primary.dark;

  networkColorsSecondary[`${name}-light`] = secondary.light;
  networkColorsSecondary[`${name}-dark`] = secondary.dark;

  networkColorsStroke[`${name}-light`] = stroke.light;
  networkColorsStroke[`${name}-dark`] = stroke.dark;

  networkColorsTransparent[`${name}-light`] = transparent.light;
  networkColorsTransparent[`${name}-dark`] = transparent.dark;
});
