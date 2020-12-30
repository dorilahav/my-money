import {useTheme} from './ThemeHook';
import {ColorWithBackground} from '../providers/theme/Theme';

export const useColor = (color?: string) => {
  const theme = useTheme();

  if (color && color in theme.colors) {
    // @ts-ignore
    const themeColor: string | ColorWithBackground = theme.colors[color];

    return typeof themeColor === 'string' ?
      themeColor :
      themeColor.main;
  }

  return color;
}