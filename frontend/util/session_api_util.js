

export const newUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    user: { user }
  })
);

// TODO: Edit user info functionality
// export const editUser = user => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/users/${user.id}`,
//     user: {user}
//   })
// );

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    user: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
