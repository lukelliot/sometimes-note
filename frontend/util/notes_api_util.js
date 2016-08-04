module.exports = {
  fetchNotes(success, error) {

  },

  createNote(noteData, success, error) {
    $.ajax({
      url: 'api/notes',
      type: 'POST',
      data: { note: noteData },
      success,
      error(xhr) {
        jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  saveNote(noteData, success, error) {
    $.ajax({
      url: `api/notes/${noteData.id}`,
      type: 'PATCH',
      data: noteData,
      success,
      error(xhr) {
        jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  deleteNote(id, success, error) {
    $.ajax({
      url: `api/posts/${id}`,
      type: 'DELETE',
      
    });
  }
};
