import {AdvancedColor} from '../providers/theme/Theme';
import {useTheme} from './ThemeHook';

export const useColor = (color?: string, type: keyof AdvancedColor = 'main'): string | undefined => {
  const theme = useTheme();

  if (color && color in theme.colors) {
    const themeColor = theme.colors[color as ThemeColorOptions];

    return typeof themeColor === 'string' ? themeColor : themeColor[type];
  }

  return color;
}