import Request from './request';
import RequestClass from './request-class';
import Method from './method/enum/method';
import PathInterface from './path/path';
import HeaderInterface from '../headers/headers';

export default function Head<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.HEAD, Path, Headers, undefined> {

    return new RequestClass(
        Method.HEAD,
        request.path,
        request.headers || {},
        undefined
    ) as Request<Method.HEAD, Path, Headers, undefined>;
}
