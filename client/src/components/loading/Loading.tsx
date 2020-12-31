import React, {FC} from 'react';
import {Icon} from '../icons';
import {IconProps} from '../icons/Icon';

type LoadingProps = Omit<IconProps, 'icon' | 'spin'>;

export const Loading: FC<LoadingProps> = (props) => <Icon icon="faCircleNotch" spin {...props}/>;