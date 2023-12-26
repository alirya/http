import Response from './response.js';
import Throwable from '../throwable/boolean/throwable.js';
import {CreateParameter} from './create.js';
import {PickParameters} from '@axiona/object/pick.js';
import {InternalServerErrorParameters} from './internal-server-error.js';

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
