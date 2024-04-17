import React from "react";

function Comment({ user, comment }) {
    return (
        <div>
            <p>{user}</p>
            <p>{comment}</p>
        </div> 
    );
}

export default Comment