import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { CTASection } from "@/components/ui/CTASection";
import { skillCategories } from "@/lib/data/skills";
import { services } from "@/lib/data/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />

      {/* Expertise */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What I Do"
            title="Full-spectrum AI engineering"
            description="From research and modeling to production deployment — across the entire modern AI stack."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.slice(0, 6).map((c, i) => (
              <Reveal key={c.title} delay={i} className="glass-card group p-6 hover:-translate-y-1 hover:border-electric/40 hover:shadow-glow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric/20 to-deep-blue/20 text-electric transition-colors group-hover:from-electric group-hover:to-deep-blue group-hover:text-white">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-gray">{c.blurb}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/skills" className="btn-secondary">
              Explore All Skills <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section border-y border-white/10 bg-surface/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured projects"
            description="A few systems I've designed and shipped — each grounded in a real-world problem and measurable impact."
          />
          <FeaturedProjects />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="How I can help your team"
            description="Engagements designed around outcomes, from discovery to a production-grade system."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={i} className="glass-card p-6 hover:border-electric/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/15 text-electric">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-gray">{s.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              See All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
