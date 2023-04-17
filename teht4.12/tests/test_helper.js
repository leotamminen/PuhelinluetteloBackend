const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Testaus',
    author: 'Elkku',
    url: 'https://jastpa.utugit.fi/webprog/osa4/backendin_testaaminen/',
    likes: 52,
  },
  {
    title: 'Mongodb',
    author: 'Pekka',
    url: 'https://cloud.mongodb.com/',
    likes: 29,
  },
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon', author: 'Kalle' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb,
}