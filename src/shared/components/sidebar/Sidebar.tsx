import Image from "next/image";
import { AiModelIcon, AlertFillIcon, AppsIcon, BriefcaseIcon, MarkGithubIcon, NumberIcon } from "@primer/octicons-react";
import { SidebarItem, SidebarItemProps } from "../.";
import styles from "./Sidebar.module.css";

const sidebarItems: SidebarItemProps[] = [
  {
    icon: <AppsIcon size={18} />,
    title: 'Dashboard',
    description: 'Data overview',
    path: '/dashboard',
  },
  {
    icon: <BriefcaseIcon size={18} />,
    title: 'Shopping Cart',
    description: 'Manage your cart items.',
    path: '/dashboard/shopping-cart',
  },
  {
    icon: <MarkGithubIcon size={18} />,
    title: 'Pokémons',
    description: 'See al available Pokémons.',
    path: '/dashboard/pokemons',
  },
  {
    icon: <AlertFillIcon size={18} />,
    title: 'Error Example',
    description: 'Showcase of Next.js error handling.',
    path: '/dashboard/error-example',
  }
]

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.title}>
          <AiModelIcon size={24} />
          <span>MyDash.</span>
        </div>
        <small>Manage your actions and activities.</small>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles["user-profile"]}>
        <span className={styles.welcome}>Welcome back!</span>
        <Image
          src="/images/professional-profile-picture.jpg"
          alt="User's profile picture"
          width={60}
          height={60}
        ></Image>
        <span className={styles.username}>John Doe</span>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.items}>
        {sidebarItems.map((item) => (
          <SidebarItem {...item} key={item.path} />
        ))}
      </div>
    </div>
  );
};
