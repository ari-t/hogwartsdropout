import request from 'superagent'

export const url = 'https://www.boredapi.com/api/activity/'

export function Bored () {
  return request
    .get(url)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('zzzz')
    })
}

// You don't test code that you have brought into your code base, e.g: You wouldn't test that superagent is doing it's job.
// Only to test code you have written, not what someone else has written.
