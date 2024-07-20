import React from "react";
import { NavigationMenuLink } from "./navigation-menu";
import { cn } from "empyreanui/lib/utils";
import Link from "next/link";
import { UrlObject } from "url";

interface ListItemProps
  extends Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "title"
  > {
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  href: string | UrlObject;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        {/* <NavigationMenuLink asChild> */}
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
        {/* </NavigationMenuLink> */}
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
