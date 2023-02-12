import PathInterface from './path/path.js';
import MethodInterface from './method/method.js';
import HeaderInterface from '../headers/headers.js';
import BodyInterface from '../body/body.js';
import StrictMethod from './method/string/strict.js';

export default interface Strict<
    Method extends StrictMethod = StrictMethod,
    Path extends string = string,
    Headers extends  Record<string, string> = Record<string, string>,
    Body = unknown
> extends PathInterface<Path>, MethodInterface<Method>, HeaderInterface<Headers>, BodyInterface<Body> {}
