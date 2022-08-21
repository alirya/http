import Request from './request';
import Method from './method/enum/method';
import PathInterface from './path/path';
import HeaderInterface from '../headers/headers';
import BodyInterface from '../body/body';
import RequestCreate from './create';

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
