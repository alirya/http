import Method from '../request/method/enum/method.js';
import Route from './route.js';
import RouteClass from './route-class.js';

export default function Get<Path extends string>(
    path : Path
) : Route<Method.GET, Path> {

    return new RouteClass(Method.GET, path);
}

