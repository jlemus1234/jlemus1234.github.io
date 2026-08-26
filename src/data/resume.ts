export interface Contact {
  location: string;
  email: string;
  github: string;
}

export interface Job {
  employer: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  year: string;
}

export const contact: Contact = {
  location: 'White Plains, NY',
  email: 'Jose.A.LemusOrtiz@gmail.com',
  github: 'https://github.com/jlemus1234',
};

export const summary =
  'Software Engineer · Full-Stack · Building production platforms, from backend services and marketplaces to AI-driven features.';

export const skills = {
  'Programming Languages': ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Python'],
  Technologies: [
    'Next.js',
    'React',
    'Redux',
    'REST APIs',
    'Node.js',
    'TanStack Query',
    'Claude API',
    'Jest',
    'Playwright',
    'AWS',
  ],
};

export const experience: Job[] = [
  {
    employer: 'Wix.com',
    location: 'New York City, NY',
    title: 'Software Engineer',
    startDate: 'April 2022',
    endDate: 'June 2026',
    bullets: [
      'Launched and developed the Wix Marketplace using Next.js, allowing thousands of partners to offer their services and custom-made templates for sale to the public.',
      'Designed and implemented backend-for-frontend services to aggregate data across internal microservices, and built the frontends that surfaced them, covering offers, invoicing, earnings tracking, client management, and project handoff.',
      'Developed AI agent skills enabling Wix chatbots to recommend partner services and Wix offerings to users based on their conversation.',
      'Built dashboards to monitor trends like project briefs submitted and premium subscription conversions to identify openings for new product offerings.',
      'Collaborated with PMs to scope and implement features, using feature flags to test outcomes and iterating based on results.',
    ],
  },
  {
    employer: 'Exactera',
    location: 'New York City, NY',
    title: 'Full Stack Engineer',
    startDate: 'November 2020',
    endDate: 'March 2022',
    bullets: [
      'Delivered multiple features across a new multi-tenant tax provision SaaS product and a transfer pricing product, including an Amazon Lex chatbot implementation and entity completion status spanning UI, APIs, database, and permissions across 4 stacks.',
      'Solely designed and implemented tax and exchange rate management across the full stack, building UI components, REST APIs, and database migrations spanning three repositories.',
      "Architected and stood up a service from scratch using AWS Lambda, SQS, and Terraform, including IAM roles and secrets configuration across four infrastructure stacks that allowed users to roll relevant data into subsequent years' reports.",
      "Migrated a legacy product's Angular frontend to React, aligning coding standards across company repositories.",
      'Wrote SQL migration scripts to update rates for taxes and other regulatory standards for government compliance reports.',
    ],
  },
  {
    employer: 'JumboCode',
    location: 'Medford, MA',
    title: 'Front End Intern',
    startDate: 'September 2018',
    endDate: 'May 2019',
    bullets: [
      'Built React components displaying information on resource centers across the United States using the Google Maps platform.',
    ],
  },
  {
    employer: 'OpenWeb',
    location: 'New York City, NY',
    title: 'Research and Development Intern',
    startDate: 'July 2018',
    endDate: 'August 2018',
    bullets: [
      'Built a marketing dashboard identifying trends across the OpenWeb platform using NodeJS, PostgreSQL, Watson Natural Language Understanding, React, and Redux.',
    ],
  },
];

export const education: EducationEntry[] = [
  {
    school: 'Tufts University',
    location: 'Medford, MA',
    degree: 'Bachelor of Science in Computer Science',
    year: '2019',
  },
];
