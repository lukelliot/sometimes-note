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
      render 'api/users/show'
    else
      render json: handle_errors, status: 401
    end
  end

  private

  def handle_errors
    if User.exists?(email: params[:user][:email])
      errors = ['password does not match records', ""]
    else
      errors = ['invalid password', 'email does not match records']
    end

    errors[0] = 'this is a required field' if params[:user][:password] == ""
    errors[1] = 'this is a required field' if params[:user][:email] == ""

    errors
  end
end
