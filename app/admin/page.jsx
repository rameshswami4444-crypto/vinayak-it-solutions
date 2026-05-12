import { ShieldCheck } from 'lucide-react';
import AdminLogoutButton from '@/components/admin/AdminLogoutButton';
import { getEnquiries } from '@/lib/data';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin Dashboard',
};

export default async function AdminPage() {
  const { enquiries, error } = await getEnquiries();

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="surface-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                <ShieldCheck className="h-4 w-4" />
                Protected Dashboard
              </div>
              <h1 className="mt-4 text-3xl font-semibold text-white">Enquiries</h1>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                View contact form submissions from your Supabase <code>enquiries</code> table.
              </p>
            </div>

            <AdminLogoutButton />
          </div>

          {error ? (
            <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-200">
              {error}
            </div>
          ) : null}

          {!error && enquiries.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
              <h2 className="text-xl font-semibold text-white">No enquiries found</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                New form submissions will appear here once users start sending enquiries.
              </p>
            </div>
          ) : null}

          {!error && enquiries.length > 0 ? (
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60">
              <div className="overflow-x-auto">
                <table className="data-table min-w-full divide-y divide-white/10">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Service</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-slate-950/70">
                    {enquiries.map((enquiry, index) => (
                      <tr key={`${enquiry.email}-${enquiry.phone}-${index}`}>
                        <td>{enquiry.name || '-'}</td>
                        <td>{enquiry.phone || '-'}</td>
                        <td>{enquiry.email || '-'}</td>
                        <td>{enquiry.service || '-'}</td>
                        <td className="min-w-[280px]">{enquiry.message || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
