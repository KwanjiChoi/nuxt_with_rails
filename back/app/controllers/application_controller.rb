class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  skip_before_action :verify_authenticity_token, if: :devise_controller?

  def response_unauthorized
    render status: 401, json: { status: 401, message: 'Unauthorized' }
  end
end
