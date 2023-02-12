import BodyInterface from '../body/body.js';
import {HttpError} from 'http-errors';


export default interface Throwable extends HttpError, Partial<BodyInterface> {

    // httpCode: number;
    // previous?:Error;
}