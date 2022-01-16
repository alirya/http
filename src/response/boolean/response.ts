import ResponseInterface from "../response";
import Property from "@alirya/object/property/boolean/exists";
import Number from "@alirya/number/boolean/number";
import Code from "@alirya/code/boolean/code";
import Message from "@alirya/message/boolean/message";
import String from "@alirya/string/boolean/string";
import Object_ from "@alirya/object/boolean/object";

export default function Response(value : object) : value is ResponseInterface {

    if(!Code(value) || !Number(value.code)) {

        return false;
    }

    if(!Message(value) || !String(value.message)) {

        return false;
    }

    if(!Property(value, 'headers') || !Object_(value.headers)) {

        return false;
    }

    return true;
}
