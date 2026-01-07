"use client";

import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const CurrentPath = usePathname();
  console.log(CurrentPath);
  const Links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex  space-x-6">
        {Links.map((Links) => (
          <Link
            key={Links.href}
            className={classnames({
              "text-zinc-900": Links.href === CurrentPath,
              "text-zinc-500": Links.href !== CurrentPath,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={Links.href}
          >
            {Links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
