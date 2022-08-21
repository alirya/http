import Request from './request';
import Method from './method/enum/method';
import PathInterface from './path/path';
import HeaderInterface from '../headers/headers';
import BodyInterface from '../body/body';
import RequestCreate from './create';

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
