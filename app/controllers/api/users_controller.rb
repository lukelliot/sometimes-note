class Api::UsersController < ApplicationController
  before_action :set_api_user, only: [:show, :edit, :update, :destroy]
  before_action :require_logged_in, except: [:create, :new]
  # GET /api/users
  # GET /api/users.json
  def index
    @api_users = Api::User.all
  end

  # GET /api/users/1
  # GET /api/users/1.json
  def show
  end

  # GET /api/users/new
  def new
    @api_user = Api::User.new
  end

  # GET /api/users/1/edit
  def edit
  end

  # POST /api/users
  # POST /api/users.json
  def create
    @api_user = Api::User.new(api_user_params)

    respond_to do |format|
      if @api_user.save
        format.html { redirect_to @api_user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @api_user }
      else
        format.html { render :new }
        format.json { render json: @api_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/users/1
  # PATCH/PUT /api/users/1.json
  def update
    respond_to do |format|
      if @api_user.update(api_user_params)
        format.html { redirect_to @api_user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_user }
      else
        format.html { render :edit }
        format.json { render json: @api_user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/users/1
  # DELETE /api/users/1.json
  def destroy
    @api_user.destroy
    respond_to do |format|
      format.html { redirect_to api_users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_user
      @api_user = Api::User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_user_params
      params.require(:api_user).permit(:username, :session_token, :password_digest)
    end
end
