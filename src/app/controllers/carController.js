import Car from '../models/Car';

class CarController {
//Find all cars
  async index1(req, res) {
    try {
      const cars = await Car.find()
      .lean()
      res.status(201).send({ success: true, cars });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  //Find all avaliable cars
  async index2(req, res) {
    try {
      const cars = await Car.find({
        avaliable: true
      })
      .lean()
      res.status(201).send({ success: true, cars });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

}

export default new CarController();
