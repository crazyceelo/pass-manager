export function saveGame(data) {
  return dispatch => {
    return fetch('/api/post', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }
}