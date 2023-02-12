import RequestInterface from '../request.js';
import String from '@alirya/string/boolean/string.js';
import {ExistsParameters} from '@alirya/object/property/boolean/exists.js';
import Object_ from '@alirya/object/boolean/object.js';
import Enum from '@alirya/enum/boolean/enum.js';
import Method from '../method/enum/method.js';

export default function Request(value : object) : value is RequestInterface {

    if(!ExistsParameters(value, 'headers') || !Object_(value.headers)) {

        return false;
    }

    if(!ExistsParameters(value, 'path') || !String(value.path)) {

        return false;
    }

    if(!ExistsParameters(value, 'method') || !Enum(value.method, Method)) {

        return false;
    }

    return true;
}
