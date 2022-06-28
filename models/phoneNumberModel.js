import mongoose from 'mongoose';

const PhoneNumber = mongoose.model('PhoneNumber', {
  phone_number: String,
  phone_type: String,
  priority: String,
  confirmed_number: Boolean,
});

export default PhoneNumber;
