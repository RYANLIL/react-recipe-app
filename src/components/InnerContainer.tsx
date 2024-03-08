import styles from "./innerContainer.module.css";
interface IInnerContainer {
  children: JSX.Element;
}
export default function InnerContainer({ children }: IInnerContainer) {
  return <div className={styles.innerContainer}>{children}</div>;
}
