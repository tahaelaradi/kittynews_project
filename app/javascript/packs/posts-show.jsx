import * as React from 'react';
import renderComponent from './utils/renderComponent';
import PostInfo from "./components/postInfo";
import CommentsList from "./components/commentsList";

function PostsShow({postId}) {
    return (
        <>
            <PostInfo postId={postId} />
            <CommentsList postId={postId}/>
        </>
    );
}

renderComponent(PostsShow);
