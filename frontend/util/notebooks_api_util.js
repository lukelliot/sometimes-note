module.exports = {
  fetchAllNotebooks(success, error) {
    $.ajax({
      url: 'api/notebooks',
      type: 'GET',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  createNotebook(notebookData, success, error) {
    $.ajax({
      url: 'api/notebooks',
      type: 'POST',
      data: { notebook: notebookData },
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  saveNotebook(notebook, success, error) {
    $.ajax({
      url: `api/notebooks/${notebook.id}`,
      type: 'PATCH',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  },

  destroyNotebook(id, success, error) {
    $.ajax({
      url: `api/notebooks/${id}`,
      type: 'DELETE',
      success,
      error(xhr) {
        let jsonErrors = xhr.responseJSON;
        error(jsonErrors);
      }
    });
  }
};
