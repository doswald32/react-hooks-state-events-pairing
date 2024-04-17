import React from "react";

function Video({ video, handleLikes, handleDislikes, likes, dislikes, handleHideComments, showComments }) {

    return (
        <div className="App">
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p style={{fontWeight: "normal"}}>{video.views} views | Uploaded {video.createdAt}</p>
            <button onClick={handleLikes}>{likes} 👍</button><button onClick={handleDislikes}>{dislikes} 👎</button><br/>
            <button onClick={handleHideComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <hr />
        </div>
    );
}

export default Video