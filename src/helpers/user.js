export function save(user) {
  localStorage.setItem('user', JSON.stringify(user));
  return true;
}

export function get() {
  try {
    const user = localStorage.getItem('user');
    if(!user) return null;
    return JSON.parse(user);
  } catch(e) {
    clean();
    return null;
  }
}

export function has() {
  return localStorage.get('user') !== null;
}

export function clean() {
  localStorage.removeItem('user');
}
