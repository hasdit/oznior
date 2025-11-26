import { LoginForm } from './login-form';
import { FirebaseClientProvider } from '@/firebase';

export default function LoginPage() {
  return (
    <FirebaseClientProvider>
      <div className="container flex min-h-[80vh] items-center justify-center py-12">
        <LoginForm />
      </div>
    </FirebaseClientProvider>
  );
}
