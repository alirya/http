import PathInterface from "./path/path";
import MethodInterface from "./method/method";
import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";

export default interface Request<
    Method extends string = string,
    Path extends string = string,
    Headers extends  Record<string, string> = Record<string, string>,
    Body = unknown
> extends PathInterface<Path>, MethodInterface<Method>, HeaderInterface<Headers>, BodyInterface<Body> {}
