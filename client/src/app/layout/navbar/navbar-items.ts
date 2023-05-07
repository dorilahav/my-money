import {IconType} from 'react-icons';
import {FaCreditCard, FaHandHoldingUsd, FaMoneyCheckAlt, FaShekelSign, FaTable} from 'react-icons/fa';

export interface NavbarItem {
  label: string;
  icon: IconType;
  path: string;
}

const items: NavbarItem[] = [
  {
    label: 'דשבורד',
    icon: FaTable,
    path: '/'
  },
  {
    label: 'העברות',
    icon: FaMoneyCheckAlt,
    path: '/transactions'
  },
  {
    label: 'חובות',
    icon: FaHandHoldingUsd,
    path: '/debts'
  },
  {
    label: 'חשבונות',
    icon: FaShekelSign,
    path: '/accounts'
  },
  {
    label: 'כרטיסים',
    icon: FaCreditCard,
    path: '/cards'
  }
];

export default items;
