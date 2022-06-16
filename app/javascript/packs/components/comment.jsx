import * as React from "react";

const Comment = ({comment}) => (
    <article className="comment">
        <div className="line"><strong>{comment.user.name}</strong> {comment.text}</div>
    </article>
)

export default Comment;