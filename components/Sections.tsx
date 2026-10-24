import Container from "@/components/Container";

const GITHUB_URL = "https://github.com/jnanendray";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 text-teal-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="bg-linear-to-br from-sky-50 via-white to-teal-50">
      <Container className="py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
          AI-Assisted Web Developer
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Hi, I&apos;m Jnanendra
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          I&apos;m learning AI-assisted web development and building real websites with
          Claude &mdash; going from idea to a live, working site using Next.js, Tailwind CSS,
          and Claude Code.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block rounded-full bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            View my work
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            <GitHubIcon />
            GitHub profile
          </a>
        </div>
      </Container>
    </section>
  );
}

const skills = [
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Claude Code",
  "Git & GitHub",
  "Vercel",
  "Supabase & PostgreSQL",
  "Row-Level Security",
  "GitHub Actions",
  "Android Apps (TWA)",
  "n8n Automation",
  "Prompt Engineering",
];

export function Skills() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Skills</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Tools and workflows I&apos;m using as I learn to build and ship real products.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 shadow-sm"
            >
              <CheckIcon />
              <span className="font-medium">{skill}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl?: string;
  /** An extra link, e.g. the Android app download. */
  extra?: { label: string; url: string };
  /** Shown as a small label above the title. */
  kind: string;
};

// Newest first.
const projects: Project[] = [
  {
    title: "Glowing Beauty Salon — Booking Platform + Android App",
    kind: "Full-stack · Web + Android",
    description:
      "A complete salon booking system: Google and email sign-in, a step-by-step booking calendar with stylist choice and at-home visits (map pin + \"use my location\"), live chat, and an admin panel with day/week/month calendars, customers and a recall list. Supabase database with row-level security and server-side booking rules, plus an installable Android app with in-app updates. Lighthouse 100 across the board.",
    tags: ["Next.js", "Supabase", "PostgreSQL + RLS", "Realtime chat", "Android (TWA)", "GitHub Actions"],
    liveUrl: "https://glowing-beauty-salon.vercel.app",
    codeUrl: "https://github.com/jnanendray/glowing-beauty-salon",
    extra: { label: "Android app", url: "https://github.com/jnanendray/glowing-beauty-salon/releases/latest" },
  },
  {
    title: "DoorStep Services — Home Services Booking",
    kind: "Booking site",
    description:
      "A home-services site for AC repair, deep cleaning, salon at home, plumbing, electrical and painting. Customers pick a service and slot in a booking form that hands off to WhatsApp for confirmation, with how-it-works steps, testimonials and an FAQ.",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp booking", "Vercel"],
    liveUrl: "https://doorstep-services.vercel.app",
    codeUrl: "https://github.com/jnanendray/doorstep-services",
  },
  {
    title: "Jyothi Metal Artifacts — Handcrafted Store",
    kind: "Store / lead generation",
    description:
      "A storefront for handcrafted copper, brass and bronze utensils, pooja essentials, idols and decor. Featured products each have a one-tap WhatsApp enquiry, alongside trust points and an enquiry form — built for lead generation rather than checkout.",
    tags: ["Next.js", "Tailwind CSS", "WhatsApp enquiries", "Vercel"],
    liveUrl: "https://jyothi-metal-artifacts.vercel.app",
    codeUrl: "https://github.com/jnanendray/jyothi-metal-artifacts",
  },
  {
    title: "Prime Spaces Realty — Real Estate Listings",
    kind: "Real estate",
    description:
      "A real-estate agency site for homes in Bengaluru: property listings from studios to penthouses, transparent pricing, why-choose-us highlights, and an enquiry form backed by an API route, plus WhatsApp click-to-chat.",
    tags: ["Next.js", "TypeScript", "API routes", "Vercel"],
    liveUrl: "https://prime-spaces-realty.vercel.app",
    codeUrl: "https://github.com/jnanendray/prime-spaces-realty",
  },
  {
    title: "SmileCare Dental — Clinic Landing Page",
    kind: "Landing page",
    description:
      "A conversion-focused landing page for a dental clinic: hero, services, pricing, patient reviews, an FAQ, a lead-capture form, and a one-tap WhatsApp button. Built with Next.js and Tailwind CSS, deployed on Vercel.",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://demo-clinic-landing-ruddy.vercel.app",
    codeUrl: "https://github.com/jnanendray/demo-clinic-landing",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-16 md:py-20">
      <Container>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Projects</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Live sites I&apos;ve built so far, each one shipped from scratch to production — newest first.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {project.kind}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                >
                  View live site
                </a>
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    View code
                  </a>
                )}
                {project.extra && (
                  <a
                    href={project.extra.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  >
                    {project.extra.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Jnanendra. Built with Next.js, Tailwind CSS, and
          Claude Code.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-teal-700"
        >
          <GitHubIcon />
          github.com/jnanendray
        </a>
      </Container>
    </footer>
  );
}
