import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import Comment from "./Comment.js";

function App() {
  let initialComments = video.comments.map((comment) => (
    <Comment key={comment.id} user={comment.user} comment={comment.comment}/>
  ))

  const [likes, setLikes] = useState(video.upvotes);
  const [dislikes, setDislikes] = useState(video.downvotes);
  const [listOfComments, setListOfComments] = useState(initialComments);
  const [showComments, setShowComments] = useState(true);
  
  function handleLikes() {
    setLikes((likes) => likes + 1)
  }

  function handleDislikes() {
    setDislikes((dislikes) => dislikes + 1)
  }

  function handleHideComments() {
    setShowComments(!showComments);
  }

  return (
    <div>
      <Video video={video} likes={likes} dislikes={dislikes} handleLikes={handleLikes} handleDislikes={handleDislikes} handleHideComments={handleHideComments} showComments={showComments}/>
      <h2>{video.comments.length} Comments</h2>
      <p>{showComments ? listOfComments : null}</p>
    </div>
  );
}

export default App;
