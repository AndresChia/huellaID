export function generateBreadcrumbs(path: string) {
  const segments = path
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      return {
        label: segment
          .replace(/-/g, " ")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        href: `/${segment}`,
      };
    });

  return [{ label: "Home", href: "/" }, ...segments];
}
