module Mutations
  class CommentCreate < BaseMutation
    field :comment, Types::CommentType, null: false
    field :errors, [String], null: false

    argument :post_id, ID, required: true
    argument :text, String, required: true

    def resolve(post_id:, text:)
      require_current_user!

      user = context[:current_user]

      comment = user.comments.build(text: text, post_id: post_id)
      if comment.save
        {
          comment: comment,
          errors: [],
        }
      else
        {
          comment: nil,
          errors: comment.errors.full_messages
        }
      end
    end
  end
end
