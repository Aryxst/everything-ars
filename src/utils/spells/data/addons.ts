import { r } from '../../registration';

export const addonMap = {
 tmg: r('Too Many Glyphs'),
 neg: r('Not Enough Glyphs'),
 omega: r('Ars Omega'),
 artifice: r('Ars Artifice'),
 additions: r('Ars Additions'),
 plus: r("Adam's Ars Plus"),
 trinkets: r('Ars Trinkets'),
};

export type Addon = keyof typeof addonMap;
