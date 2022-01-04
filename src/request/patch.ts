import Request from "./request";
import RequestClassParameters from "./request-class-parameters";
import Method from "./method/enum/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";

export default function Patch<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>,
) : Request<Method.PATCH, Path, Headers, Body> {

    return new RequestClassParameters(
        Method.PATCH,
        request.path,
        request.headers || {},
        request.body
    );
}
