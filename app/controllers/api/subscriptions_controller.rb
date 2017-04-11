class Api::SubscriptionsController < ApplicationController

  before_action :set_sub, only: [:destroy]

  def index
    @subscriptions = current_user.subscriptions
    render 'api/subscriptions/index'
  end

  def create
    @subscription = Subscription.new(subs_params)
    @subscription.user_id = current_user.id
    if @subscription.save
      render 'api/subscriptions/subscription'
    else
      render json: ["Already subscribed to podcast."], status: 422
    end
  end

  def destroy
    @subscription = Subscription.find(params[:id])
    if @subscription.destroy!
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
    params.require(:subscription).permit(:podcast_id)
  end
end
