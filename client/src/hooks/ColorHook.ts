import {Colors, ColorWithBackground} from '../providers/theme/Theme';
import {useTheme} from './ThemeHook';

export const useColor = (color?: string): string | undefined => {
  const theme = useTheme();

  if (color && color in theme.colors) {
    const themeColor: string | ColorWithBackground = theme.colors[color as keyof Colors];

    return typeof themeColor === 'string' ?
      themeColor :
      themeColor.main;
  }

  return color;
}