import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">

            <div className="absolute flex lg:hidden size-40 rounded-full bg-blue-500 blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10"></div>

            <div className="flex flex-col items-center justify-center gap-y-8 relative">
                <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                    <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-4 text-foreground/70" />
                        <Icons.circle2 className="size-1 text-foreground/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-1 text-foreground/50" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                        <Icons.circle1 className="size-4 text-foreground/60" />
                        <Icons.circle2 className="size-1 text-foreground/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative hidden lg:block overflow-hidden">
                        <button className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-3 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-red-300 to-rose-500 text-[9px] font-medium mr-2 text-white">
                                    NEW
                                </span>
                                <a target="_blank" href="https://blog.n8n.io/how-to-build-ai-agent/">How To Build Your First AI Agent ?</a>
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                        From Idea to {" "}
                            <span className="bg-gradient-to-r from-white to-blue-600 bg-clip-text text-transparent">
                                Execution <br/>
                            </span>
                            We Build <span className="bg-gradient-to-t from-white from-10% via-[#ea4b71] to-[#ea4b71] to-95% bg-clip-text text-transparent">n8n</span> That Works.
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                        We help teams unlock the full potential of n8n—so they can move faster, reduce errors, and scale ops without bloat.
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link href="#" className="flex items-center gap-2 group">
                                <Button size="lg">
                                    Start Free Trial
                                    <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-all duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                    <Container delay={0.3} className="relative">
                        <div className="relative rounded-xl lg:rounded-2xl border border-border p-2 backdrop-blur-lg mt-10 max-w-6xl mx-auto">
                            <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                            <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

                            <div className="rounded-lg lg:rounded-xl border border-border bg-background">
                                <Image
                                    src="/images/dashboard.webp"
                                    alt="dashboard"
                                    width={1920}
                                    height={1080}
                                    className="rounded-lg lg:rounded-xl"
                                />
                            </div>

                        </div>
                        <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2"></div>
                    </Container>

                </div>
            </div>
        </div>
    )
};

export default Hero
