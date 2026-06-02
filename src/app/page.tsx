import { resume } from "@/data/resume";

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
        {/* Header */}
        <header className="border-b border-border bg-accent-soft px-8 py-10 sm:px-12 sm:py-12">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {resume.name}
          </h1>
          <p className="mt-2 text-lg text-accent sm:text-xl">{resume.title}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span>{resume.location}</span>
            <span className="text-border">·</span>
            <span>{resume.relocation}</span>
            <span className="text-border">·</span>
            <a href={`tel:${resume.phone.replace(/\s/g, "")}`} className="hover:text-accent">
              {resume.phone}
            </a>
            <span className="text-border">·</span>
            <a href={`mailto:${resume.email}`} className="hover:text-accent">
              {resume.email}
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {resume.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        {/* Body */}
        <div className="grid gap-10 px-8 py-10 sm:px-12 sm:py-12 lg:grid-cols-[1fr_300px] lg:gap-12">
          {/* Main column */}
          <div className="space-y-12">
            <section>
              <SectionHeading>Summary</SectionHeading>
              <p className="text-[15px] leading-relaxed text-muted">{resume.summary}</p>
            </section>

            <section>
              <SectionHeading>Product &amp; Design Projects</SectionHeading>
              <div className="space-y-7">
                {resume.projects.map((project) => (
                  <div key={project.name}>
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
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 lg:border-l lg:border-border lg:pl-12">
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
                          className="rounded-md bg-accent-soft px-2 py-1 text-xs font-medium text-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

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
