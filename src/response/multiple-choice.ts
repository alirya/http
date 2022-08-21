import Response from './response';
import {CreateParameter} from './create';

export function MultipleChoiceParameters() : MultipleChoiceResponse<undefined>;

export function MultipleChoiceParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MultipleChoiceResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
>;

export function MultipleChoiceParameters<
    Body = undefined,
    Headers extends {} = {},
    Message extends string = string,
>(
    body ?: Body,
    headers ?: Headers,
    message ?: Message,
) : MultipleChoiceResponse<
    Body,
    Headers extends undefined ? {} : Headers,
    Message extends undefined ? string : Message
> {

    return MultipleChoiceParameter({message, headers, body}) as MultipleChoiceResponse as MultipleChoiceResponse<
        Body,
        Headers extends undefined ? {} : Headers,
        Message extends undefined ? string : Message
    >;
}

export interface MultipleChoiceResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> extends Response<Body, Headers, 300, Message> {

}


export function MultipleChoiceParameter() : MultipleChoiceResponse<undefined>;

export function MultipleChoiceParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<MultipleChoiceResponse<Body, Headers, Message>, 'code'>>,
) : MultipleChoiceResponse<Body, Headers, Message>;

export function MultipleChoiceParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<MultipleChoiceResponse<Body, Headers, Message>, 'code'>> = {},
) : MultipleChoiceResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, code: 300}) as MultipleChoiceResponse<Body|undefined, Headers|{}, Message|string>;
}




namespace MultipleChoice {
    export const Parameters = MultipleChoiceParameters;
    export const Parameter = MultipleChoiceParameter;
    export type Response<
        Body = unknown,
        Headers extends {} = {},
        Message extends string = string,
    > = MultipleChoiceResponse<
        Body,
        Headers,
        Message
    >;
}
export default MultipleChoice;
