// TODO
// finir le modal d'erreur
import Card from "./Card";
import Button from "./Button";

const Modal = () => {
  <Card>
    <header>
      <h2>Invalid Input</h2>
    </header>
    <div>
      <p>Please enter a valid name and age (non-empty values).</p>
    </div>
    <footer>
      <Button>Okay</Button>
    </footer>
  </Card>;
};

export default Modal;
