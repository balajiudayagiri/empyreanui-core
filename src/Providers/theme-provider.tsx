"use client";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import React, { useEffect, useState } from "react";

interface ProvidersProps extends ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Providers component to manage theme based on the route.
 *
 * @param {ProvidersProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The children components to be rendered within the ThemeProvider.
 * @param {object} props - Additional props to be spread onto the ThemeProvider.
 * @returns {JSX.Element} The ThemeProvider component with conditional theming based on the route.
 */
export const NextThemesProviders: React.FC<ProvidersProps> = ({
  children,
  ...rest
}) => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<string | undefined>(undefined);

  const themeRoutes: { [key: string]: string } = {
    blogs: "violet-theme",
    readme: "blue-theme",
    // profile: "blue-theme",
    "readme-ai": "blue-theme",
    "jsdoc-ai": "green-theme",
  };

  useEffect(() => {
    // Get the first segment of the pathname after the domain
    const firstPathSegment = pathname.split("/").filter(Boolean)[0];

    // Get the theme for the route or use the default theme
    const themeFromPathname = themeRoutes[firstPathSegment] || undefined;

    setTheme(themeFromPathname);
  }, [pathname]);

  return (
    <ThemeProvider
      forcedTheme={theme}
      attribute="class"
      defaultTheme="dark"
      themes={["light", "dark", "blue-theme", "violet-theme", "green-theme"]}
      enableSystem={false}
      disableTransitionOnChange
      {...rest}>
      {children}
    </ThemeProvider>
  );
};
