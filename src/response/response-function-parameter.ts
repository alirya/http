import Response from './response';
import MessageCode from './message/string/strict';
import StrictNumber from './code/number/strict';
import InferHeader from '../headers/record/infer';
import InferBody from '../body/value/infer';
import {Object} from 'ts-toolbelt';
import StrictOmit from '@alirya/object/strict-omit';
import InferMessage from '@alirya/message/message/infer';
import InferCode from '@alirya/code/code/infer';
import {Optional} from 'utility-types';


/**
 * strict code auto generated message
 *
 * @param response
 */
export default function ResponseFunctionParameter<
    ResponseType extends Pick<Response<StrictNumber>, 'code'> & Optional<StrictOmit<Response, 'code'>, 'headers'|'body'|'message'>,
>(
    response : ResponseType,
) : Response<
    InferCode<ResponseType>,
    string,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

/**
 * custom code with custom message
 *
 * @param response
 */
export default function ResponseFunctionParameter<
    ResponseType extends Pick<Response, 'code'> & Optional<StrictOmit<Response, 'code'>, 'headers'|'body'>,
>(
    response : Response
) :  Response<
    InferCode<ResponseType>,
    InferMessage<ResponseType>,
    InferHeader<ResponseType> extends never ? {} : InferHeader<ResponseType>,
    InferBody<ResponseType> extends never ? undefined : InferBody<ResponseType>
>;

export default function ResponseFunctionParameter<
    ResponseType extends Response,
>(
    response : Response|Object.Optional<Response, 'message'>,

) : Response {

    if(!response.message) {

        response.message = MessageCode(response.code as StrictNumber);
    }

    if(!response.headers) {

        response.headers = {};
    }

    return response as Response;
}


