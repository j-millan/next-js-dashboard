"use client";

import { Icon } from "@primer/octicons-react";
import Link from "next/link";
import styles from "./SidebarItem.module.css";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

export interface SidebarItemProps {
  icon: ReactElement<Icon>;
  title: string;
  description: string;
  path: string;
}

export const SidebarItem = ({
  icon,
  title,
  description,
  path,
}: SidebarItemProps) => {
  const activePath = usePathname();
  console.debug(activePath);

  return (
    <Link
      href={path}
      className={
        activePath !== path ? styles.item : `${styles.item} ${styles.active}`
      }
    >
      {icon}
      <div className={styles.text}>
        <span>{title}</span>
        <small>{description}</small>
      </div>
    </Link>
  );
};
