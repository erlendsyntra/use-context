import { useContext } from "react";
import { globalData } from "./Data";

const Theme = () => {
  const { theme } = useContext(globalData);
  return <div>Jou thema staat ingesteld op {theme}</div>;
};
export default Theme;
