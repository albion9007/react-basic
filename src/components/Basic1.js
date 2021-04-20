// useStateの使い方

// useStateをimportする。
import React, { useState } from "react";

const Basic1 = () => {
  // ステートと、ステートを更新するための関数を定義する。
  // useStateでcountの初期値を0にしておく。
  // const [count, setCount] = useState(0);
  const [product, setProducts] = useState({ name: "", price: "" });

  // returnの中は基本的にHTML形式で記述。
  return (
    // 内容をdivタグか、<>フラグメントで囲う必要がある。
    <>
      <form>
        {/* inputformでtextがタイピングされた時にonChangeでステートを更新する。 */}
        <input
          type="text"
          value={product.name}
          // evt変数には、htmlのイベントのハンドラー情報が返ってくる。
          // それを受け取り、setProducts関数に渡す。
          onChange={(evt) =>
            // productの名前を更新するため、
            // evt.target.valueでテキストフォーマットに入力されている値を取得することが出来る。
            // nameだけ更新すると、その時のpriceの情報が消されてしまう仕様になっているため、
            // productの前に3つ"."をつけることで、productオブジェクトを要素ごとに分解してくれる作用がある。
            // その上でnameの部分だけに値をセットする。
            setProducts({ ...product, name: evt.target.value })
          }
        />

        <input
          type="text"
          value={product.price}
          onChange={(evt) =>
            setProducts({ ...product, price: evt.target.value })
          }
        />
      </form>
      <h3>product name is {product.name}</h3>
      <h3>product price is {product.price}</h3>

      {/* countの値を出力するために、{}でcountステートを囲う。
      onClickでアロー関数でsetCountの引数にある処理がされ、それがsetCountでステートの値が更新される。
      ここではsetCountはクリックするごとに+1される。 */}
      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button> */}
    </>
  );
};

export default Basic1;
