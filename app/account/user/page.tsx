import type { Metadata } from 'next';
import UserDashboard from '../../../components/user/UserDashboard';

export const metadata: Metadata = {
	title: 'Client Dashboard | OMYTECH Kenya',
	description: 'Manage your OMYTECH Kenya projects, quotes, files, invoices, and conversations.',
};

export default function UserAccountPage() {
	return <UserDashboard />;
}
