type BrandmarkProps = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showAcai?: boolean;
};

const sizeMap = {
  sm: { numa: "text-xl", acai: "text-base", offset: "-mt-2 -ml-1" },
  md: { numa: "text-2xl", acai: "text-lg", offset: "-mt-2.5 -ml-2" },
  lg: { numa: "text-4xl", acai: "text-2xl", offset: "-mt-4 -ml-3" },
};

export default function Brandmark({
  variant = "dark",
  size = "md",
  showAcai = true,
}: BrandmarkProps) {
  const s = sizeMap[size];
  const numaColor = variant === "dark" ? "text-aubergine" : "text-shell";
  const acaiColor = variant === "dark" ? "text-coral" : "text-coral";

  return (
    <span className="inline-flex flex-col items-start leading-none select-none">
      <span
        className={`brand-wordmark ${s.numa} ${numaColor}`}
        style={{ fontWeight: 200 }}
      >
        nüma
      </span>
      {showAcai && (
        <span
          className={`font-script ${s.acai} ${acaiColor} ${s.offset} relative z-10`}
          style={{ fontWeight: 500 }}
        >
          açaí
        </span>
      )}
    </span>
  );
}
