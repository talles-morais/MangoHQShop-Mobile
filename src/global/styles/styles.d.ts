import type { CSSProp } from "styled-components";
import theme from "./theme";


declare module "styled-components" {
  type ThemeType = typeof theme;
  
  export interface DefaultTheme extends ThemeType {}
}
