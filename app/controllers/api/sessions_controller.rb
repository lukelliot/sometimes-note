class Api::SessionsController < ApplicationController
  def destroy
    @user = current_user
    if @user
      logout
      render json: {}
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render @user
    else
        render json: ['invalid email/password'], status: 401
    end
  end
end
