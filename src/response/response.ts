import HeaderInterface from '../headers/headers.js';
import BodyInterface from '../body/body.js';
import MessageInterface from '@alirya/message/message.js';
import CodeInterface from '@alirya/code/code.js';

export default interface Response<
    Code extends number = number,
    Message extends string = string,
    Headers extends Record<string, string> = Record<string, string>,
    Body = unknown
>  extends CodeInterface<Code>, MessageInterface<Message>, HeaderInterface<Headers>, BodyInterface<Body> {

}
