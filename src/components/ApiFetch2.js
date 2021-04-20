// 指定したIDのデータだけAPIから取得して表示する。

import React, { useState, useEffect } from "react";
const ApiFetch2 = () => {
  const [posts, setPosts] = useState([]);
  // IDを管理するステートの作成、初期値を１番にしておく。
  const [id, setId] = useState(1);
  // ボタンを押された変化を読み取るステートを作る。
  // 押される度に、falseとtrueをトグルするステートを作る。
  const [clicked, setClicked] = useState(false);
  // clickedのステートの内容をfalseとtrueを反転させる
  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // fetchするURLをシングルクォーテーションで囲っていると、それが文字列として認識されてしまう。
    // idを変化させるステートを埋め込むため、URLの最後に/${}を記述し、中身に埋め込みたい変数を入れる。
    // 最後にURLごとバッククォーテーションで囲うと、文字列の中に変数を埋め込むことが出来る。
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
    // 第2引数にボタンがクリックされた時にuseEffectを実行させるために、
    // ボタンクリックに紐づいているステートがclickedになるため、それを第2引数に入れる。
  }, [clicked]);

  return (
    <div>
      {/* idナンバーを入力すフォームを作る。 */}
      <input
        type="text"
        value={id}
        // onChangeでイベントオブジェクトを取得し、それを元にsetIdでidに上書きする形になる。
        onChange={(evt) => setId(evt.target.value)}
      />
      {/* <br />は改行になる。 */}
      <br />
      {/* idナンバーを入力した時点では、idの取得は行えない様にして、
      ボタンが押された時に取得できる様にする。 */}
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      <br />
      {posts.title}
    </div>
  );
};

export default ApiFetch2;
