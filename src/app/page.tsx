import { resume } from "@/data/resume";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stagger, StaggerItem } from "@/components/Stagger";
import { SpotlightCard } from "@/components/SpotlightCard";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-foreground">
      <span className="gradient-accent h-1 w-7 rounded-full" />
      {children}
    </h2>
  );
}

function SidebarHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-gradient mb-3 text-xs font-bold uppercase tracking-[0.18em]">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      {/* Page-level aurora */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 no-print">
        <span className="aurora animate-drift-a left-[-10%] top-[-5%] h-96 w-96" style={{ background: "var(--grad-1)", opacity: 0.28 }} />
        <span className="aurora animate-drift-b right-[-10%] top-1/3 h-[28rem] w-[28rem]" style={{ background: "var(--grad-3)", opacity: 0.22 }} />
        <span className="aurora animate-drift-a bottom-[-10%] left-1/3 h-96 w-96 [animation-delay:-8s]" style={{ background: "var(--grad-2)", opacity: 0.2 }} />
      </div>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
        <article className="print-page glass shadow-card overflow-hidden rounded-3xl border border-border">
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
                      <SpotlightCard key={project.name} className="project-card group p-4">
                        <h3 className="font-display text-base font-semibold text-foreground transition-colors group-hover:text-accent">
                          {project.name}
                        </h3>
                        <p className="mt-0.5 text-sm italic text-muted">{project.tagline}</p>
                        <ul className="mt-3 space-y-2">
                          {project.highlights.map((h, i) => (
                            <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                              <span className="gradient-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </SpotlightCard>
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
                              <span className="gradient-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
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
                              <span className="gradient-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
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
                        <Stagger className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => (
                            <StaggerItem key={item}>
                              <span className="chip inline-block cursor-default rounded-lg px-2.5 py-1 text-xs font-medium">
                                {item}
                              </span>
                            </StaggerItem>
                          ))}
                        </Stagger>
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
                        <p className="text-xs font-medium text-accent">{edu.detail}</p>
                        {edu.href && (
                          <a
                            href={edu.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-0.5 inline-block text-xs font-medium text-accent hover:underline"
                          >
                            View credential
                          </a>
                        )}
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
                        {(cert.credentialId || cert.href) && (
                          <p className="mt-0.5 text-xs text-muted">
                            {cert.credentialId && <span>ID {cert.credentialId}</span>}
                            {cert.credentialId && cert.href && " · "}
                            {cert.href && (
                              <a
                                href={cert.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-accent transition-colors hover:underline"
                              >
                                View credential
                              </a>
                            )}
                          </p>
                        )}
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
          <a href={`mailto:${resume.email}`} className="text-gradient font-semibold hover:underline">
            Get in touch
          </a>
        </footer>
      </main>
    </div>
  );
}
