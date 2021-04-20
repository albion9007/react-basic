import React from "react";
// BからAppコンポーネントで孫に当たるCコンポーネントをimportする。
import C from "./C";
const B = () => {
  return (
    <div>
      <h3>B</h3>
      <C />
    </div>
  );
};

export default B;
