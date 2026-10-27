"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { DarkSide } from "@/components/ui/dark-side";

const subscribe = () => () => {};

const AnimatedThemeToggler = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  // false on the server and during hydration, true afterwards
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  const frame =
    "flex size-9 items-center justify-center rounded-full text-[19px] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

  if (!mounted) {
    return <div className="size-9" aria-hidden="true" />;
  }

  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <DarkSide
      toggled={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`cursor-pointer ${frame}`}
    />
  );
};

export default AnimatedThemeToggler;
