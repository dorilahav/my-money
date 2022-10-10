import {
  faChartBar,
  faCreditCard,
  faFileInvoiceDollar,
  faHandHoldingUsd,
  faMoneyCheckAlt,
  faShekelSign,
  faTable,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

export interface NavbarItem {
  label: string;
  icon: IconDefinition;
  path: string;
}

const items: NavbarItem[] = [
  {
    label: 'דשבורד',
    icon: faTable,
    path: '/'
  },
  {
    label: 'העברות',
    icon: faMoneyCheckAlt,
    path: '/transactions'
  },
  {
    label: 'חובות',
    icon: faHandHoldingUsd,
    path: '/debts'
  },
  {
    label: 'דוחות',
    icon: faFileInvoiceDollar,
    path: '/reports'
  },
  {
    label: 'סטטיסטיקות',
    icon: faChartBar,
    path: '/statistics'
  },
  {
    label: 'חשבונות',
    icon: faShekelSign,
    path: '/accounts'
  },
  {
    label: 'כרטיסים',
    icon: faCreditCard,
    path: '/cards'
  }
];

export default items;
