import {createUseStyles} from 'react-jss';
import {Styles} from 'jss';

export const makeStyles = (
  styles: Styles | ((theme: Theme) => Styles)
) => createUseStyles<Theme>(styles);