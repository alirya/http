import Method from '../request/method/enum/method';
import Route from './route';
import RouteClass from './route-class';

export default function Put<Path extends string>(
    path : Path
) : Route<Method.PUT, Path> {

    return new RouteClass(Method.PUT, path);
}

