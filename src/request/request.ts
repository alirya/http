import HeaderInterface from '../headers/headers';
import BodyInterface from '../body/body';
import Route from './route/route';

export default interface Request<
    Method extends string = string,
    Path extends string = string,
    Headers extends  Record<string, string> = Record<string, string>,
    Body = unknown
> extends Route<Method, Path>, HeaderInterface<Headers>, BodyInterface<Body> {}
