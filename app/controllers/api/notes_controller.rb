class Api::NotesController < ApplicationController
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
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = current_user.notes.find(params[:id])

    if current_user_is_author?(@note) && safely_updates?(@note)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    note = current_user.notes.find(params[:id])
    if current_user_is_author?(note) && note.destroy
      render
    Flash.now = "#{note.title} has been moved to the Trash"
  end

  private

  def safely_updates?(note)
    note.update_attributes(note_params)
  end

  def current_user_is_author?(note)
    current_user.id = note.author.id
  end

  def note_params
    params.require(:note).permit(
      :title,
      :content,
      :notebook_id,
    )
  end
end
