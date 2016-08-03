module.exports = {
  signup(userData, success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: { user: userData },
      success,
      error
    });
  },

  login(userData, success, error) {
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: { user: userData },
      success,
      error
    });
  },

  logout(success, error) {
    $.ajax({
      url: 'api/session',
      type: 'DELETE',
      success,
      error
    });
  }
};
