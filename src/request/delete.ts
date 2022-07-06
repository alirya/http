import Request from './request.js';
import RequestCreate from './create.js';
import Method from './method/enum/method.js';
import PathInterface from './path/path.js';
import HeaderInterface from '../headers/headers.js';
import BodyInterface from '../body/body.js';

export default function Delete<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>,
) : Request<Method.DELETE, Path, Headers, Body> {

    return RequestCreate.Parameters(
        Method.DELETE,
        request.path,
        request.headers,
        request.body
    ) as Request<Method.DELETE, Path, Headers, Body>;
}

