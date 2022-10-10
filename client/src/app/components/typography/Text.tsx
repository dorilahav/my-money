import {BaseTypography, BaseTypographyProps, FontWeight} from './BaseTypography';

export interface TextProps extends Omit<BaseTypographyProps, 'fontSize' | 'fontWeight'> {
  fontWeight?: FontWeight;
}

export const Text = ({fontWeight = 'regular', ...props}: TextProps) => <BaseTypography fontSize="16px" fontWeight={fontWeight} {...props} />;
