import RequestInterface from "../request";
import String from "@dikac/t-string/boolean/string";
import Property from "@dikac/t-object/property/boolean/exists";
import Object_ from "@dikac/t-object/boolean/object";
import Enum from "@dikac/t-enum/boolean/enum";
import Method from "../method/string/enum/method";

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
