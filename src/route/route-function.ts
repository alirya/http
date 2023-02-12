import Route from './route.js';

export default function  RequestClassParameters<
    Method extends string = string,
    Path extends string = string,
> (
    method : Method,
    path : Path,
) : Route<Method, Path> {

    return {method, path};
}


