import styles from "./container.module.css";
interface IContainerProps {
  children: JSX.Element;
}
export default function Container({ children }: IContainerProps) {
  return <div className={styles.parentContainer}>{children}</div>;
}
