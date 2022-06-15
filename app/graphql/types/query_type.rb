module Types
  class QueryType < Types::BaseObject
    field :posts_all, [PostType], null: false

    field :viewer, ViewerType, null: true

    field :can_vote, Boolean, null: false

    def posts_all
      Post.reverse_chronological.all
    end

    def viewer
      context.current_user
    end

    def can_vote
      !context[:current_user].nil?
    end
  end
end
