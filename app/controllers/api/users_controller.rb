  class Api::UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]
  before_action :require_logged_in, only: [:update, :destroy]
  # GET /api/users
  # GET /api/users.json
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
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:email, :password)
  end

  def create_first_notebook
    Notebook.create({ title: 'My First Notebook', description: '', author_id: @user.id })
  end
end
