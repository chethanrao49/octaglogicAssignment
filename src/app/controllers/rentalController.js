import { response } from 'express';
import * as Yup from 'yup';

import Car from '../models/Car';

class RentalController {
//Rental Controller
  async index(req, res) {
    try {
      const schema = Yup.object().shape({
        carType: Yup.string(),
        rentalDays: Yup.number(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }

      const premiumFee = 1000;
      const regularFee = 500;

        const { carType, rentalDays } = req.body;

        if (carType==="SUV") {
          let data = (premiumFee*rentalDays);
          res.status(201).send({ success: true, data })
        }
        else if (carType==="Sedan") {
          if (rentalDays<=3) {
            let data = (regularFee*1);
            res.status(201).send({ success: true, data })
          } else {
            let overThreeDays = (rentalDays-3);
            let data = (overThreeDays*regularFee)+(regularFee);
            res.status(201).send({ success: true, data })

          }
        }
        else if (carType==="Hatchback") {
          if (rentalDays<=5) {
            let data = (regularFee*1);
            res.status(201).send({ success: true, data })
          } else {
            let overFiveDays = (rentalDays-5);
            let data = (overFiveDays*regularFee)+(regularFee);
            res.status(201).send({ success: true, data })
          }
        }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
}

export default new RentalController();
