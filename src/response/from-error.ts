import Response from './response';
import Throwable from '../throwable/boolean/throwable';
import {CreateParameter} from './create';
import {PickParameters} from '@alirya/object/pick';
import {InternalServerErrorParameters} from './internal-server-error';

export default function FromError(error : Error) : Response {

    if(Throwable(error)) {

        if(error.body) {

            return CreateParameter(PickParameters(error, 'body', 'status'));
        }

        if(error.expose) {

            return CreateParameter({
                body: error.message,
                status: error.status,
            });
        }

        return CreateParameter({
            status: error.status,
        });
    }

    return InternalServerErrorParameters();
}