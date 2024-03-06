import { Avatar } from "./Avatar";
import styles from "./Siderbar.module.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function SiderBar() {
  return (
    <aside className={styles.siderbar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className={styles.profile}>
        <Avatar src="https://github.com/Mandaalmeida.png" />

        <strong>Amanda Almeida</strong>
        <span>Web Developer</span>
      </section>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
