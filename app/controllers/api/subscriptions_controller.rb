class Api::SubscriptionsController < ApplicationController

  before_action :set_sub, only: [:destroy]

  def index
    @subscriptions = current_user.podcasts
    render 'api/subscriptions/index'
  end

  def create
    @subscription = Subscription.new(subs_params)
    if @subscription.save
      render 'api/subscriptions/subscription'
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    @subscription = Subscription.new(subs_params)
    if @subscription
      render 'api/subscriptions/subscription'
    else
      render json: ["Subscription not found"], status: 404
    end
  end

  private

  def set_sub
    @subscription = Subscription.find(params[:id])
  end

  def subs_params
    params.require(:subscription).permit(:user_id, :podcast_id)
  end
end
