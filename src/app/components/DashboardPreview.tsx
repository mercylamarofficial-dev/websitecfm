import { ChevronDown, TrendingDown, TrendingUp, X } from "lucide-react";
import Gauge from "./Gauge";

function Toggle({ left, right, active }: { left: string; right: string; active: "left" | "right" }) {
  return (
    <div className="bg-neutral-100 rounded-full p-1 flex text-[12px] mt-4">
      <button
        type="button"
        className={`flex-1 rounded-full px-3 py-1.5 ${
          active === "left" ? "bg-white shadow text-neutral-900" : "text-neutral-500"
        }`}
      >
        {left}
      </button>
      <button
        type="button"
        className={`flex-1 rounded-full px-3 py-1.5 ${
          active === "right" ? "bg-white shadow text-neutral-900" : "text-neutral-500"
        }`}
      >
        {right}
      </button>
    </div>
  );
}

function ClicksCard() {
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-[#ef4d23] font-medium">Clicks</span>
        <span className="text-neutral-500">This Month</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span style={{ fontSize: 28, fontWeight: 600 }} className="text-neutral-900">
          6,896
        </span>
        <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 rounded-full px-2 py-0.5 text-[11px]">
          <TrendingDown size={12} /> -3,382 (33%)
        </span>
      </div>
      <div className="text-[11px] text-neutral-500 mt-1">Compared to yesterday</div>
      <div className="text-center text-[12px] text-neutral-600 mt-3">Month Target achieved</div>
      <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />
      <Toggle left="Impressions" right="Clicks" active="left" />
    </div>
  );
}

function FormGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] text-neutral-700">{label}</label>
      {children}
    </div>
  );
}

function FormCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
      <FormGroup label="Show figures for">
        <button
          type="button"
          className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px]"
        >
          This month <ChevronDown size={14} />
        </button>
      </FormGroup>
      <FormGroup label="Compare period by">
        <button
          type="button"
          className="flex items-center justify-between border border-neutral-200 rounded-lg px-3 py-2 text-[13px]"
        >
          Month-to-date (MTD) <ChevronDown size={14} />
        </button>
      </FormGroup>
      <FormGroup label="Ste targets (This month)">
        <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-[13px]">
          <span className="text-neutral-400 mr-2">#</span>
          <input
            defaultValue={10}
            className="w-full bg-transparent outline-none"
          />
        </div>
      </FormGroup>
      <FormGroup label="Ste targets (This year)">
        <div className="flex items-center border border-neutral-200 rounded-lg px-3 py-2 text-[13px]">
          <span className="text-neutral-400 mr-2">#</span>
          <input
            defaultValue={100}
            className="w-full bg-transparent outline-none"
          />
        </div>
      </FormGroup>
      <div className="flex items-center gap-3 mt-1 text-[13px]">
        <button
          type="button"
          className="bg-[#ef4d23] text-white rounded-lg px-5 py-2"
        >
          Save
        </button>
        <button type="button" className="underline text-neutral-700">
          Cancel
        </button>
        <button type="button" className="ml-auto text-neutral-500">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

function VideoStartsCard() {
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex items-center justify-between text-[13px]">
        <span className="text-[#ef4d23] font-medium">Video Starts</span>
        <span className="text-neutral-500">today</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span style={{ fontSize: 28, fontWeight: 600 }} className="text-neutral-900">
          0
        </span>
        <span className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5 text-[11px]">
          <TrendingUp size={12} /> 0
        </span>
      </div>
      <div className="text-[11px] text-neutral-500 mt-1">Compared to yesterday</div>
      <div className="mt-3">
        <Gauge value={68} color="#9ca3af" />
      </div>
      <Toggle left="Video Clicks" right="Video Starts" active="left" />
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <div className="px-3 sm:px-4">
      <div className="bg-[#f5f2ee] rounded-3xl p-4 sm:p-6 w-full max-w-[880px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <ClicksCard />
          <FormCard />
          <VideoStartsCard />
        </div>
      </div>
    </div>
  );
}
