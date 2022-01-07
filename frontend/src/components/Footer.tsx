import React, { ReactElement } from "react";
import styles from "../Main.module.css";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div className={styles.footer}>
      TechUp School Group Project
    </div>
  );
}
