"use client"; // Add this directive at the top

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import classNames from "classnames";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentUrl = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;
  const isActive = currentUrl === href;

  return (
    <Link
      href={href}
      className={classNames("px-4 py-2 rounded-md", {
        "bg-secondary-color text-white": !isActive,
        "bg-secondary-color-dark text-white font-bold underline": isActive,
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
