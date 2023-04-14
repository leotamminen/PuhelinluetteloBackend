const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

const listWithOneBlog = [
  {
    'title': 'Jees',
    'author': 'Jussi',
    'url': 'http://localhost:3001',
    'likes': 41
  }
]

const manyBlogs = [
  {
    'title': 'Blogipostaus',
    'author': 'Eetu',
    'url': 'http://localhost:3003/api/blogs',
    'likes': 90
  },
  {
    'title': 'ESLint',
    'author': 'Jaakko',
    'url': 'https://jastpa.utugit.fi/webprog/osa3/validointi_ja_es_lint',
    'likes': 7
  },
  {
    'title': 'Oispa',
    'author': 'Aatu',
    'url': 'https://oispa.kievinkanaa.com/',
    'likes': 27
  },
  {
    'title': 'Fullstack',
    'author': 'Iivari',
    'url': 'https://jastpa.utugit.fi/webprog/osa4/sovelluksen_rakenne_ja_testauksen_alkeet',
    'likes': 16
  }
]

describe('totalLikes', () => {
  test('of empty list returns zero', () => {
    expect(listHelper.totalLikes([])).toBe(0)
  })

  test('of one blog is the value likes in the blog itself', () => {
    expect(listHelper.totalLikes(listWithOneBlog)).toBe(41)
  })

  test('of many blogs is calculated right', () => {
    expect(listHelper.totalLikes(manyBlogs)).toBe(140)
  })
})
