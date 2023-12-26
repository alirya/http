import {LowerParameters} from '@axiona/number/boolean/lower.js';
import {GreaterParameters} from '@axiona/number/boolean/greater.js';
/**
 * check if {@param status} is part of client error http status status (4xx)
 *
 * @param status
 */
export default function ClientError(status : number) : boolean {

    return GreaterParameters(status, 400, true) && LowerParameters(status, 500, false);
}

export {ClientError as IsClientError};
