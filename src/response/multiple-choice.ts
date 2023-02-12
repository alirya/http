import Response from './response.js';
import {CreateParameter} from './create.js';

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

export type MultipleChoiceResponse<
    Body = unknown,
    Headers extends {} = {},
    Message extends string = string,
> = Response<Body, Headers, 300, Message>


export function MultipleChoiceParameter() : MultipleChoiceResponse<undefined>;

export function MultipleChoiceParameter<
    Body,
    Headers extends {} = {},
    Message extends string = string,
    >(
    response : Partial<Omit<MultipleChoiceResponse<Body, Headers, Message>, 'status'>>,
) : MultipleChoiceResponse<Body, Headers, Message>;

export function MultipleChoiceParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<MultipleChoiceResponse<Body, Headers, Message>, 'status'>> = {},
) : MultipleChoiceResponse<Body|undefined, Headers|{}, Message|string> {

    return CreateParameter({...response, status: 300}) as MultipleChoiceResponse<Body|undefined, Headers|{}, Message|string>;
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
