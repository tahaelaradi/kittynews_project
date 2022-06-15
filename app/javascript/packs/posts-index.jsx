import React, {useEffect} from 'react';
import {useQuery, useMutation} from 'react-apollo';
import renderComponent from './utils/renderComponent';
import Post from "./components/post";
import {POSTS_PAGE} from "./queries/postsPage";
import {UPDATE_VOTE} from "./mutations/updateVote";

function PostsIndex() {
    const {data, loading, error, refetch} = useQuery(POSTS_PAGE);
    const [updateVote, {voteUpdate}] = useMutation(UPDATE_VOTE);

    useEffect(() => refetch(), [voteUpdate])

    const handleVoteUpdate = id => {
        if(!data.canVote){
            window.location.href = "users/sign_in";
        }
        updateVote({variables: {postId: id}});
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="box">
            {data.postsAll.map((post) => <Post key={post.id} post={post} handleVoteUpdate={handleVoteUpdate}/>
            )}
        </div>
    );
}

renderComponent(PostsIndex);
