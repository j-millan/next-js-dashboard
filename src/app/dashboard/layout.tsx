import { Sidebar } from "@/shared/components";
import styles from "./page.module.css";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar></Sidebar>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
