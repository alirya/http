import Method from '../request/method/enum/method';
import Route from './route';
import RouteClass from './route-class';

export default function Patch<Path extends string>(
    path : Path
) : Route<Method.PATCH, Path> {

    return new RouteClass(Method.PATCH, path);
}

