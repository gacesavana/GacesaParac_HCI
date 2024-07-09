"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import classNames from "classnames";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentUrl = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;
  const isActive = currentUrl === href;

  return (
    <Link
      href={href}
      className={classNames("px-4 py-2 rounded-md", className, {
        "bg-secondary-color text-white": !isActive && !className,
        "bg-secondary-color-dark text-white font-bold underline": isActive && !className,
        "footer-link-active": isActive && className === "footer-link",
      })}
    >
      {children}
    </Link>
  );
};

export default NavLink;
