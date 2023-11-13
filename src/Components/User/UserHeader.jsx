import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const location = useLocation();

  const titleMapping = {
    "/conta/estatisticas": "Estatísticas",
    "/conta/postar": "Poste Sua Foto",
    "/conta": "Minha Conta",
  };

  const path = location.pathname;
  const title = titleMapping[path] || "Minha Conta";

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
