import Response from "./response";
import TooManyRequestsParameter from "./too-many-requests-parameter";
//
// /**
//  * standard message
//  */
// export default function TooManyRequestsParameters() : Response<429, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function TooManyRequestsParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<429, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function TooManyRequestsParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     429,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function TooManyRequestsParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     429,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function TooManyRequestsParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    429,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return TooManyRequestsParameter({message, headers, body}) as Response as Response<
        429,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
