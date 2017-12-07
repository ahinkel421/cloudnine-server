const mongoose = require('mongoose');

const loungeSchema = mongoose.Schema({
  name: {type: String, required:true},
  picture: {type: String, required: true},
  description: {type: String, required: true},
  briefDescription: {type: String, required: true},
  posts:[
    {
      content: {type: String, required: true},
      name: {type: String, required: false},
    }
  ]
});


loungeSchema.methods.apiRepr = function() {
  return {
    id: this._id,
    name: this.name,
    picture: this.picture,
    description: this.description,
    briefDescription: this.briefDescription,
    posts: this.posts
  };
}

const Lounge = mongoose.model('Lounge', loungeSchema);
module.exports = {Lounge};
