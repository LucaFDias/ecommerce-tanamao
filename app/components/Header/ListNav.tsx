import Link from 'next/link';
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

const ListNav = () => {

  const pathname = usePathname();
  const routes = [
    {
      href: "/departaments",
      label: "Todos departamentos",
      active: pathname === `/departaments`,
    },
    {
      href: "/eletronics",
      label: "Eletrônicos",
      active: pathname === `/eletronics`,
    },
    {
      href: "/informatic",
      label: "Informática",
      active: pathname === `/informatic`,
    },
    {
      href: "/monitors",
      label: "Monitores",
      active: pathname === `/monitors`,
    },
    {
      href: "/computers",
      label: "Computadores",
      active: pathname === `/computers`,
    },
    {
      href: "/games",
      label: "Games",
      active: pathname === `/games`,
    },
  ]
  
  return (
    <nav className="navigation">
      <ul className="flex items-center gap-x-11">
        {routes.map((route, index) => (
          <li className="nav_item" key={index}>
            <Link
              className={cn(
                "text-base font-medium transition-colors hover:text-primary",
                route.active
                  ? "text-black dark:text-white no-underline"
                  : "text-muted-foreground no-underline text-gray-600"
              )}
              href={route.href}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ListNav