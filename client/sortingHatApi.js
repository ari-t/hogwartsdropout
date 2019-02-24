import request from 'superagent'

export const url = 'https://www.potterapi.com/v1/sortingHat'

export function sortingHat () {
  return request
    .get(url)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('the sorting hat hates you')
    })
}
