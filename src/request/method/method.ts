import RequestMethod from "../method/method/method";

export default interface Method<
    Method extends string = string
> {
    method : Method;
}
