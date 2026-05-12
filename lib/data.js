import { fallbackPortfolio, fallbackServices } from '@/lib/constants';
import { createSupabaseClient } from '@/lib/supabase';

function normalizeServices(services) {
  return services.map((service, index) => ({
    id: service.id || service.slug || service.title?.toLowerCase().replace(/\s+/g, '-') || `service-${index}`,
    title: service.title || service.name || 'Service',
    description: service.description || service.summary || 'Professional service support for your business.',
    category: service.category || service.group || 'Services',
  }));
}

function normalizePortfolio(items) {
  return items.map((item, index) => ({
    id: item.id || item.slug || item.title?.toLowerCase().replace(/\s+/g, '-') || `portfolio-${index}`,
    title: item.title || item.name || 'Project',
    category: item.category || 'Featured Project',
    description: item.description || item.summary || 'Selected client work and delivery outcomes.',
    metrics: item.metrics || item.result || 'Professional execution with measurable business value',
  }));
}

export async function getServices() {
  try {
    const supabase = createSupabaseClient();

    if (!supabase) {
      return fallbackServices;
    }

    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: true });

    if (error || !data?.length) {
      return fallbackServices;
    }

    return normalizeServices(data);
  } catch (error) {
    console.error('Failed to load services:', error);
    return fallbackServices;
  }
}

export async function getPortfolio() {
  try {
    const supabase = createSupabaseClient();

    if (!supabase) {
      return fallbackPortfolio;
    }

    const { data, error } = await supabase
      .from('portfolio')
      .select('*')
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (error || !data?.length) {
      return fallbackPortfolio;
    }

    return normalizePortfolio(data);
  } catch (error) {
    console.error('Failed to load portfolio:', error);
    return fallbackPortfolio;
  }
}

export async function getEnquiries() {
  try {
    const supabase = createSupabaseClient();

    if (!supabase) {
      return {
        enquiries: [],
        error: 'Supabase environment variables are missing.',
      };
    }

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
  } catch (error) {
    return {
      enquiries: [],
      error: error instanceof Error ? error.message : 'Failed to fetch enquiries.',
    };
  }
}
