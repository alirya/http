import Response from './response';
import NonauthoritativeInformationParameter from './nonauthoritative-information-parameter';

export default function NonauthoritativeInformationParameters() : Response<203, string, {}, undefined>;

export default function NonauthoritativeInformationParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    203,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;

export default function NonauthoritativeInformationParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body = undefined
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<
    203,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
> {

    return NonauthoritativeInformationParameter({message, headers, body}) as Response as Response<
        203,
        Message extends undefined ? string : Message,
        Headers extends undefined ? {} : Headers,
        Body
    >;
}

