import {TypographyColor} from './BaseTypography';
import {Caption, CaptionProps} from './Caption';
import {Text, TextProps} from './Text';
import {Title, TitleProps} from './Title';

type AmountState = 'positive' | 'negative' | 'zero';

const variantToComponentMap = {
  caption: Caption,
  text: Text,
  title: Title
};

const positiveIsSuccessColors: Record<AmountState, TypographyColor> = {
  positive: 'success',
  zero: 'info',
  negative: 'error'
};

const positiveIsErrorColors: Record<AmountState, TypographyColor> = {
  positive: 'error',
  zero: 'info',
  negative: 'success'
};

interface BaseAmountTypographyProps {
  amount: number;
  positiveIsError?: boolean;
}

interface CaptionAmountTypographyProps extends Omit<CaptionProps, 'children' | 'color'>, BaseAmountTypographyProps {
  variant: 'caption';
}

interface TextAmountTypographyProps extends Omit<TextProps, 'children' | 'color'>, BaseAmountTypographyProps {
  variant?: 'text';
}

interface TitleAmountTypographyProps extends Omit<TitleProps, 'children' | 'color'>, BaseAmountTypographyProps {
  variant: 'title';
}

type AmountTypographyProps = CaptionAmountTypographyProps | TextAmountTypographyProps | TitleAmountTypographyProps;

export const AmountTypography = ({variant = 'text', amount, positiveIsError, ...props}: AmountTypographyProps) => {
  const Component = variantToComponentMap[variant];
  const amountText = amount.toLocaleString();
  const amountState: AmountState = amount < 0 ? 'negative' : amount > 0 ? 'positive' : 'zero';
  const colors = positiveIsError ? positiveIsErrorColors : positiveIsSuccessColors;
  const color = colors[amountState];

  return (
    <Component {...props} color={color}>
      ₪{amountText}
    </Component>
  );
};
