const { users, posts: post } = require('./data');

const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {

    const user = users.filter(user => user.id === id)[0]
    cb(user);
  }, 150)
}

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = post.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}

module.exports = {
  getUserById,
  getPostsForUser
}
