class Api::NotesController < ApplicationController
  # before_action: :require_logged_in

  def index
    @notes = current_user.notes
    render :index
  end

  def show
    @note = current_user.notes.find(params[:id])
    render :show
  end

  def create
    @note = current_user.notes.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    if @note.destroy
      render :show
    else
      render json: ["Could not delete #{note.title}"], status: 403
    end
  end

  private

  def note_params
    params.require(:note).permit(
      :title,
      :content,
      :notebook_id,
    )
  end
end
