import HeaderInterface from '../headers/headers.js';
import BodyInterface from '../body/body.js';
import MessageInterface from '@alirya/message/message.js';
import CodeInterface from './status/status.js';

export default interface Response<
    Body = unknown,
    Headers extends Record<string, string> = Record<string, string>,
    Code extends number = number,
    Message extends string = string,
>  extends CodeInterface<Code>, MessageInterface<Message>, HeaderInterface<Headers>, BodyInterface<Body> {

}
