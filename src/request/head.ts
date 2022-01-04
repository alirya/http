import Request from "./request";
import RequestClassParameters from "./request-class-parameters";
import Method from "./method/enum/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";

export default function Head<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.HEAD, Path, Headers, undefined> {

    return new RequestClassParameters(
        Method.HEAD,
        request.path,
        request.headers || {},
        undefined
    ) as Request<Method.HEAD, Path, Headers, undefined>;
}
