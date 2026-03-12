import React from "react";
import styles from "../styles/ProfileCard.module.css";

const ProfileCard = ({ name, bio }) => (
  <div className={styles.card}>
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.text}>{bio}</p>
  </div>
);

export default ProfileCard;