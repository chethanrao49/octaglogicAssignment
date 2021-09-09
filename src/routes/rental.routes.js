import { Router } from 'express';

//@Importing Car Controller
import RentalController from '../app/controllers/RentalController';
const rental = new Router();

//User public route//
//No token required
/**----------------------------------------------------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------------------------------------------------*/
rental.post(
  '/rentalCal',
  RentalController.index); //Find all cars
/**----------------------------------------------------------------------------------------------------------------------*/
/**----------------------------------------------------------------------------------------------------------------------*/
export default rental;
