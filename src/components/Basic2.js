// useStateの配列に対する使い方

import React, { useState } from "react";

const Basic2 = () => {
  // useStateの初期値は配列の形の空にしておく。
  const [products, setProducts] = useState([]);

  // newProductsで要素を追加する関数を定義する。
  const newProducts = () => {
    setProducts([
      // "..."で要素を分解する。
      ...products,
      {
        // id番号を連番にするため、その時のproducts配列の要素の数にするため、
        // products.lengthとする。
        id: products.length,
        name: "Hello React",
      },
    ]);
  };

  return (
    <div>
      <button onClick={newProducts}>Add new Product</button>
      {/* 配列の内容をリストで表示させる。 */}
      <ul>
        {/* 配列の内容を展開するために、map関数を使う。
        productsの中から1個1個要素を展開する。展開された要素はproductに割り当てられる。
        productを引数にして、アロー関数の右側で処理を行う。 */}
        {products.map((product) => (
          <li key={product.id}>
            {product.name} id: {product.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basic2;
