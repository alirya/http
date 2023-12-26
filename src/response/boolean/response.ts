import ResponseInterface from '../response.js';
import {ExistsParameters} from '@axiona/object/property/boolean/exists.js';
import Message from '@axiona/message/boolean/message.js';
import String from '@axiona/string/boolean/string.js';
import Object_ from '@axiona/object/boolean/object.js';
import {IsStatus} from '../status/boolean/status.js';

export default function Response(value : object) : value is ResponseInterface {

    if(!IsStatus(value)) {

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
