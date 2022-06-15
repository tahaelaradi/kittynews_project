class AddVotesCountToPosts < ActiveRecord::Migration[7.0]
  def change
    add_index :votes, [:user_id, :post_id], unique: true
    add_column :posts, :votes_count, :integer, null: false, default: 0
  end
end
