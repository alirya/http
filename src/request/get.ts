import Request from "./request";
import RequestClassParameters from "./request-class-parameters";
import Method from "./method/string/enum/method";
import PathInterface from "./path/path";
import HeaderInterface from "../headers/headers";

export default function Get<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.GET, Path, Headers, undefined> {

    return new RequestClassParameters(
        Method.GET,
        request.path,
        request.headers || {},
        undefined
    ) as Request<Method.GET, Path, Headers, undefined>;
}
