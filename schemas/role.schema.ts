import mongoose from 'mongoose';
const { Schema } = mongoose;

const userRoleSchema = new Schema({
  role:String,
});

// compile our model
const UserRole = mongoose.model('Role', userRoleSchema);
export default UserRole;