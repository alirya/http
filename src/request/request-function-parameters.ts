import Request from "./request";
import RequestFunctionParameter from "./request-function-parameter";

export default function  RequestClassParameters<
    Method extends string = string,
    Path extends string = string,
    Headers extends Record<string, string>|undefined = Record<string, string>|undefined,
    Body = unknown
> (
    method : Method,
    path : Path,
    headers ?: Headers,
    body ?: Body
) : Request<Method, Path, Headers extends undefined ? {} : Headers, Body> {

    return RequestFunctionParameter({
        method,
        path,
        headers,
        body
    }) as Request as Request<Method, Path, Headers extends undefined ? {} : Headers, Body>;
}


