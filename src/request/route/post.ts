import Method from '../method/enum/method';
import Route from './route';
import RequestClass from './request-class';

export default function Post<Path extends string>(
    path : Path
) : Route<Method.POST, Path> {

    return new RequestClass(Method.POST, path);
}

