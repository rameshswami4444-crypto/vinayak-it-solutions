import AdminLoginForm from '@/components/admin/AdminLoginForm';

export const metadata = {
  title: 'Admin Login',
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md items-center">
        <div className="surface-card w-full p-6 sm:p-8">
          <span className="section-eyebrow">Admin Access</span>
          <h1 className="mt-4 text-3xl font-semibold text-white">Sign in to the dashboard</h1>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Use the admin credentials configured in your environment variables.
          </p>
          <div className="mt-6">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
