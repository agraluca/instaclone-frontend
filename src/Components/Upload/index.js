import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";

function Upload() {
  const [file, setFile] = useState("");
  const [caption, setCaption] = useState("");
  const [user, setUser] = useState("Agraluca");

  function handleUploadFile(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(caption);
  }

  function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = new FormData();

      data.append("postImage", file, file.name);
      data.append("user", user);
      data.append("caption", caption);
      console.log(data);
      api.post("/upload", data);
      console.log("Works");
    } catch (e) {
      console.log("There was a problem");
    }
  }

  return (
    <form onSubmit={handleSubmit} id="upload">
      <input
        onChange={(e) => {
          setCaption(e.target.value);
        }}
        type="text"
        className="caption"
        placeholder="Escreva uma legenda..."
      />
      <label>
        <input type="file" accept="image/*" onChange={handleUploadFile} />
        <span className="material-icons">add_photo_alternate</span> Selecione
        seu arquivo
      </label>
      {file !== "" && (
        <div id="archive-name">
          <span className="material-icons">wallpaper</span>
          <h5>{file.name}</h5>

          <span onClick={() => setFile("")} className="material-icons">
            close
          </span>
        </div>
      )}

      <button className="submit">Postar</button>
    </form>
  );
}

export default Upload;
