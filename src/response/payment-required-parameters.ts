import Response from "./response";
import PaymentRequiredParameter from "./payment-required-parameter";
//
// /**
//  * standard message
//  */
// export default function PaymentRequiredParameters() : Response<402, string, {}, undefined>;
//
// /**
//  * custom message
//  */
// export default function PaymentRequiredParameters<
//     Message extends string
// >(
//     message : Message,
// ) : Response<402, Message, {}, undefined>;
//
// /**
//  * optional custom message with header
//  */
// export default function PaymentRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
// >(
//     message : Message,
//     headers : Headers,
// ) : Response<
//     402,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     undefined
// >;

//
// export default function PaymentRequiredParameters<
//     Message extends string|undefined,
//     Headers extends Record<string, string>|undefined,
//     Body = undefined
// >(
//     message ?: Message,
//     headers ?: Headers,
//     body ?: Body
// ) : Response<
//     402,
//     Message extends undefined ? string : Message,
//     Headers extends undefined ? {} : Headers,
//     Body
// >;


export default function PaymentRequiredParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message : Message,
    headers : Headers,
    body ?: Body
) : Response<
    402,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return PaymentRequiredParameter({message, headers, body}) as Response as Response<
        402,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}
