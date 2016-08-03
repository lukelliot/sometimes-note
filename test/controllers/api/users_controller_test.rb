require 'test_helper'

class Api::UsersControllerTest < ActionController::TestCase
  setup do
    @api_user = api_users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create api_user" do
    assert_difference('User.count') do
      post :create, api_user: { password_digest: @api_user.password_digest, session_token: @api_user.session_token, email: @api_user.email }
    end

    assert_redirected_to api_user_path(assigns(:api_user))
  end

  test "should show api_user" do
    get :show, id: @api_user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_user
    assert_response :success
  end

  test "should update api_user" do
    patch :update, id: @api_user, api_user: { password_digest: @api_user.password_digest, session_token: @api_user.session_token, email: @api_user.email }
    assert_redirected_to api_user_path(assigns(:api_user))
  end

  test "should destroy api_user" do
    assert_difference('User.count', -1) do
      delete :destroy, id: @api_user
    end

    assert_redirected_to api_users_path
  end
end
