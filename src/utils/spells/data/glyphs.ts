import ars_additions from "./glyphs/ars_additions";
import ars_elemental from "./glyphs/ars_elemental";
import ars_nouveau from "./glyphs/ars_nouveau";
import ars_plus from "./glyphs/ars_plus";
import too_many_glyphs from "./glyphs/too_many_glyphs";

export const glyphMap = {
  ...ars_nouveau,
  ...ars_additions,
  ...too_many_glyphs,
  ...ars_elemental,
  ...ars_plus,
};

export type Glyph = keyof typeof glyphMap;
