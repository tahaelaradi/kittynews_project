module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :tagline, String, null: false
    field :url, String, null: false
    field :user, UserType, null: false
    field :comments_count, Int, null: false
    field :votes_count, Int, null: false
    field :is_voted_by_current_user, Boolean, null: false

    def is_voted_by_current_user
      object.votes.where(user: context[:current_user]).exists?
    end
  end
end
