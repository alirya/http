import ResponseInterface from '../response.js';
import {ExistsParameters} from '@alirya/object/property/boolean/exists.js';
import Number from '@alirya/number/boolean/number.js';
import Code from '@alirya/code/boolean/code.js';
import Message from '@alirya/message/boolean/message.js';
import String from '@alirya/string/boolean/string.js';
import Object_ from '@alirya/object/boolean/object.js';

export default function Response(value : object) : value is ResponseInterface {

    if(!Code(value) || !Number(value.code)) {

        return false;
    }

    if(!Message(value) || !String(value.message)) {

        return false;
    }

    if(!ExistsParameters(value, 'headers') || !Object_(value.headers)) {

        return false;
    }

    return true;
}
