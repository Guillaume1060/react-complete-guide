import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Modal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.btn}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.btn}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
