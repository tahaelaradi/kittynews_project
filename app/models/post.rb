class Post < ApplicationRecord
  belongs_to :user, required: true
  has_many :comments, dependent: :destroy

  validates :title, :tagline, presence: true
  validates :url, url: true, presence: true

  scope :reverse_chronological, -> { order(arel_table[:created_at].desc) }
end
