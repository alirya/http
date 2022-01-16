import HeaderInterface from "../headers/headers";
import BodyInterface from "../body/body";
import MessageInterface from "@alirya/message/message";
import CodeInterface from "@alirya/code/code";

export default interface Response<
    Code extends number = number,
    Message extends string = string,
    Headers extends Record<string, string> = Record<string, string>,
    Body = unknown
>  extends CodeInterface<Code>, MessageInterface<Message>, HeaderInterface<Headers>, BodyInterface<Body> {

}
