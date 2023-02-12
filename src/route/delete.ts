import Method from '../request/method/enum/method.js';
import Route from './route.js';
import RouteClass from './route-class.js';

export default function Delete<Path extends string>(
    path : Path
) : Route<Method.DELETE, Path> {

    return new RouteClass(Method.DELETE, path);
}

