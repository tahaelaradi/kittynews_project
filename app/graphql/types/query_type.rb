module Types
  class QueryType < Types::BaseObject
    field :posts_all, [PostType], null: false

    field :post, PostType, null: false do
      argument :post_id, ID, required: true
    end

    field :viewer, ViewerType, null: true

    field :can_vote, Boolean, null: false

    def posts_all
      Post.reverse_chronological.all
    end

    def post(post_id:)
      Post.find(post_id)
    end

    def viewer
      context.current_user
    end

    def can_vote
      !context[:current_user].nil?
    end
  end
end
