import * as React from 'react';
import {useQuery} from 'react-apollo';
import {POST_PAGE_COMMENTS} from "../queries/commentsList";
import Comment from "./comment";

function CommentsList({postId}) {
    const {data, loading, error} = useQuery(POST_PAGE_COMMENTS, {variables: {postId: postId}, fetchPolicy: "no-cache"});

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="box">
            {data.post.comments.map((comment) => (<Comment key={comment.id} comment={comment}/>))}
        </div>
    );
}

export default CommentsList;
