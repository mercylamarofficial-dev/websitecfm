import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Cloud, Gamepad2, Megaphone, Store, Wand2 } from "lucide-react";
import { useState } from "react";
import Navbar from "../app/components/Navbar";
import "../styles/fonts.css";

const services = [
  {
    label: "Growth",
    icon: Megaphone,
    title: "Social media, PR, and brand momentum",
    text: "Campaign planning, content calendars, creator outreach, brand positioning, and daily channel support.",
  },
  {
    label: "AI Workflows",
    icon: Bot,
    title: "Automation and AI assistants for real work",
    text: "AI chatbots, content generation flows, admin automation, and workflow integrations tailored to your operation.",
  },
  {
    label: "Commerce",
    icon: Store,
    title: "Stores, marketplaces, and digital delivery",
    text: "Online stores, marketplace management, digital voucher delivery, file hosting, and support systems.",
  },
  {
    label: "Creative",
    icon: Wand2,
    title: "Digital content made and managed",
    text: "Graphics, edits, launch assets, content systems, and branded digital experiences for clients and teams.",
  },
  {
    label: "Gaming",
    icon: Gamepad2,
    title: "Game accounts, vouchers, and platform help",
    text: "Support for Roblox, Minecraft, Steam, PlayStation, Xbox, Discord Nitro, and gaming-related digital tasks.",
  },
  {
    label: "Cloud",
    icon: Cloud,
    title: "Cloud, email, VPN, and technical setup",
    text: "Practical setup guidance for cloud accounts, email systems, VPNs, integrations, and custom technical requests.",
  },
];

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Convix Software" },
      { name: "description", content: "Explore Convix Software services for growth, AI workflows, commerce, creative delivery, gaming, and cloud setup." },
      { property: "og:title", content: "Features — Convix Software" },
      { property: "og:description", content: "Digital agency services for businesses, brands, agencies, freelancers, and clients." },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  const [active, setActive] = useState(0);
  const selected = services[active];
  const Icon = selected.icon;

  return (
    <main className="min-h-screen w-full bg-[#ededed] p-3 sm:p-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="relative min-h-[calc(100vh-24px)] overflow-hidden rounded-2xl bg-[#d9d9d9] sm:min-h-[calc(100vh-32px)] sm:rounded-3xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,77,35,0.20),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.74),rgba(217,217,217,0.76))]" />
        <div className="relative z-10">
          <Navbar />
          <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:items-center lg:py-20">
            <div className="min-w-0 text-center lg:text-left">
              <p className="inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-neutral-800 shadow-sm">Features</p>
              <h1 className="mt-5 text-[42px] font-medium leading-[1.02] text-neutral-950 sm:text-[58px] lg:text-[72px]">
                Digital services that move with your work.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-neutral-700 sm:text-base lg:mx-0">
                Choose what you need, from PR and content to AI systems, gaming support, cloud setup, online stores, and custom digital tasks.
              </p>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#0b0f1a] py-2 pl-6 pr-2 text-[14px] text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Start a project
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15"><ArrowRight size={16} /></span>
              </Link>
            </div>

            <div className="rounded-[28px] bg-white/82 p-3 shadow-xl ring-1 ring-black/5 backdrop-blur">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {services.map((service, index) => {
                  const ServiceIcon = service.icon;
                  const isActive = index === active;
                  return (
                    <button
                      key={service.label}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`flex min-h-24 flex-col items-start justify-between rounded-2xl p-4 text-left transition-all ${isActive ? "bg-[#ef4d23] text-white shadow-lg" : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"}`}
                    >
                      <ServiceIcon size={20} />
                      <span className="text-sm font-medium">{service.label}</span>
                    </button>
                  );
                })}
              </div>
              <article className="mt-3 rounded-2xl bg-[#0b0f1a] p-5 text-white sm:p-7">
                <Icon className="h-7 w-7 text-[#ef4d23]" />
                <h2 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">{selected.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/72 sm:text-base">{selected.text}</p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}