class Api::SessionsController < ApplicationController

  def create
    email, password = session_params[:email], session_params[:password]
    @user = User.find_by_credentials(email, password)
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid email/password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      @user.reset_session_token
      render :show
    else
      render json: ["No current user to logut"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end

end
