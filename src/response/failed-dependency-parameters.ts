import Response from "./response";
import FailedDependencyParameter from "./failed-dependency-parameter";
//
// /**
//  * standard message
//  */
// export default function FailedDependencyParameters() : Response<424, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function FailedDependencyParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<424, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function FailedDependencyParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     424,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function FailedDependencyParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     424,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function FailedDependencyParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    424,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return FailedDependencyParameter({message, headers, body}) as Response as Response<
        424,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
