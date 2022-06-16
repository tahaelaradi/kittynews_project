class Resolvers::IsVotedResolver < GraphQL::Schema::Resolver
  type Boolean, null: false

  def resolve
    return false unless context.current_user
    Loaders::VotesLoader.for(context.current_user).load(object.id)
  end
end
