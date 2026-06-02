import { resume } from "@/data/resume";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-foreground">
      <span className="h-px w-6 bg-accent" />
      {children}
    </h2>
  );
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
      <article className="print-page overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_1px_2px_rgba(28,26,23,0.04),0_12px_40px_-12px_rgba(28,26,23,0.12)]">
        <Header />

        {/* Body */}
        <div className="grid gap-10 px-8 py-10 sm:px-12 sm:py-12 lg:grid-cols-[1fr_300px] lg:gap-12">
          {/* Main column */}
          <div className="space-y-12">
            <Reveal>
              <section>
                <SectionHeading>Summary</SectionHeading>
                <p className="text-[15px] leading-relaxed text-muted">{resume.summary}</p>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <SectionHeading>Product &amp; Design Projects</SectionHeading>
                <div className="space-y-5">
                  {resume.projects.map((project) => (
                    <div
                      key={project.name}
                      className="rounded-xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-border hover:bg-accent-soft/40 hover:shadow-sm"
                    >
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {project.name}
                      </h3>
                      <p className="mt-0.5 text-sm italic text-muted">{project.tagline}</p>
                      <ul className="mt-3 space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <SectionHeading>Work Experience</SectionHeading>
                <div className="space-y-7">
                  {resume.experience.map((job) => (
                    <div key={`${job.org}-${job.role}`}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="font-display text-base font-semibold text-foreground">
                          {job.role}
                          <span className="font-sans font-normal text-muted"> · {job.org}</span>
                        </h3>
                        <span className="text-sm tabular-nums text-muted">{job.period}</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal>
              <section>
                <SectionHeading>Volunteer Experience</SectionHeading>
                <div className="space-y-7">
                  {resume.volunteer.map((vol) => (
                    <div key={vol.org}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h3 className="font-display text-base font-semibold text-foreground">
                          {vol.role}
                          <span className="font-sans font-normal text-muted"> · {vol.org}</span>
                        </h3>
                        <span className="text-sm tabular-nums text-muted">{vol.period}</span>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {vol.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 lg:border-l lg:border-border lg:pl-12">
            <Reveal delay={0.1}>
              <section>
                <SidebarHeading>Core Skills</SidebarHeading>
                <div className="space-y-5">
                  {resume.skills.map((group) => (
                    <div key={group.category}>
                      <h3 className="mb-2 text-sm font-semibold text-foreground">{group.category}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-white"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.15}>
              <section>
                <SidebarHeading>Education</SidebarHeading>
                <div className="space-y-4">
                  {resume.education.map((edu) => (
                    <div key={edu.credential}>
                      <h3 className="text-sm font-semibold leading-snug text-foreground">
                        {edu.credential}
                      </h3>
                      <p className="text-sm text-muted">{edu.institution}</p>
                      <p className="text-xs text-accent">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.2}>
              <section>
                <SidebarHeading>Certifications</SidebarHeading>
                <ul className="space-y-3">
                  {resume.certifications.map((cert) => (
                    <li key={cert.name}>
                      <p className="text-sm font-medium leading-snug text-foreground">{cert.name}</p>
                      <p className="text-xs text-muted">
                        {cert.issuer} · {cert.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal delay={0.25}>
              <section>
                <SidebarHeading>Languages</SidebarHeading>
                <ul className="space-y-2">
                  {resume.languages.map((lang) => (
                    <li key={lang.name} className="flex items-baseline justify-between gap-2 text-sm">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-muted">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </aside>
        </div>
      </article>

      <footer className="mt-8 text-center text-sm text-muted no-print">
        <a href={`mailto:${resume.email}`} className="font-medium text-accent hover:underline">
          Get in touch
        </a>
      </footer>
    </main>
  );
}
