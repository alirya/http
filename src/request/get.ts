import Request from './request';
import Method from './method/enum/method';
import PathInterface from './path/path';
import HeaderInterface from '../headers/headers';
import RequestCreate from './create';

export default function Get<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.GET, Path, Headers, undefined> {

    return RequestCreate.Parameters(
        Method.GET,
        request.path,
        request.headers,
        undefined
    ) as Request<Method.GET, Path, Headers, undefined>;
}
