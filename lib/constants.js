export const company = {
  name: 'Vinayak IT Solutions',
  email: 'vinayakitsoutionssuratgarh@gmail.com',
  location: 'Suratgarh, Rajasthan',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const whatsappContacts = [
  {
    name: 'Ramesh',
    phone: '8209733894',
    href: 'https://wa.me/918209733894?text=Hi%20Vinayak%20IT%20Solutions',
  },
  {
    name: 'Kishan',
    phone: '9950756514',
    href: 'https://wa.me/919950756514?text=Hi%20Vinayak%20IT%20Solutions',
  },
];

export const fallbackServices = [
  {
    id: 'static-website',
    title: 'Static Website Development',
    description: 'Fast, lightweight business websites that present your company clearly and professionally.',
    category: 'Web Development',
  },
  {
    id: 'dynamic-website',
    title: 'Dynamic Website Development',
    description: 'Scalable websites with custom features, dashboards, forms, and database integration.',
    category: 'Web Development',
  },
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    description: 'Brand-aligned creatives for social media, promotions, and business communication.',
    category: 'Creative',
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Clean editing for promotional videos, reels, service explainers, and digital campaigns.',
    category: 'Creative',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Practical campaign planning focused on visibility, lead generation, and steady growth.',
    category: 'Marketing',
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads',
    description: 'Targeted ad campaigns for Facebook and Instagram with clear messaging and reporting.',
    category: 'Marketing',
  },
  {
    id: 'field-team-marketing',
    title: 'Field Team Marketing',
    description: 'On-ground support and campaign coordination that connects local promotion with business goals.',
    category: 'Marketing',
  },
  {
    id: 'gst',
    title: 'GST Services',
    description: 'Support for registrations, filings, and GST-related documentation for daily operations.',
    category: 'Business Support',
  },
  {
    id: 'taxation',
    title: 'Taxation',
    description: 'Guidance and processing for tax work with an organized, deadline-aware approach.',
    category: 'Business Support',
  },
  {
    id: 'accounting',
    title: 'Accounting',
    description: 'Structured bookkeeping and financial record support for small and growing businesses.',
    category: 'Business Support',
  },
];

export const serviceOptions = fallbackServices.map((service) => service.title);

export const fallbackPortfolio = [
  {
    id: 'corporate-web',
    title: 'Corporate Presence Website',
    category: 'Business Website',
    description: 'A structured multi-page website designed to improve trust, service clarity, and enquiry flow.',
    metrics: 'Clearer lead capture and stronger mobile experience',
  },
  {
    id: 'marketing-campaign',
    title: 'Local Marketing Campaign System',
    category: 'Marketing Operations',
    description: 'A blended digital and field-marketing workflow with campaign assets and lead follow-up support.',
    metrics: 'Better campaign coordination across online and offline channels',
  },
  {
    id: 'business-support',
    title: 'Business Support Workflow',
    category: 'Operations Support',
    description: 'A streamlined service process for accounting, taxation, and compliance request handling.',
    metrics: 'Faster request turnaround and cleaner client communication',
  },
];
