// import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const logged = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <Header />
      {logged ? <UserProfile /> : <Auth />}
    </>
  );
}

export default App;
