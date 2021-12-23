import Response from "./response";
import ExpectationFailedParameter from "./expectation-failed-parameter";
//
// /**
//  * standard message
//  */
// export default function ExpectationFailedParameters() : Response<417, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function ExpectationFailedParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<417, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function ExpectationFailedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     417,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function ExpectationFailedParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     417,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function ExpectationFailedParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    417,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return ExpectationFailedParameter({message, headers, body}) as Response as Response<
        417,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
