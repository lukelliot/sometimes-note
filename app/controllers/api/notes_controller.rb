class NotesController < ApplicationController
  before_action: require_logged_in, only: [:create, :update]

  def index
    @notes = Note.all
  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = current_user.notes.new(note_params)
    @note.author_id = current_user.id

    if @note.save
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = current_user.notes.find(params[:id])

    if @note.update_attributes(note_params)

    else

    end
  end

  private

  def note_params
    params.require(:note).permit(
      :title,
      :content,
      :notebook_id
    )
  end
end
