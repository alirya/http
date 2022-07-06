import Request from './request.js';
import Method from './method/enum/method.js';
import PathInterface from './path/path.js';
import HeaderInterface from '../headers/headers.js';
import RequestCreate from './create.js';

export default function Head<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.HEAD, Path, Headers, undefined> {

    return RequestCreate.Parameters(
        Method.HEAD,
        request.path,
        request.headers,
        undefined
    ) as Request<Method.HEAD, Path, Headers, undefined>;
}
