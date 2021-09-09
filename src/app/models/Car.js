import mongoose from 'mongoose';

mongoose.Promise = global.Promise; //Legacy code

var Schema = mongoose.Schema;

const carsSchema = new Schema(
  {
    carType: {
      type: String
    },
    avaliable: {
      type: Boolean
    }
  }
)

  module.exports = mongoose.model('Car', carsSchema);
