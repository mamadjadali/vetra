import {
    ChartColumnBigIcon,
    DatabaseIcon,
    TrendingUpIcon,
    WandSparklesIcon,
    ZapIcon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Custom Workflow Design",
        description: "We build workflows tailored to your business logic.",
        icon: WandSparklesIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Rapid Setup & Scaling",
        description: "We handle the infrastructure, best practices, and scalability — so you don’t have to.",
        icon: ChartColumnBigIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Reliable Maintenance & Monitoring",
        description: "Proactive debugging, version upgrades, and alerting — handled for you.",
        icon: DatabaseIcon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Third-Party Integrations",
        description: " From APIs to webhooks to databases, we bridge your stack with powerful n8n integrations.",
        icon: TrendingUpIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Transparent Logs & Insights",
        description: "See what’s running, when, and why.",
        icon: ZapIcon,
        image: "/images/feature-five.svg",
    }
]