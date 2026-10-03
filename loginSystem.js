const users = [
  { username: 'admin', password: '12345' },
  { username: 'user1', password: 'password' }
];

function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return 'Login successful!';
  }

  return 'Invalid username or password';
}

console.log(login('admin', '12345'));
console.log(login('user1', 'password'));
console.log(login('admin', 'wrongpassword'));
