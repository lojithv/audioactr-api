import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: String, // String is shorthand for {type: String}
  lastname: String,
  email: String,
  password: String,
  createdDate: { type: Date, default: Date.now },
  userType:{type: mongoose.Schema.Types.ObjectId, ref: 'UserRole'},
});

// compile our model
const User = mongoose.model('User', userSchema);
export default User;