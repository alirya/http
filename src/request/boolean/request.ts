import RequestInterface from '../request';
import String from '@alirya/string/boolean/string';
import Property from '@alirya/object/property/boolean/exists';
import Object_ from '@alirya/object/boolean/object';
import Enum from '@alirya/enum/boolean/enum';
import Method from '../method/enum/method';

export default function Request(value : object) : value is RequestInterface {

    if(!Property(value, 'headers') || !Object_(value.headers)) {

        return false;
    }

    if(!Property(value, 'path') || !String(value.path)) {

        return false;
    }

    if(!Property(value, 'method') || !Enum(value.method, Method)) {

        return false;
    }

    return true;
}
