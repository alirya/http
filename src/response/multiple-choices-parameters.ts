import Response from './response';
import MultipleChoicesParameter from './multiple-choices-parameter';

export default function MultipleChoicesParameters() : Response<300, string, {}, undefined>;

export default function MultipleChoicesParameters<
    Message extends string
>(
    message : Message,
) : Response<300, Message, {}, undefined>;


export default function MultipleChoicesParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
>(
    message : Message,
    headers : Headers,
) : Response<
    300,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    undefined
>;


export default function MultipleChoicesParameters<
    Message extends string|undefined,
    Headers extends Record<string, string>|undefined,
    Body
>(
    message : Message,
    headers : Headers,
    body : Body
) : Response<
    300,
    Message extends undefined ? string : Message,
    Headers extends undefined ? {} : Headers,
    Body
>;


export default function MultipleChoicesParameters<
    Message extends string,
    Headers extends Record<string, string>,
    Body
>(
    message ?: Message,
    headers ?: Headers,
    body ?: Body
) : Response<300> {

    return MultipleChoicesParameter({message, headers, body});
}
