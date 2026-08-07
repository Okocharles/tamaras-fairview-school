import { C } from "@/lib/colors";

export default function CrestBadge({ tier = "junior", size = 56 }: { tier?: "junior" | "senior"; size?: number }) {
  const junior = tier === "junior";
  const ring = junior ? C.navy500 : C.gold600;
  const fill = junior ? C.navy800 : C.navy900;
  const initials = junior ? "F&S" : "TFHS";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M50 4 L90 16 V46 C90 72 72 90 50 98 C28 90 10 72 10 46 V16 Z"
        fill={fill}
        stroke={ring}
        strokeWidth="3"
      />
      <path d="M22 34 A30 30 0 0 1 78 34" stroke={C.gold400} strokeWidth="3" fill="none" opacity="0.85" />
      <path d="M28 40 A22 22 0 0 1 72 40" stroke={C.navy300} strokeWidth="3" fill="none" opacity="0.85" />
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontFamily="Playfair Display, serif"
        fontWeight="700"
        fontSize={junior ? 20 : 15}
        fill={C.white}
      >
        {initials}
      </text>
      <path d="M20 80 Q50 92 80 80" stroke={ring} strokeWidth="2.5" fill="none" opacity="0.7" />
    </svg>
  );
}
