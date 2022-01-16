import Response from './response';
import ResponseFunctionParameter from './response-function-parameter';
import {Optional} from 'utility-types';
import StrictOmit from '@alirya/object/strict-omit';
import InferMessage from '@alirya/message/message/infer';
import InferHeader from '../headers/record/infer';
import InferBody from '../body/value/infer';

export default function MultipleChoicesParameter<
    ResponseType extends Optional<StrictOmit<Response, 'code'>, 'headers'|'body'|'message'>,
>(
    response : ResponseType ,
) : Response<
    300,
    string,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

export default function MultipleChoicesParameter<
    ResponseType extends Optional<StrictOmit<Response, 'code'>, 'headers'|'body'>,
>(
    response : ResponseType ,
) : Response<
    300,
    InferMessage<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

export default function MultipleChoicesParameter<
    ResponseType extends Optional<StrictOmit<Response, 'code'>, 'headers'|'body'>,
>(
    response : ResponseType|{} = {},
) : Response<300> {

    return ResponseFunctionParameter({...response, code: 300});
}
