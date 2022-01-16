import Request from './request';
import RequestClass from './requesclass';
import Method from './method/enum/method';
import PathInterface from './path/path';
import HeaderInterface from '../headers/headers';

export default function Get<
    Path extends string,
    Headers extends Record<string, string>
>(
    request : PathInterface<Path> & Partial<HeaderInterface<Headers>>,
) : Request<Method.GET, Path, Headers, undefined> {

    return new RequestClass(
        Method.GET,
        request.path,
        request.headers || {},
        undefined
    ) as Request<Method.GET, Path, Headers, undefined>;
}
