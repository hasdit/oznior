import { FirebaseClientProvider } from '@/firebase';
import type { Metadata } from 'next';
import { AccountPageContent } from './account-page-content';

// Metadata is defined in the Server Component
export const metadata: Metadata = {
    title: 'My Account',
    description: 'Manage your OZNIOR account, view your order history, and update your details.',
};

// Main page component is a Server Component
export default function AccountPage() {
    return (
        <FirebaseClientProvider>
            <AccountPageContent />
        </FirebaseClientProvider>
    );
}
