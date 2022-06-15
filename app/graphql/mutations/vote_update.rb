module Mutations
  class VoteUpdate < BaseMutation
    null true

    argument :post_id, ID, required: true

    field :post, Types::PostType, null: false
    field :errors, [String], null: false

    def resolve(post_id:)
      require_current_user!

      post = Post.find(post_id)
      vote = post.votes.find_by(user: context.current_user)

      if !vote
        Vote.create(user: context.current_user, post: post)
      else
        vote.destroy!
      end

      {
        post: post,
        errors: [],
      }
    end
  end
end
