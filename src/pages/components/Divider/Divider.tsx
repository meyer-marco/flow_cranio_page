import * as React from "react";
import style from "./divider.module.css";

const Divider: React.FC<{}> = () => {
  return (
    <div className={`my-3 ${style.divider} ${style.div_transparent}`}></div>
  );
};

export default Divider;
