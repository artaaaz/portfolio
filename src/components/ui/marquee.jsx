import { cn } from "../../lib/utils";

export default function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  className,
}) {
  return (
    <div
      className={cn(
        "flex w-full overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee items-stretch gap-[--gap]",
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}