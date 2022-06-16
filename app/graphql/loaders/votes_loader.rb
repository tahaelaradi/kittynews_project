# Note (tahaelaradi): Taken from @rstankov's own blog!
# https://blog.rstankov.com/dealing-with-n-1-in-graphql-part-2/
class Loaders::VotesLoader < GraphQL::Batch::Loader
  def initialize(user)
    @user = user
  end

  def perform(post_ids)
    voted_post_ids = @user.votes.where(post_id: post_ids).pluck(:post_id)

    post_ids.each do |post_id|
      fulfill post_id, voted_post_ids.include?(post_id)
    end
  end
end
