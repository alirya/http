import Method from '../request/method/enum/method';
import Route from './route';
import RouteClass from './route-class';

export default function Get<Path extends string>(
    path : Path
) : Route<Method.GET, Path> {

    return new RouteClass(Method.GET, path);
}

