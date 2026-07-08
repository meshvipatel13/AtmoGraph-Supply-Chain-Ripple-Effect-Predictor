import styles from "./SidebarItem.module.css";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  active?: boolean;
  badge?: number;
}

const SidebarItem = ({
  icon,
  title,
  active = false,
  badge,
}: SidebarItemProps) => {
  return (
    <div className={`${styles.item} ${active ? styles.active : ""}`}>
      <div className={styles.left}>
        {icon}
        <span>{title}</span>
      </div>

      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
  );
};

export default SidebarItem;