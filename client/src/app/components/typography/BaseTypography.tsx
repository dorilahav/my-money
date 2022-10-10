import {Typography as MuiTypography} from '@mui/material';

export type TypographyColor = 'primary' | 'primaryText' | 'success' | 'error' | 'info';
export type FontWeight = 'thin' | 'regular' | 'bold';

const colorToMuiMap: Record<TypographyColor, string> = {
  primary: 'primary.main',
  primaryText: 'primary.contrastText',
  success: 'success.main',
  error: 'error.main',
  info: 'info.main'
};

const fontWeightMap: Record<FontWeight, number> = {
  thin: 200,
  regular: 400,
  bold: 500
};

export interface BaseTypographyProps extends PropsWithChildren {
  color?: TypographyColor;
  fontSize: string;
  fontWeight: FontWeight;
}

export const BaseTypography = ({children, color = 'primary', fontSize, fontWeight}: BaseTypographyProps) => (
  <MuiTypography
    color={colorToMuiMap[color]}
    fontSize={fontSize}
    fontWeight={fontWeightMap[fontWeight]}
    lineHeight={1.2}
    children={children}
    pb={0.5}
  />
);
