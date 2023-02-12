import Request from './request.js';
import Method from './method/enum/method.js';
import PathInterface from './path/path.js';
import HeaderInterface from '../headers/headers.js';
import BodyInterface from '../body/body.js';
import RequestCreate from './create.js';

export default function Post<
    Body,
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & HeaderInterface<Headers> & BodyInterface<Body>,
) : Request<Method.POST, Path, Headers, Body> {

    return RequestCreate.Parameters(
        Method.POST,
        request.path,
        request.body,
        request.headers,
    ) as Request<Method.POST, Path, Headers, Body>;
}
