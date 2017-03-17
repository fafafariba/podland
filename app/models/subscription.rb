class Subscription < ApplicationRecord
  validates :podcast, :user, presence: true
  validates_uniqueness_of :user, scope: :podcast

  belongs_to :user
  belongs_to :podcast

end
