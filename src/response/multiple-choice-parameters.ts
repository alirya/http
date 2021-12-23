import Response from "./response";
import MultipleChoiceParameter from "./multiple-choice-parameter";
//
// /**
//  * standard message
//  */
// export default function MultipleChoiceParameters() : Response<300, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function MultipleChoiceParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<300, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function MultipleChoiceParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     300,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function MultipleChoiceParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     300,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function MultipleChoiceParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
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
