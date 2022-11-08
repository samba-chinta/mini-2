import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "../components/Posts/Posts";
import Button from "../components/UI/Button";
import classes from "../styles/home.module.css";

const Home = (props) => {
  const [uploadPost, setUploadPost] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isFormOpened, setIsFormOpened] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/upload-image")
      .then((res) => setUserPosts(res.data))
      .catch((err) => console.log(err, "Error Occurred"));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("postfile", uploadPost);
    formData.append("email", localStorage.getItem("data"));
    axios
      .post("http://localhost:8000/upload-image", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleFileSelect = (e) => setUploadPost(e.target.files[0]);

  const postBtnClickHandler = () => setIsFormOpened(!isFormOpened);

  return (
    <div className={classes["wrapper"]}>
      {isFormOpened && (
        <div className={classes["post-form-wrapper"]}>
          <form className={classes["form"]} action="#">
            <input
              type="file"
              name="postfile"
              onChange={handleFileSelect}
            />
            <input
              type="submit"
              value="Upload the Image"
              onClick={handleSubmit}
            />
          </form>
        </div>
      )}
      <div className={classes["posts"]}>
        <h2>Posts:</h2>
        {userPosts.length !== 0 ?
          (userPosts.map((post) => {return <Posts
            key={Math.random().toString()}
            email={post.email}
            likes={post.likes}
            src={`data:image/jpeg;charset=utf-8;base64, ${btoa([].reduce.call(new Uint8Array(post.img.data.data),function(p,c){return p+String.fromCharCode(c)},''))}`}
          />})): (<p>No Posts Available</p>)
        }
      </div>
      <Button
        type="button"
        value="post"
        className={classes["btn"]}
        onClick={postBtnClickHandler}
      />
    </div>
  );
};

export default Home;
