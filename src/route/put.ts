import Method from '../request/method/enum/method.js';
import Route from './route.js';
import RouteClass from './route-class.js';

export default function Put<Path extends string>(
    path : Path
) : Route<Method.PUT, Path> {

    return new RouteClass(Method.PUT, path);
}

