import Method from '../request/method/enum/method.js';
import Route from './route.js';
import RouteClass from './route-class.js';

export default function Post<Path extends string>(
    path : Path
) : Route<Method.POST, Path> {

    return new RouteClass(Method.POST, path);
}

