import { createSupabaseClient } from '@/lib/supabase';

const fallbackServices = [
  {
    id: 'strategy',
    title: 'Product Engineering',
    description: 'Design, build, and scale modern web platforms with performance-first architecture.',
    icon: 'Layers3',
    accent: 'from-neon-blue/30 to-neon-purple/20',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Automated deployments, resilient infrastructure, and observability for reliable growth.',
    icon: 'CloudCog',
    accent: 'from-neon-purple/30 to-neon-pink/20',
  },
  {
    id: 'automation',
    title: 'AI & Automation',
    description: 'Workflow automation, data integrations, and intelligent systems that remove operational drag.',
    icon: 'Bot',
    accent: 'from-neon-cyan/30 to-neon-blue/20',
  },
];

const fallbackPortfolio = [
  {
    id: 'ops-suite',
    title: 'OpsSuite Control Center',
    category: 'Enterprise SaaS',
    description: 'A multi-tenant operations dashboard combining analytics, alerting, and workflow automations.',
    metrics: '41% faster incident response',
  },
  {
    id: 'retail-grid',
    title: 'RetailGrid Commerce',
    category: 'Digital Commerce',
    description: 'Performance-tuned storefront ecosystem with headless CMS, payments, and logistics sync.',
    metrics: '2.4x conversion uplift',
  },
  {
    id: 'med-bridge',
    title: 'MedBridge Experience',
    category: 'Healthcare Platform',
    description: 'Secure patient workflows, appointment automations, and real-time care coordination tools.',
    metrics: '99.95% platform uptime',
  },
];

export async function getServices() {
  try {
    const client = createSupabaseClient();
    const { data, error } = await client
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Failed to fetch services:', error.message);
      return fallbackServices;
    }

    return data?.length ? data : fallbackServices;
  } catch (error) {
    console.error('Unexpected services fetch error:', error);
    return fallbackServices;
  }
}

export async function getPortfolio() {
  try {
    const client = createSupabaseClient();
    const { data, error } = await client
      .from('portfolio')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Failed to fetch portfolio:', error.message);
      return fallbackPortfolio;
    }

    return data?.length ? data : fallbackPortfolio;
  } catch (error) {
    console.error('Unexpected portfolio fetch error:', error);
    return fallbackPortfolio;
  }
}

