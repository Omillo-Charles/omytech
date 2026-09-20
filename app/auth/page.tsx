import type { Metadata } from 'next';
import AuthPanel from '../../components/auth/AuthPanel';

export const metadata: Metadata = {
  title: 'Sign In | OMYTECH Kenya',
  description: 'Sign in or create your OMYTECH Kenya account.',
};

export default function AuthPage() {
  return <AuthPanel />;
}