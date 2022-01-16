import Request from "./request";
import RequestClass from "./requesclass";
import Method from "./method/enum/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";

export default function Post<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>,
) : Request<Method.POST, Path, Headers, Body> {

    return new RequestClass(
        Method.POST,
        request.path,
        request.headers || {},
        request.body
    );
}
