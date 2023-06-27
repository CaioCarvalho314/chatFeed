import styles from "./Avatar.module.css";
/* eslint-disable react/prop-types */
export function Avatar({ hasBorder = true, src }) {
  return (
    <img
      className={hasBorder ? styles.avatarBorder : styles.avatarNoBorder}
      src={src}
    />
  );
}
