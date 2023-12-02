import { useContext } from "react";
import { globalData } from "./Data";

const Taal = () => {
  const { taal } = useContext(globalData);
  return <div>De taal staat ingesteld op {taal.toUpperCase()}</div>;
};
export default Taal;
