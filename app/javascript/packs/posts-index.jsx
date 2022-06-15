import * as React from 'react';
import {useQuery, useMutation} from 'react-apollo';
import renderComponent from './utils/renderComponent';
import Post from "./components/post";
import {postsPageQuery} from "./queries/postsPage";
import {updateVoteMutation} from "./mutations/updateVote";

function PostsIndex() {
    const {data, loading, error} = useQuery(postsPageQuery);
    const [updateVote] = useMutation(updateVoteMutation);

    const handleVoteUpdate = id => {
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
