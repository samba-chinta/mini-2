import React from "react";

import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import classes from '../../styles/posts.module.css';

const Posts = (props) => {
  return (
    <div className={classes['post-wrapper']}>
      <div className={classes['username']}>
        <Avatar sx={{ bgcolor: "#00B172" }}>{props.username[0]}</Avatar>
        <p>{props.username}</p>
      </div>
      <img src={props.src} alt="Post" className={classes['post']}/>
      <div className={classes['widget']}>
        <button>
          <FavoriteBorderIcon/>
        </button>
        <span>{props.likesCount}</span>
      </div>
    </div>
  )
}

export default Posts;