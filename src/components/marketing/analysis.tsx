import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                    n8n in Action: <br /><span className="font-subheading italic">Real Impact, Real Results</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                    Explore how n8n transforms operations—from real-world use cases to powerful features and measurable results.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Top Automation Use Cases
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                Real-world workflows powered by n8n that save teams hours of manual work every month — from syncing leads to handling orders across platforms.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">
                                                Over 5,000+
                                            </div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                +150% from last year
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="grid grid-cols-3 text-sm text-muted-foreground py-2">
                                            <div>Use Case</div>
                                            <div>Trigger</div>
                                            <div>Avg. Tasks Saved</div>
                                        </div>
                                        {[
                                            { name: "New Lead → CRM Sync", status: "Typeform Submission", reach: "Typeform → HubSpot + Slack", roi: "1,200+" },
                                            { name: "eCommerce Order Flow", status: "Webhook", reach: "MySQL + Email + Discord", roi: "3,000+" },
                                            { name: "Calendar Auto-Invite", status: "New Event in Google Cal", reach: "Google Calendar", roi: "800+" },
                                        ].map((campaign) => (
                                            <div key={campaign.name} className="grid grid-cols-3 text-sm py-2 border-t border-border/50">
                                                <div>{campaign.name}</div>
                                                <div>{campaign.status}</div>
                                                <div className="font-semibold">{campaign.roi}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                The Impact of n8n Automation
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                A direct comparison of operational KPIs before and after integrating n8n into a company's stack.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <div>
                                            <div className="text-3xl font-semibold">up to 88%</div>
                                            <div className="text-sm text-green-500 flex items-center gap-1 mt-2">
                                                <TrendingUpIcon className="w-4 h-4" />
                                                cut automation overhead after switching to n8n.
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button size="icon" variant="ghost">
                                                <FilterIcon className="w-5 h-5" />
                                            </Button>
                                            <Button size="icon" variant="ghost">
                                                <DownloadIcon className="w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Audience Table */}
                                    <div className="space-y-2">
                                        <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                            <div>Metric</div>
                                            <div>Before n8n</div>
                                            <div>After n8n</div>
                                            <div>Improvement</div>
                                        </div>
                                        {[
                                            { channel: "Repetitive Tasks", users: "40+ hours/week", sessions: "< 5 hours/week", rate: "⬇︎ ~88% reduction" },
                                            { channel: "Deployment Time", users: "1–2 weeks", sessions: "1–2 days", rate: "🚀 ~85% faster" },
                                            { channel: "Task Error Rate", users: "~7%", sessions: "< 1%", rate: "✅ 6x" },
                                        ].map((metric) => (
                                            <div key={metric.channel} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                                <div>{metric.channel}</div>
                                                <div>{metric.users}</div>
                                                <div>{metric.sessions}</div>
                                                <div className="font-semibold">{metric.rate}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
