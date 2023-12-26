import RequestInterface from '../request.js';
import String from '@axiona/string/boolean/string.js';
import {ExistsParameters} from '@axiona/object/property/boolean/exists.js';
import Object_ from '@axiona/object/boolean/object.js';
import Enum from '@axiona/enum/boolean/enum.js';
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
