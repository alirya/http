import Method from '../request/method/enum/method';
import Route from './route';
import RouteClass from './route-class';

export default function Post<Path extends string>(
    path : Path
) : Route<Method.POST, Path> {

    return new RouteClass(Method.POST, path);
}

