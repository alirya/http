import Request from './request';
import RequestCreate from './create';
import Method from './method/enum/method';
import PathInterface from './path/path';
import HeaderInterface from '../headers/headers';
import BodyInterface from '../body/body';

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
        request.body,
        request.headers,
    ) as Request<Method.DELETE, Path, Headers, Body>;
}

