// import Throwable from '../throwable.js';
// import HttpError from '../http-error.js';
import {isHttpError} from 'http-errors';
import Throwable from '../throwable.js';


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