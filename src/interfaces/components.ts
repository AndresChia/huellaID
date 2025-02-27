export interface LogoProps {
  className?: string;
}

export interface BreadcrumbProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}
