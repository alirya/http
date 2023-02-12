import Request from './request.js';
import Method from './method/enum/method.js';
import PathInterface from './path/path.js';
import HeaderInterface from '../headers/headers.js';
import BodyInterface from '../body/body.js';
import RequestCreate from './create.js';

export default function Patch<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>,
) : Request<Method.PATCH, Path, Headers, Body> {

    return RequestCreate.Parameters(
        Method.PATCH,
        request.path,
        request.body,
        request.headers,
    ) as Request<Method.PATCH, Path, Headers, Body>;
}
