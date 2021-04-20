import React, { useState, useEffect } from "react";
// axiosはPromiseベースのHTTP ClientライブラリでGETやPOSTのHTTPリクエストを使って
// サーバからデータの取得、サーバ上のデータの更新を行うことができるもの。
import axios from "axios";
const ApiFetch = () => {
  // 外部APIから投稿データをGETするため、postsステートを定義する。初期値は空の[]にしておく。
  const [posts, setPosts] = useState([]);

  // useEffectでjsonplaceholderへaxiosを使いアクセスして、投稿を取得する。
  useEffect(() => {
    // axios.getでjsonplaceholderのアクセスしたいパスを引数に記述する。
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // getでアクセスした返り値をthenでres(レスポンス)変数に代入して、それをアロー関数内へ渡す。
    // .then((res) => {
    // setPostsを使って、postsに取得したデータを格納する。
    // res.dataとすることで、jsonオブジェクトを取得する事が出来る。
    //   setPosts(res.data);
    // });

    // axios以外にも、JSのfetchメソッドを使用すれば、同様の事が行える。
    fetch("https://jsonplaceholder.typicode.com/posts", {
      // fetchではパスを指定した後、{}でメソッドの種類を指定する。
      method: "GET",
    })
      // thenでaxiosの場合と同様にresを指定するが、fetchの場合は、
      // HTMLの形のresが返ってくるためjson形式にする。
      .then((res) => res.json())
      // jsonに変換されたデータをdata変数に入れる。
      .then((data) => {
        // それを引数としてアロー関数でsetPostsを使い、postsに結果を代入する。
        setPosts(data);
      });
    // useEffectでデータを取得するのは初めの1回だけで良いので、
    // 第2引数を空の[]を記述する。
  }, []);

  // APIで取得したデータをリスト状にしてブラウザに表示させる処理を記述。
  return (
    <div>
      <ul>
        {/* postsに対してmapを使い、1つ1つデータを取り出していく。
        取り出したデータをpostに入れ、それを1つ1つ表示する。 */}
        {posts.map((post) => (
          // mapでデータを展開していく場合は、1つ1つユニークなキーが必要なため、
          // IDを指定するためpost.idを割り当てる。
          <li key={post.id}> {post.title} </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
