import {BaseTypography, BaseTypographyProps, FontWeight} from './BaseTypography';

export interface TitleProps extends Omit<BaseTypographyProps, 'fontSize' | 'fontWeight'> {
  fontWeight?: FontWeight;
}

export const Title = ({fontWeight = 'bold', ...props}: TitleProps) => <BaseTypography fontSize="24px" fontWeight={fontWeight} {...props} />;
