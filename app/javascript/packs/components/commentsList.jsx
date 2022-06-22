import React, {memo, useState} from 'react';
import {useMutation, useQuery} from 'react-apollo';
import {POST_PAGE_COMMENTS} from "../queries/commentsList";
import {CREATE_COMMENT} from "../mutations/createComment";
import {POST_PAGE} from "../queries/postPage";
import Comment from "./comment";

function CommentsList({postId}) {
    const [comment, setComment] = useState("")
    const {data, loading, error} = useQuery(POST_PAGE_COMMENTS, {variables: {postId: postId}});
    const [createComment, {_, commentLoading, commentError}] = useMutation(CREATE_COMMENT, {
        update: (cache, {data: {commentCreate: {comment}}}) => {
            const data = cache.readQuery({query: POST_PAGE_COMMENTS, variables: {postId: postId}})
            data.post.comments = [...data.post.comments, comment]
            cache.writeQuery({query: POST_PAGE_COMMENTS, data, variables: {postId: postId}})
        },
        refetchQueries: [{query: POST_PAGE, variables: {postId: postId}}]
    })

    if (loading || commentLoading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    if (commentError) return `Error! ${commentError.message}`;

    const handleChange = (e) => {
        setComment(e.target.value)
    };

    const handleCommentCreation = (e) => {
        e.preventDefault()
        createComment({variables: {postId: postId, text: comment}})
        setComment("")
    };

    const List = memo(() => data.post.comments.map((comment) => (<Comment key={comment.id} comment={comment}/>)), [comment]);

    return (
        <div className="box">
            <form className="form" onSubmit={handleCommentCreation}>
                <input className="input" onChange={handleChange} value={comment} placeholder="Comment..."/>
                <button className="button">Add Comment</button>
            </form>
            <div>
                {data.post.comments.map((comment) => (<Comment key={comment.id} comment={comment}/>))}
            </div>
        </div>
    );
}

export default CommentsList;
