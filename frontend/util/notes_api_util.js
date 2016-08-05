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
      // NOTE May need to change {note: noteData} to just noteData
      //  depending on input from frontend
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
      // NOTE May need to change {note: noteData} to just noteData
      //  depending on input from frontend
      data: { note: noteData },
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  deleteNote(id, success, error) {
    $.ajax({
      url: `api/notes/${id}`,
      type: 'DELETE',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  }
};
