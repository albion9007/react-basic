import React from "react";
import CompC from "./CompC";

const CompB = () => {
  return (
    <div>
      {/* 孫コンポーネントのCompCを埋め込む。 */}
      <CompC />
    </div>
  );
};

export default CompB;
