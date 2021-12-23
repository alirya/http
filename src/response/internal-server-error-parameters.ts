import Response from "./response";
import InternalServerErrorParameter from "./internal-server-error-parameter";
//
// /**
//  * standard message
//  */
// export default function InternalServerErrorParameters() : Response<500, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function InternalServerErrorParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<500, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function InternalServerErrorParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     500,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function InternalServerErrorParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     500,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function InternalServerErrorParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    500,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return InternalServerErrorParameter({message, headers, body}) as Response as Response<
        500,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
