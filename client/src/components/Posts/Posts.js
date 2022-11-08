import React from "react";

import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import classes from '../../styles/posts.module.css';

const Posts = (props) => {
  return (
    <div className={classes['post-wrapper']}>
      <div className={classes['username']}>
        <Avatar sx={{ bgcolor: "#00B172" }}>{props.email[0]}</Avatar>
        <p>{props.email}</p>
      </div>
      <img src={props.src} alt="Post" className={classes['post']}/>
      <div className={classes['widget']}>
        <button>
          <FavoriteBorderIcon/>
        </button>
        <span>{props.likes}</span>
      </div>
    </div>
  )
}

export default Posts;