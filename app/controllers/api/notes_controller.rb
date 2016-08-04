class Api::NotesController < ApplicationController
  before_action: require_logged_in, only: [:create, :update]

  def index
    @notes = Note.all
    render :index
  end

  def show
    @note = Note.find(params[:id])
    render :show
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
    if current_user_is_author?(note) && safely_destroys(note)
      Flash.now = %Q(#{note.title} was sent to the trash.)
      render :show
    else
      render json: ["Could not delete #{note.title}"], status 403
    end
  end

  private

  def safely_destroys(note)
    note.destroy
  end

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
