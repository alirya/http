// import Throwable from '../throwable';
import Integer from '@alirya/number/boolean/integer';
// import HttpError from '../http-error';
import {HttpError, isHttpError} from 'http-errors';
import Throwable from '../throwable';


export default function Throwable(error: globalThis.Error) : error is Throwable {

    return isHttpError(error);

    // if(error instanceof HttpError) {
    //
    //     return true;
    // }
    //
    // if(!(error instanceof globalThis.Error)) {
    //
    //     return false;
    // }
    //
    // if(Integer((error as Throwable).httpCode)) {
    //
    //     return true;
    // }
    //
    // return false;
}