const User = require('./User');
const Books = require('./books');
const Reviews = require('./reviews')

// This all may be need to altered to 
User.hasMany(Books, {
  foreignKey: 'user_id'
});

User.hasMany(Reviews, {
  foreignKey: 'user_id',
});

Books.belongsTo(User, {
  foreignKey: 'user_id'
});

Books.hasMany(Reviews, {
  foreignKey: 'book_id'
});

Reviews.belongsTo(User, {
  foreignKey: 'user_id'
});

Reviews.belongsTo(Books, {
  foreignKey: 'book_id'
})
// changed books to book, but may need to alter different file, is this causing review issues?

module.exports = { User, Books, Reviews };
