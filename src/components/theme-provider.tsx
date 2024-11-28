"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      themes={[
        "light",
        "dark",
        "blue-light",
        "blue-dark",
        "green-light",
        "green-dark",
        "violet-light",
        "violet-dark",
        "yellow-light",
        "yellow-dark",
        "zinc-light",
        "zinc-dark"
      ]}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
