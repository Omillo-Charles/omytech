import {
  FiBriefcase,
  FiCheckCircle,
  FiCreditCard,
  FiFileText,
  FiFolder,
  FiGrid,
  FiShare2,
} from 'react-icons/fi';

export type DashboardView = 'Overview' | 'Projects' | 'Quotes' | 'Invoices' | 'Files' | 'Referrals' | 'Settings';

export const navigation: { label: DashboardView; icon: typeof FiGrid }[] = [
  { label: 'Overview', icon: FiGrid },
  { label: 'Projects', icon: FiBriefcase },
  { label: 'Quotes', icon: FiFileText },
  { label: 'Invoices', icon: FiCreditCard },
  { label: 'Files', icon: FiFolder },
  { label: 'Referrals', icon: FiShare2 },
];

export const projects = [
  { name: 'OMYTECH website', type: 'Website', status: 'In progress', progress: 72, due: 'Sep 30, 2026', color: '#0b78b7' },
  { name: 'Brand growth campaign', type: 'Digital marketing', status: 'Planning', progress: 24, due: 'Oct 18, 2026', color: '#8a5cf6' },
  { name: 'Mobile product discovery', type: 'UI/UX design', status: 'Review needed', progress: 88, due: 'Sep 25, 2026', color: '#d58a22' },
];

export const activity = [
  { title: 'New design files were shared', detail: 'OMYTECH website · 2 hours ago', icon: FiFolder, color: '#0b78b7' },
  { title: 'Milestone marked as complete', detail: 'Mobile product discovery · Yesterday', icon: FiCheckCircle, color: '#26834b' },
  { title: 'Invoice INV-004 is due soon', detail: 'Due September 28, 2026', icon: FiCreditCard, color: '#b45c16' },
];