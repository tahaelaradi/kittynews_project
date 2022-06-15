import * as React from "react";

const Post = ({post, handleVoteUpdate}) => {
    return (
        <article className="post" key={post.id}>
            <h2>
                <a href={`/posts/${post.id}`}>{post.title}</a>
            </h2>
            <div className="url">
                <a href={post.url}>{post.url}</a>
            </div>
            <div className="tagline">{post.tagline}</div>
            <footer>
                <p>{post.isVotedByCurrentUser}</p>
                <button onClick={() => handleVoteUpdate(post.id)}>{post.isVotedByCurrentUser? '🔽' : '🔼'} {post.votesCount} </button>
                <button>💬 {post.commentsCount}</button>
            </footer>
        </article>
    )
}

export default Post;