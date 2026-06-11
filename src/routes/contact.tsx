import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../app/components/Navbar";
import "../styles/fonts.css";

const projectTypes = ["AI automation", "Social media", "Online store", "Gaming support", "Cloud setup", "Custom task"];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Convix Software" },
      { name: "description", content: "Contact Convix Software to start a digital, AI, creative, gaming, commerce, or technical project." },
      { property: "og:title", content: "Contact — Convix Software" },
      { property: "og:description", content: "Start your project with Convix Software, the all-in-one digital agency for businesses." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("mgobzqlg");

  const summary = useMemo(() => {
    if (!name && !message) return "Tell us what you need and we’ll shape the next step.";
    return `${name || "Your project"} • ${projectType}${message ? ` • ${message.slice(0, 42)}${message.length > 42 ? "…" : ""}` : ""}`;
  }, [message, name, projectType]);

  return (
    <main className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:min-h-[calc(100vh-32px)] sm:rounded-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,77,35,0.18),transparent_32%),linear-gradient(140deg,rgba(255,255,255,0.82),rgba(217,217,217,0.72))]" />
        <div className="relative z-10">
          <Navbar />
          <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:items-center lg:py-20">
            <div className="min-w-0 text-center lg:text-left">
              <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm">Contact</p>
              <h1 className="mt-5 text-[42px] font-medium leading-[1.02] text-neutral-950 sm:text-[58px] lg:text-[72px]">
                Start with one clear message.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-neutral-700 sm:text-base lg:mx-0">
                Share the digital task, campaign, setup, automation, content request, store, or gaming support you need. Convix Software will take it from there.
              </p>
              <div className="mx-auto mt-7 grid max-w-md gap-3 text-left lg:mx-0">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                  <Mail className="mt-0.5 h-5 w-5 text-[#ef4d23]" />
                  <p className="min-w-0 text-sm text-neutral-700">Use the form to create a project brief preview instantly.</p>
                </div>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-2xl bg-white/80 p-4 shadow-sm">
                  <MessageCircle className="mt-0.5 h-5 w-5 text-[#ef4d23]" />
                  <p className="min-w-0 text-sm text-neutral-700">Pick a service type so the request starts in the right direction.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[28px] bg-white/86 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur sm:p-7">
              <div>
                <label className="text-sm font-medium text-neutral-900" htmlFor="name">Name</label>
                <input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} maxLength={100} className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ef4d23]" placeholder="Your name or business" />
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-neutral-900" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required maxLength={255} className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ef4d23]" placeholder="you@company.com" />
                <ValidationError field="email" errors={state.errors} className="mt-1 text-xs text-red-600" />
              </div>
              <div className="mt-5">
                <p className="text-sm font-medium text-neutral-900">Project type</p>
                <input type="hidden" name="projectType" value={projectType} />
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {projectTypes.map((type) => (
                    <button key={type} type="button" onClick={() => setProjectType(type)} className={`rounded-2xl px-3 py-3 text-left text-xs font-medium transition-all ${projectType === type ? "bg-[#ef4d23] text-white shadow-md" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <label className="text-sm font-medium text-neutral-900" htmlFor="message">What do you need?</label>
                <textarea id="message" name="message" required value={message} onChange={(event) => setMessage(event.target.value)} maxLength={1000} rows={5} className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#ef4d23]" placeholder="Describe the task, platform, deadline, or goal." />
                <ValidationError field="message" errors={state.errors} className="mt-1 text-xs text-red-600" />
              </div>
              <div className="mt-5 rounded-2xl bg-neutral-100 p-4 text-sm leading-6 text-neutral-700">
                {state.succeeded ? "Thanks — your message has been sent." : summary}
              </div>
              <button type="submit" disabled={state.submitting} className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0b0f1a] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60">
                {state.submitting ? "Sending…" : (<>Send request <Send size={16} /></>)}
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}