import Response from '../response/response';
import BodyInterface from '../body/body';
import {HttpError} from 'http-errors';


export default interface Throwable extends HttpError, Partial<BodyInterface> {

    // httpCode: number;
    // previous?:Error;
}