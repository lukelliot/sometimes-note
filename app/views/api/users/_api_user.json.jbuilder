json.extract! api_user, :id, :email, :session_token, :password_digest, :created_at, :updated_at
json.url api_user_url(api_user, format: :json)
