import Response from "./response";
import PreconditionRequiredParameter from "./precondition-required-parameter";
//
// /**
//  * standard message
//  */
// export default function PreconditionRequiredParameters() : Response<428, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function PreconditionRequiredParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<428, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function PreconditionRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     428,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function PreconditionRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     428,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function PreconditionRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    428,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PreconditionRequiredParameter({message, headers, body}) as Response as Response<
        428,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
