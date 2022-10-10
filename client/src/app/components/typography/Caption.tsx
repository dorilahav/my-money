import {BaseTypography, BaseTypographyProps} from './BaseTypography';

export interface CaptionProps extends Omit<BaseTypographyProps, 'fontSize' | 'fontWeight'> {}

export const Caption = (props: CaptionProps) => <BaseTypography fontSize="14px" fontWeight="regular" {...props} />;
