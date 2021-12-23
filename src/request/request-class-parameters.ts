import Request from "./request";

export default class RequestClassParameters<
    Method extends string = string,
    Path extends string = string,
    Headers extends Record<string, string> = Record<string, string>,
    Body = unknown
> implements Request<Method, Path, Headers, Body> {

    constructor(
        public method : Method,
        public path : Path,
        public headers : Headers,
        public body : Body
    ) {}
}
