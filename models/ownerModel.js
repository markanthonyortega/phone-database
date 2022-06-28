import mongoose from 'mongoose';

const Owner = mongoose.model('Owner', {
  name: String,
  email: String,
});
export default Owner;
