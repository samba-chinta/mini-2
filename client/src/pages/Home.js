import React, { useState } from "react";
// import ReactDOM from "react-dom";

import Posts from "../components/Posts/Posts";
import sam1 from "../resources/images/sam1.jpg";
import sam2 from "../resources/images/sam2.jpg";
import Button from "../components/UI/Button";
import classes from "../styles/home.module.css";
// import DragNDropField from "../components/DragNDrop/DragNDropField";

const dummydata = [
  {
    username: "samba",
    src: sam1,
    likesCount: 201,
  },
  {
    username: "ram",
    src: sam2,
    likesCount: 120,
  },
];

const Home = (props) => {
  const [userPosts, setUserPosts] = useState(dummydata);
  // const [isOverlayOpen, setOverlayOpen] = useState(false);

  // const postBtnClickHandler = (props) => {
  //   setOverlayOpen(!isOverlayOpen);
  // };

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["posts"]}>
        <h2>Posts:</h2>
        {userPosts.map((post) => (
          <Posts key={Math.random().toString()} {...post} />
        ))}
      </div>
      <Button
        type="button"
        value="post"
        className={classes["btn"]}
        // onClick={postBtnClickHandler}
      />
      {/* {isOverlayOpen &&
        ReactDOM.createPortal(
          <DragNDropField />,
          document.getElementById("upload-overlay")
        )} */}
    </div>
  );
};

export default Home;
