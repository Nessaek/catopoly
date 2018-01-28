exports.createUser = options => {
  return new Promise((resolve, reject) => {
    let response
    fetch(`//${process.env.REACT_APP_API_DOMAIN}/User`, {
      method: 'POST',
      body: JSON.stringify(options),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => {
        if (res.status === 200) {
          response = res
          return response.json()
        } else {
          throw new Error(res)
        }
      })
      .then(json => {
        return resolve(json)
      })
      .catch(err => {
        return reject(err)
      })
  })
}
