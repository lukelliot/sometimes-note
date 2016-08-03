module.exports = {
  signup(userData, success, error) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      data: { user: userData },
      success(user) {
        success(user);
      },
      error(xhr) {
        const jsonErrors = xhr.responseJSON;
        error('signup', jsonErrors);
      }
    });
  },

  login(userData, success, error) {
    $.ajax({
      url: 'api/session',
      type: 'POST',
      data: { user: userData },
      success(user) {
        success(user);
      },
      error(xhr) {
        const jsonErrors = xhr.responseJSON;
        error('login', jsonErrors);
      }
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
