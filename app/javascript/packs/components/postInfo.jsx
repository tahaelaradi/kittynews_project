import React, {useEffect} from 'react';
import {useMutation, useQuery} from 'react-apollo';
import {UPDATE_VOTE} from "../mutations/updateVote";
import {POST_PAGE} from "../queries/postPage";

function PostsInfo({postId}) {
    const {data, loading, error, refetch} = useQuery(POST_PAGE, {variables: {postId: postId}});
    const [updateVote, {voteUpdate}] = useMutation(UPDATE_VOTE);

    useEffect(() => refetch(), [voteUpdate])

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const {canVote, post} = data

    const handleVoteUpdate = id => {
        if (!canVote) {
            window.location.href = "users/sign_in";
        }
        updateVote({variables: {postId: id}});
    }

    return (
        <div className="box">
            <article className="post">
                <h2>
                    <a href={`/posts/${post.id}`}>{post.title}</a>
                </h2>
                <div className="url">
                    <a href={post.url} target="_blank">
                        {post.url}
                    </a>
                </div>
                <div className="tagline">{post.tagline}</div>
                <footer>
                    <button
                        onClick={() => handleVoteUpdate(post.id)}>{post.isVotedByCurrentUser ? '🔽' : '🔼'} {post.votesCount} </button>
                    {post.commentsCount} comments | author:{' '}
                    {post.user.name}
                </footer>
            </article>
        </div>
    );
}

export default PostsInfo;
