const Comment = require("./Comment");
const Post = require("./Post");
const User = require("./User");

User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  // constraints: false
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  // constraints: false
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Comment, Post, User };
