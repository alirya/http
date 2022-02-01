import PathInterface from '../path/path';
import MethodInterface from '../method/method';

export default interface Route<
    Method extends string = string,
    Path extends string = string,
> extends PathInterface<Path>, MethodInterface<Method> {}
