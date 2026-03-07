"use client";

import { useEffect, useState } from "react";

const initialStatus = {
  label: "Checking backend",
  tone: "text-amber-300",
};

export default function HomePage() {
  const [apiStatus, setApiStatus] = useState(initialStatus);

  useEffect(() => {
    const controller = new AbortController();

    async function loadStatus() {
      try {
        const response = await fetch("/api/health", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Backend returned ${response.status}`);
        }

        const data = await response.json();

        setApiStatus({
          label: `${data.status} on ${data.service}`,
          tone: "text-emerald-300",
        });
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        setApiStatus({
          label: "Backend not reachable yet",
          tone: "text-rose-300",
        });
      }
    }

    loadStatus();

    return () => controller.abort();
  }, []);

  return (
    <main className="min-h-screen bg-grid px-6 py-10 text-stone-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-950/80 shadow-2xl shadow-orange-950/20 backdrop-blur">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 p-8 sm:p-12">
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-orange-200">
                Raw starter
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Next.js in front, Express behind it, Tailwind already wired.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                  This repo is now reduced to a clean starting point so you can
                  build the actual project instead of cleaning old ecommerce
                  scaffolding first.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-orange-500 px-5 py-3 text-sm font-medium text-stone-950 transition hover:bg-orange-400"
                  href="http://localhost:3000"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open frontend
                </a>
                <a
                  className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
                  href="http://localhost:4000/health"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open backend health route
                </a>
              </div>
            </div>

            <div className="border-l border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10 p-8 sm:p-12">
              <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-stone-400">
                  API status
                </p>
                <p className={`text-2xl font-medium ${apiStatus.tone}`}>
                  {apiStatus.label}
                </p>
                <p className="text-sm leading-6 text-stone-300">
                  The frontend requests <code>/api/health</code>, and Next.js
                  rewrites that request to the Express server on port 4000.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Frontend",
              body: "App router, Tailwind, global styles, and a single home page you can replace immediately.",
            },
            {
              title: "Backend",
              body: "Express server with JSON parsing, CORS, health route, and a clean 404 response.",
            },
            {
              title: "Workspace",
              body: "Root npm workspaces and a single dev command to run both services together.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-stone-400">
                {item.title}
              </p>
              <p className="mt-3 text-lg font-medium text-white">{item.body}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
