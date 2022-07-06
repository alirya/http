import Method from '../request/method/enum/method.js';
import Route from './route.js';
import RouteClass from './route-class.js';

export default function Patch<Path extends string>(
    path : Path
) : Route<Method.PATCH, Path> {

    return new RouteClass(Method.PATCH, path);
}

