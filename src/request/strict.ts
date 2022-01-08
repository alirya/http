import PathInterface from "./path/path";
import MethodInterface from "./method/method";
import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";
import StrictMethod from "./method/string/strict";

export default interface Strict<
    Method extends StrictMethod = StrictMethod,
    Path extends string = string,
    Headers extends  Record<string, string> = Record<string, string>,
    Body = unknown
> extends PathInterface<Path>, MethodInterface<Method>, HeaderInterface<Headers>, BodyInterface<Body> {}
