// 孫コンポーネントで、Providerで提供される値を読み取るために、
// useContext、AppContextをimportする。
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";

const CompC = () => {
  // 親コンポーネントのProviderで提供された値を{}で囲い指定すると、受け取ることが出来る。
  // もし、複数の値を受け取りたければ、{}内を値と値の間を","で区切る。
  const { dispatchProvided } = useContext(AppContext);
  return (
    <div>
      {/* 親で定義されたdispatchを使うため、トリガーとなるボタンを作成する。
       上記で受け取った値を使って、アクションを実行させる。*/}
      <button onClick={() => dispatchProvided("add_1")}>Add + 1</button>
    </div>
  );
};

export default CompC;
