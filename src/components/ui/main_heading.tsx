"use client";

import { useTheme } from "next-themes";
import { LineShadowText } from "../magicui/line-shadow-text";

export function HeadingShadowText() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      Simplify Your Life with
      <LineShadowText className="italic" shadowColor={shadowColor}>
      SimplifyAI
      </LineShadowText>
    </h1>
  );
}
