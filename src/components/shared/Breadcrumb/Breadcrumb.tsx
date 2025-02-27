import Link from "next/link";
import { BreadcrumbProps } from "@/interfaces/components";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm mb-6">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href}>
            {index < items.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="text-black/60 hover:text-primary"
                >
                  {item.label}
                </Link>
                <span className="text-black/40 ml-2">/</span>
              </>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
