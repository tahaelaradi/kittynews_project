module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :tagline, String, null: false
    field :url, String, null: false
    field :user, UserType, null: false
    field :comments, [CommentType], null: true
    field :comments_count, Int, null: false
    field :votes_count, Int, null: false
    field :is_voted_by_current_user, Boolean, null: false

    # Note: We should fetch user using batch loader but only if necessary
    # Eg: If we want to display any user info in Post-Index page
    # def user
    #   RecordLoader.for(User).load(object.user_id)
    # end

    def is_voted_by_current_user
      object.votes.where(user: context[:current_user]).exists?
    end
  end
end
