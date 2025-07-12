export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "Starter",
        title: "Starter",
        desc: "Perfect for solopreneurs and small teams looking to automate their workflows without the hassle of server maintenance.",
        monthlyPrice: 700,
        annuallyPrice: 7560,
        buttonText: "Upgrade to Standard",
        features: [
            "Fully managed n8n instance on shared infrastructure",
            "Access to core integrations and triggers",
            "No server setup or maintenance required",
            "Secure HTTPS with custom domain support",
            "Monthly workflow usage reports",
            "Onboarding assistance & setup included",
            "Email support with 24-hour response time"
        ],
        link: "#"
    },
    {
        id: "mastermind",
        title: "Mastermind",
        desc: "Ideal for growing businesses and agencies who need advanced and dedicated resources and more control.",
        monthlyPrice: 2400,
        annuallyPrice: 25900,
        badge: "Most Popular",
        buttonText: "Upgrade to Mastermind",
        features: [
            "Dedicated n8n instance on isolated container/server.",
            "Weekly workflow health checks and optimization.",
            "Custom webhook domains with SSL certificates.",
            "Priority email & live chat support (response within 4 hours).",
            "Team collaboration tools (multi-user access).",
            "Full audit logs and workflow versioning.",
            "Integration consultancy & custom workflow reviews."
        ],
        link: "#"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Full-scale Automation solution for large organizations , advanced and dedicated resources and more control.",
        monthlyPrice: 7200,
        annuallyPrice: 7200,
        badge: "Custom Automation Solutions",
        buttonText: "Contact Sales",
        features: [
            "Dedicated VPS or cloud deployment with SLA-backed uptime",
            "24/7 premium support via phone, chat, and email",
            "Custom onboarding, training, and dedicated account manager",
            "Advanced security, compliance & audit logging",
            "Tailored workflow performance tuning and scalability audits",
            "API access for integration with existing tools and monitoring",
            "Custom feature development & professional services",
            "Full Control on Infrastucture",
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];

export const PLANS_FAQ = [
    {
        id: 1,
        question: "How does the AI content generation work?",
        answer: "Our AI generates high-quality marketing content across various formats including social media posts, email campaigns, and blog articles, while maintaining your brand voice."
    },
    {
        id: 2,
        question: "Can I manage multiple brands or clients?",
        answer: "Yes! The Scale Pro plan supports up to 5 brands, while Enterprise offers unlimited brand management capabilities."
    },
    {
        id: 3,
        question: "Is there a discount for annual billing?",
        answer: "Yes, you can save 15% by choosing annual billing over monthly billing for any of our plans."
    },
    {
        id: 4,
        question: "Do you offer special pricing for contractors?",
        answer: "Yes, we offer special rates for independent contractors and small construction firms. Contact our sales team for more information."
    },
    {
        id: 5,
        question: "How does the BIM integration work?",
        answer: "Our Enterprise plan includes full BIM integration, allowing you to view and manage 3D models, coordinate with team members, and track changes in real-time."
    },
    {
        id: 6,
        question: "What kind of support do you provide?",
        answer: "We offer email support for Starter plans, priority support for Professional plans, and 24/7 dedicated support with a personal account manager for Enterprise plans."
    },
    {
        id: 7,
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes, you can change your plan at any time. If you upgrade, you'll be prorated for the remainder of your billing period. Downgrades take effect at the next billing cycle."
    },
    {
        id: 8,
        question: "Is mobile access available?",
        answer: "Yes, all plans include access to our mobile app for iOS and Android, allowing you to manage projects on the go."
    },
    {
        id: 9,
        question: "What security measures do you have in place?",
        answer: "We offer industry-standard security for all plans, with additional features like SSO, audit logs, and custom security policies available in the Enterprise plan."
    }
];

export const PLANS_TABLE = [
    {
        id: 1,
        title: 'Growth Starter',
        priceMonthly: '$29',
        priceYearly: "$290",
        buttonText: 'Start free trial',
        usage: {
            members: '2 members',
            contentGeneration: '1,000 words/mo',
            socialChannels: '3 channels',
            brands: '1 brand',
        },
        features: [
            'Basic AI content generation',
            'Social media scheduling',
            'Content calendar',
            'Basic analytics',
            'Email marketing templates',
            'Basic automation',
            'Mobile app access',
            'Community support',
        ],
    },
    {
        id: 2,
        title: 'Scale Pro',
        priceMonthly: '$79',
        priceYearly: "$790",
        buttonText: 'Scale now',
        usage: {
            members: '5 members',
            contentGeneration: '10,000 words/mo',
            socialChannels: 'All platforms',
            brands: '5 brands',
        },
        features: [
            'Advanced AI content generation',
            'Custom AI training',
            'Advanced automation',
            'Campaign tracking',
            'Performance analytics',
            'A/B testing',
            'Priority support',
            'API access',
            'Advanced reporting',
        ],
    },
    {
        id: 3,
        title: 'Enterprise AI',
        priceMonthly: '$199',
        priceYearly: "$1990",
        buttonText: 'Contact sales',
        usage: {
            members: 'Unlimited',
            contentGeneration: 'Unlimited',
            socialChannels: 'Unlimited',
            brands: 'Unlimited',
        },
        features: [
            'Custom AI solutions',
            'Enterprise automation',
            'Multi-brand management',
            'Advanced security',
            'Custom integrations',
            'Dedicated support',
            'Custom training',
            'Enterprise analytics',
            'Custom workflows',
        ],
    },
];
