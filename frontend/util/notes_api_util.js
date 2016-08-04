module.exports = {
  fetchAllNotes(success, error) {
    $.ajax({
      url: 'api/notes',
      type: 'GET',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  fetchSingleNote(id, success, error) {
    $.ajax({
      url: `api/notes/${id}`,
      type: 'GET',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  createNote(noteData, success, error) {
    $.ajax({
      url: 'api/notes',
      type: 'POST',
      data: { note: noteData },
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
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
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  deleteNote(id, success, error) {
    $.ajax({
      url: `api/posts/${id}`,
      type: 'DELETE',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  }
};
