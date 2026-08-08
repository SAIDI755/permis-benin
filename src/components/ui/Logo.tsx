import { cn } from "@/lib/utils";

export default function Logo({
  size = "sm",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  return (
    <span className={cn("inline-flex", className)}>
      <svg
        width={size === "sm" ? 42 : 110}
        height={size === "sm" ? 42 : 110}
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* ---- Rond de route ---- */}
        <ellipse cx="48" cy="82" rx="32" ry="9" fill="#2a2f34" />
        <ellipse
          cx="48"
          cy="82"
          rx="22"
          ry="5.5"
          stroke="#faf7ef"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
        />

        {/* ---- Poteaux des panneaux ---- */}
        <g stroke="#9aa0a6" strokeWidth="3" strokeLinecap="round">
          <line x1="30" y1="32" x2="42" y2="44" />
          <line x1="66" y1="32" x2="54" y2="44" />
          <line x1="22" y1="56" x2="40" y2="56" />
          <line x1="74" y1="56" x2="56" y2="56" />
        </g>

        {/* ---- Sens interdit (haut gauche) ---- */}
        <circle cx="22" cy="26" r="11" fill="#e23b2e" stroke="#faf7ef" strokeWidth="2" />
        <rect x="15" y="23.5" width="14" height="5" rx="2" fill="#faf7ef" />

        {/* ---- Stop (haut droite) ---- */}
        <polygon
          points="70,15 78,15 85,22 85,30 78,37 70,37 63,30 63,22"
          fill="#b3261e"
          stroke="#faf7ef"
          strokeWidth="2"
        />
        <text
          x="74"
          y="29"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="7"
          fontWeight="900"
          fill="#faf7ef"
        >
          STOP
        </text>

        {/* ---- Virage (gauche) ---- */}
        <g transform="translate(16,52) rotate(45)">
          <rect x="-9" y="-9" width="18" height="18" rx="2" fill="#ffc531" stroke="#12161a" strokeWidth="2" />
        </g>
        <path
          d="M16 57 v-4 q0 -3 3 -3 h1"
          stroke="#12161a"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ---- Rond-point (droite) ---- */}
        <circle cx="80" cy="52" r="10" fill="#1e6fd9" stroke="#faf7ef" strokeWidth="2" />
        <path
          d="M76 55 a5 5 0 0 1 3 -8 M84 49 a5 5 0 0 1 -3 8"
          stroke="#faf7ef"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* ---- Pied du feu ---- */}
        <rect x="45" y="70" width="6" height="10" rx="1.5" fill="#12161a" />

        {/* ---- Feu tricolore ---- */}
        <rect x="35" y="12" width="26" height="60" rx="6" fill="#12161a" />
        <circle cx="48" cy="25" r="7" fill="#e23b2e" opacity="0.35" />
        <circle cx="48" cy="42" r="7" fill="#ffc531" opacity="0.35" />
        {/* vert allumé + halo */}
        <circle cx="48" cy="59" r="10" fill="#0c7a4b" opacity="0.35" />
        <circle cx="48" cy="59" r="7" fill="#22c55e" />
      </svg>
    </span>
  );
}