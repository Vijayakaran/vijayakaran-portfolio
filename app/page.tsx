import Image from "next/image";

const technologies = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "REST APIs",
  "Entity Framework",
  "Vue.js",
  "Next.js",
  "MongoDB",
  "MySQL",
  "SQL",
  "Linux",
  "Git",
  "CI/CD",
  "Cloud & DevOps",
];

const capabilities = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Designing and developing reliable backend services, APIs, business logic and data-driven enterprise applications using C# and .NET.",
  },
  {
    number: "02",
    title: "Enterprise Applications",
    description:
      "Building business applications around complex workflows including project management, workforce planning, timesheets and operational processes.",
  },
  {
    number: "03",
    title: "System Integration",
    description:
      "Connecting business platforms through REST APIs, external services, databases and enterprise integrations.",
  },
  {
    number: "04",
    title: "Architecture & Technical Leadership",
    description:
      "Translating business requirements into maintainable technical solutions with focus on architecture, scalability, quality and long-term evolution.",
  },
];

const career = [
  {
    period: "Current",
    role: "Senior Software Engineer",
    description:
      "Designing and developing enterprise software, backend services, integrations and project/resource management solutions.",
  },
  {
    period: "Previous",
    role: "Software Engineer / Technical Roles",
    description:
      "Development of business-critical applications, industrial software, integrations and data-driven systems across multiple organisations.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAVIGATION */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-blue-600">Vijayakaran</span>{" "}
            <span className="text-zinc-900">Samuel</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-blue-600">
              About
            </a>
            <a href="#expertise" className="transition hover:text-blue-600">
              Expertise
            </a>
            <a href="#projects" className="transition hover:text-blue-600">
              Projects
            </a>
            <a href="#technology" className="transition hover:text-blue-600">
              Technology
            </a>
            <a href="#career" className="transition hover:text-blue-600">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-blue-600">
              Contact
            </a>
          </div>

          <a
            href="/Vijayakaran-Samuel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Senior Software Engineer
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Building{" "}
              <span className="text-blue-600">
                reliable software
              </span>{" "}
              for real business problems.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              I am Vijayakaran Samuel, a senior software engineer focused on
              backend development, enterprise applications, APIs,
              integrations and business systems.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-500">
              I enjoy taking complex business requirements and turning them
              into practical, maintainable and scalable software solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                View My Projects
              </a>

              <a
                href="/Vijayakaran-Samuel-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-300 bg-white px-6 py-3 font-semibold transition hover:border-blue-600 hover:text-blue-600"
              >
                View My CV
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "C# / .NET",
                "ASP.NET Core",
                "REST APIs",
                "Vue.js",
                "SQL",
                "MongoDB",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* PROFILE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl">
                <div className="relative h-[430px] w-[360px] overflow-hidden rounded-[1.5rem] bg-zinc-100 sm:h-[500px] sm:w-[410px]">
                  <Image
                    src="/profile.jpg"
                    alt="Vijayakaran Samuel"
                    fill
                    priority
                    sizes="(max-width: 640px) 360px, 410px"
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/60 bg-white/90 p-4 shadow-lg backdrop-blur">
                  <div className="text-lg font-bold">
                    Vijayakaran Samuel
                  </div>
                  <div className="text-sm text-zinc-500">
                    Senior Software Engineer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QUICK STATS */}
        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm sm:grid-cols-3">
            <div className="border-b border-zinc-200 p-7 text-center sm:border-b-0 sm:border-r">
              <div className="text-3xl font-bold text-blue-600">30+</div>
              <div className="mt-1 text-sm text-zinc-500">
                Years of professional experience
              </div>
            </div>

            <div className="border-b border-zinc-200 p-7 text-center sm:border-b-0 sm:border-r">
              <div className="text-3xl font-bold text-blue-600">
                Enterprise
              </div>
              <div className="mt-1 text-sm text-zinc-500">
                Business software experience
              </div>
            </div>

            <div className="p-7 text-center">
              <div className="text-3xl font-bold text-blue-600">
                Full Stack
              </div>
              <div className="mt-1 text-sm text-zinc-500">
                Backend, APIs, database & frontend
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                About Me
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Experienced engineer who understands both technology and
                business.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                I develop complete business applications, from understanding
                requirements and designing the architecture to implementing
                backend services, databases, APIs and user interfaces.
              </p>

              <p>
                My experience includes project management systems, workforce
                management, resource planning, timesheets, cost management,
                industrial software and business integrations.
              </p>

              <p>
                I am particularly interested in challenging software problems
                where reliability, maintainability and integration with
                existing business systems are important.
              </p>

              <p>
                My approach is practical: understand the business problem,
                design a clear solution, build it properly and make sure the
                software can continue to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Expertise
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What I bring to a development team
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              A combination of hands-on development, architecture,
              integration and understanding of real business processes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-zinc-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
                    {item.number}
                  </div>

                  <span className="text-3xl text-zinc-200 transition group-hover:text-blue-100">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Enterprise software projects
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Examples of software platforms and business systems developed
              around real operational requirements.
            </p>
          </div>

          {/* PROJECT 01 */}
          <article className="mb-24 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <span className="mb-5 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                  Project 01
                </span>

                <h3 className="text-3xl font-bold sm:text-4xl">
                  Project & Workforce Management Platform
                </h3>

                <p className="mt-5 leading-7 text-zinc-600">
                  A comprehensive enterprise platform for managing projects,
                  employees, resources and operational planning. The system
                  brings together project forecasting, workforce planning,
                  Gantt scheduling, timesheets and resource capacity
                  management.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "C#",
                    ".NET",
                    "MongoDB",
                    "Vue.js",
                    "REST API",
                    "Backend Services",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-7 space-y-3 text-sm text-zinc-600">
                  <li>✓ Project planning and forecasting</li>
                  <li>✓ Employee and resource management</li>
                  <li>✓ Gantt-based planning</li>
                  <li>✓ Weekly timesheet management</li>
                  <li>✓ Resource capacity analysis</li>
                  <li>✓ Business system integration</li>
                </ul>
              </div>

              <div className="flex min-h-[420px] items-center justify-center bg-zinc-100 p-6">
                <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
                  <Image
                    src="/projects/project-workforce.png"
                    alt="Project and workforce management platform"
                    width={1200}
                    height={700}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* PROJECT 02 */}
          <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 flex min-h-[420px] items-center justify-center bg-zinc-100 p-6 lg:order-1">
                <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
                  <Image
                    src="/projects/project-resource.png"
                    alt="Enterprise project resource and cost management platform"
                    width={1200}
                    height={700}
                    className="h-auto w-full"
                  />
                </div>
              </div>

              <div className="order-1 flex flex-col justify-center p-8 lg:order-2 lg:p-12">
                <span className="mb-5 w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Project 02
                </span>

                <h3 className="text-3xl font-bold sm:text-4xl">
                  Enterprise Project, Resource & Cost Management Platform
                </h3>

                <p className="mt-5 leading-7 text-zinc-600">
                  A reusable project management platform designed for
                  project-based organisations. The application manages
                  personnel, equipment, project agreements, cost structures,
                  resources and project planning.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "C#",
                    ".NET",
                    "Entity Framework",
                    "MySQL",
                    "Vue.js",
                    "REST API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-7 space-y-3 text-sm text-zinc-600">
                  <li>✓ Project management</li>
                  <li>✓ Resource and personnel management</li>
                  <li>✓ Equipment management</li>
                  <li>✓ Cost hierarchy management</li>
                  <li>✓ Project sales agreements</li>
                  <li>✓ User and role administration</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CAREER */}
      <section id="career" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A career built around software engineering
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Hands-on experience across software development, enterprise
              systems, industrial applications and technical problem solving.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-zinc-300 md:block" />

            <div className="space-y-10">
              {career.map((item) => (
                <div
                  key={item.period}
                  className="relative grid gap-6 md:grid-cols-[170px_1fr]"
                >
                  <div className="text-sm font-bold text-blue-600">
                    {item.period}
                  </div>

                  <div className="relative rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
                    <div className="absolute -left-[38px] top-8 hidden h-3 w-3 rounded-full border-2 border-blue-600 bg-white md:block" />

                    <h3 className="text-xl font-bold">
                      {item.role}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        id="technology"
        className="border-t border-zinc-800 bg-zinc-950 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Technology
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Technology that supports real business systems.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-zinc-400">
                My strongest focus is backend and enterprise development,
                supported by modern frontend technologies, databases, APIs,
                Linux and deployment practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-4 text-center text-sm font-medium text-zinc-200 transition hover:border-blue-500 hover:text-white"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Development Approach
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              From requirements to production
            </h2>

            <p className="mt-5 leading-8 text-zinc-600">
              I work across the application lifecycle, connecting business
              requirements with architecture, implementation, integration and
              reliable production software.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="grid gap-4 md:grid-cols-5">
              {[
                ["01", "Requirements", "Business needs"],
                ["02", "Architecture", "Solution design"],
                ["03", "Backend", "C# / .NET"],
                ["04", "Data & APIs", "SQL / REST"],
                ["05", "Delivery", "Production"],
              ].map(([number, title, value], index) => (
                <div key={number} className="relative">
                  <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center">
                    <div className="text-xs font-bold text-blue-600">
                      {number}
                    </div>

                    <div className="mt-3 text-lg font-bold">
                      {title}
                    </div>

                    <div className="mt-2 text-sm text-zinc-500">
                      {value}
                    </div>
                  </div>

                  {index < 4 && (
                    <div className="absolute -right-3 top-1/2 z-10 hidden text-xl text-zinc-400 md:block">
                      →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-200">
                Contact
              </p>

              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Looking for an experienced software engineer?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                I am open to discussing senior software engineering,
                backend, .NET and enterprise application opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:Vijayakaran@gmail.com"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
                >
                  Email Me
                </a>

                <a
                  href="/Vijayakaran-Samuel-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-blue-300 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  View CV
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-400/40 bg-blue-700/50 p-7 backdrop-blur">
              <div className="space-y-5">
                <div>
                  <div className="text-sm text-blue-200">Name</div>
                  <div className="mt-1 font-semibold">
                    Vijayakaran Samuel
                  </div>
                </div>

                <div>
                  <div className="text-sm text-blue-200">Location</div>
                  <div className="mt-1 font-semibold">
                    Holstebro, Denmark
                  </div>
                </div>

                <div>
                  <div className="text-sm text-blue-200">Email</div>
                  <a
                    href="mailto:Vijayakaran@gmail.com"
                    className="mt-1 block font-semibold hover:underline"
                  >
                    Vijayakaran@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-sm text-blue-200">Phone</div>
                  <a
                    href="tel:+4520230299"
                    className="mt-1 block font-semibold hover:underline"
                  >
                    +45 20230299
                  </a>
                </div>

                <div className="border-t border-blue-400/30 pt-5">
                  <div className="text-sm text-blue-200">
                    Available for
                  </div>
  <div className="mt-2 font-semibold leading-6">
    Senior Software Engineer
    <br />
    Backend Developer · .NET Developer
    <br />
    C# Developer · API & Enterprise Software
  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>
            © {new Date().getFullYear()} Vijayakaran Samuel
          </div>

          <div>
            C# · .NET · ASP.NET Core · REST APIs · Enterprise Software
          </div>
        </div>
      </footer>
    </main>
  );
}