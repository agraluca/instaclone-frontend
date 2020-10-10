import React, { useEffect, useState } from "react";

import "./styles.css";

import api from "../../services/api";

import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt");

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getApi() {
      const res = await api.get("/sync");
      setPosts(res.data.reverse());
      console.log(res.data);
    }
    getApi();
    moment.locale("pt-BR");
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <section key={post._id}>
            <main>
              <header id="header-post">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14Gjpptpc_dpU1ipAvGoLeASf5C0vFpQNLFYrz86h=s88-c-k-c0x00ffffff-no-rj-mo"
                  alt="Imagem do perfil"
                />
                <h5>{post.user}</h5>
              </header>
              {post.image && <img src={post.image} alt="Foto da postagem" />}
              {post.imageName && (
                <img
                  src={`http://localhost:8030/static/${post.key}`}
                  alt="Foto da postagem"
                />
              )}
              <section id="post-icons">
                <ul>
                  <li>
                    <a href="/">
                      <span className="material-icons">favorite_border</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span className="material-icons">notes</span>
                    </a>
                  </li>
                </ul>
              </section>

              <section id="post-like">
                <h5>90 curtidas</h5>
              </section>

              <section id="post-title">
                <h5>{post.user}</h5>
                <h4>{post.caption}</h4>
              </section>
              <section id="post-time">
                <h5>{moment(`${post.createdAt}`).fromNow()}</h5>
              </section>

              <section id="post-input">
                <input type="text" placeholder="Adcione um comentario..." />
                <button>Publicar</button>
              </section>
            </main>
            <aside></aside>
          </section>
        );
      })}
    </>
  );
}

export default Posts;
