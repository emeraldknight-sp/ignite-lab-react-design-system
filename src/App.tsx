import { Toaster } from "react-hot-toast";
import { Login } from "./pages/Login";
import "./styles/global.css";

export const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Login />
    </>
  );
};
