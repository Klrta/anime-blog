"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 这是一个包装器，把 next-themes 的功能暴露给我们的应用
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}