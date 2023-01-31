import ResponseInterface from '../response';
import {ExistsParameters} from '@alirya/object/property/boolean/exists';
import Number from '@alirya/number/boolean/number';
import Message from '@alirya/message/boolean/message';
import String from '@alirya/string/boolean/string';
import Object_ from '@alirya/object/boolean/object';
import {isHttpError} from 'http-errors';

export default function Response(value : object) : value is ResponseInterface {

    return isHttpError(value);
    //
    // if(!Code(value) || !Number(value.status)) {
    //
    //     return false;
    // }
    //
    // if(!Message(value) || !String(value.message)) {
    //
    //     return false;
    // }
    //
    // if(!ExistsParameters(value, 'headers') || !Object_(value.headers)) {
    //
    //     return false;
    // }
    //
    // return true;
}
