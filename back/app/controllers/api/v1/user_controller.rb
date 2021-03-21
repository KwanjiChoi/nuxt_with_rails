class Api::V1::UserController < ApplicationController
  before_action :set_user
  def show
    render json: { status: 'SUCCESS', message: 'Loaded the post', data: @user }
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
