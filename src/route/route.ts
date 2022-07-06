import PathInterface from '../request/path/path.js';
import MethodInterface from '../request/method/method.js';

export default interface Route<
    Method extends string = string,
    Path extends string = string,
> extends PathInterface<Path>, MethodInterface<Method> {}
