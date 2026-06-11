type GaugeProps = {
  value: number;
  color?: string;
  showLabels?: boolean;
  min?: string | number;
  max?: string | number;
};

export default function Gauge({
  value,
  color = "#ef4d23",
  showLabels = false,
  min,
  max,
}: GaugeProps) {
  const total = 40;
  const active = Math.round((value / 100) * total);
  const cx = 100;
  const cy = 100;
  const rOuter = 80;
  const rInner = rOuter - 10;

  const ticks = Array.from({ length: total }, (_, i) => {
    const t = i / (total - 1);
    const angle = Math.PI + t * Math.PI;
    const x1 = cx + rInner * Math.cos(angle);
    const y1 = cy + rInner * Math.sin(angle);
    const x2 = cx + rOuter * Math.cos(angle);
    const y2 = cy + rOuter * Math.sin(angle);
    const isActive = i < active;
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={isActive ? color : "#d4d4d8"}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="w-full max-w-[260px] mx-auto">
      <svg viewBox="0 0 200 120" className="w-full h-auto">
        {ticks}
        <text
          x={100}
          y={105}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          fill="#0b0f1a"
        >
          {value}%
        </text>
      </svg>
      {showLabels && (
        <div className="flex justify-between text-[11px] text-neutral-500 px-2 -mt-2">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
