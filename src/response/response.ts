import HeaderInterface from '../headers/headers';
import BodyInterface from '../body/body';
import MessageInterface from '@alirya/message/message';
import CodeInterface from './status/status';

export default interface Response<
    Body = unknown,
    Headers extends Record<string, string> = Record<string, string>,
    Code extends number = number,
    Message extends string = string,
>  extends CodeInterface<Code>, MessageInterface<Message>, HeaderInterface<Headers>, BodyInterface<Body> {

}
