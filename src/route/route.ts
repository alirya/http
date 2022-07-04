import PathInterface from '../request/path/path';
import MethodInterface from '../request/method/method';

export default interface Route<
    Method extends string = string,
    Path extends string = string,
> extends PathInterface<Path>, MethodInterface<Method> {}
