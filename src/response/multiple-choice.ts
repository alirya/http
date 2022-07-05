import Response from './response';
import {CreateParameter} from './create';

export function MultipleChoiceParameters() : Response<300, string, {}, undefined>;

export function MultipleChoiceParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    300,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export function MultipleChoiceParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    300,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return MultipleChoiceParameter({message, headers, body}) as Response as Response<
        300,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}



export function MultipleChoiceParameter() : Response<300, string, {}, undefined>;

export function MultipleChoiceParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>>,
) : Response<300, Message, Headers, Body>;

export function MultipleChoiceParameter<
    Message extends string,
    Body,
    Headers extends {}
    >(
    response : Partial<Omit<Response<number, Message, Headers, Body>, 'code'>> = {},
) : Response<300, Message|string, Headers|{}, Body|undefined> {

    return CreateParameter({...response, code: 300}) as Response<300, Message|string, Headers|{}, Body|undefined>;
}




namespace MultipleChoice {
    export const Parameters = MultipleChoiceParameters;
    export const Parameter = MultipleChoiceParameter;
}
export default MultipleChoice;
