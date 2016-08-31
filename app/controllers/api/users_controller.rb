  class Api::UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :require_logged_in, only: [:update, :destroy]

  def index
    @users = User.all
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      create_first_notebook
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def create_first_notebook
    Notebook.create({ title: 'My First Notebook', author_id: @user.id })
  end
end
