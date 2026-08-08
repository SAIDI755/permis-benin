import { cn } from "@/lib/utils";

export default function Logo({
  size = "sm",
  className,
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const sm = size === "sm";
  return (
    <span className={cn("flex flex-col items-center", className)}>
      {/* La plaque du panneau */}
      <span
        className={cn(
          "grid place-items-center border-cream bg-primary shadow-md ring-2 ring-asphalt/20",
          sm ? "size-9 rounded-lg border-2" : "size-16 rounded-2xl border-[3px]"
        )}
      >
        <span
          className={cn(
            "font-display font-black leading-none text-cream",
            sm ? "text-xs" : "text-2xl"
          )}
        >
          PB
        </span>
      </span>
      {/* Le poteau */}
      <span className={cn("bg-asphalt/50", sm ? "h-1.5 w-1" : "h-2.5 w-1.5")} />
    </span>
  );
}