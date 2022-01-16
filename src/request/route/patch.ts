import Method from '../method/enum/method';
import Route from './route';
import RequestClass from './requesclass';

export default function Patch<Path extends string>(
    path : Path
) : Route<Method.PATCH, Path> {

    return new RequestClass(Method.PATCH, path);
}

