class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def create
    @notebook = current_user.notebooks.new(notebooks_params)

    if @notebook.save
      render :show
    else
      render json: @notbeook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook.update_attributes(notebooks_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])

    if @notebook.destroy
      render :show
    else
      render json: ["Could not delete #{@notebook.title}"], status: 403
    end
  end

  private

  def notebooks_params
    params.require(:notebook).permit(
      :title
    )
  end
end
