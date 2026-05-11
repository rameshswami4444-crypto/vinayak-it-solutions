import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic';

async function getEnquiries() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return {
      enquiries: [],
      error: 'Supabase environment variables are missing.',
    };
  }

  const supabase = createClient(url, anonKey);
  const { data, error } = await supabase
    .from('enquiries')
    .select('name, phone, email, service, message');

  if (error) {
    return {
      enquiries: [],
      error: error.message || 'Failed to fetch enquiries.',
    };
  }

  return {
    enquiries: data ?? [],
    error: '',
  };
}

export default async function AdminPage() {
  const { enquiries, error } = await getEnquiries();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-sky-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3">
          <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            Admin Panel
          </span>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Enquiries
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            View all contact form submissions from your Supabase `enquiries` table.
          </p>
        </div>

        {error ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
            {error}
          </div>
        ) : null}

        {!error && enquiries.length === 0 ? (
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">No enquiries found</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              New submissions will appear here once users send the contact form.
            </p>
          </div>
        ) : null}

        {!error && enquiries.length > 0 ? (
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Service
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                      Message
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {enquiries.map((enquiry, index) => (
                    <tr key={`${enquiry.email}-${enquiry.phone}-${index}`} className="align-top">
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {enquiry.name || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {enquiry.phone || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {enquiry.email || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {enquiry.service || '-'}
                      </td>
                      <td className="max-w-md px-6 py-4 text-sm leading-6 text-slate-600">
                        {enquiry.message || '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
