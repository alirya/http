import Route from './route';

export default class RouteClass<
    Method extends string = string,
    Path extends string = string,
> implements Route<Method, Path> {

    constructor(
        public method : Method,
        public path : Path,
    ) {}
}
