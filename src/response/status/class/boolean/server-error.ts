import {LowerParameters} from '@alirya/number/boolean/lower.js';
import {GreaterParameters} from '@alirya/number/boolean/greater.js';
/**
 * check if {@param status} is part of server error http status status (5xx)
 *
 * @param status
 */
export default function ServerError(status : number) : boolean {

    return GreaterParameters(status, 500, true) && LowerParameters(status, 600, false);
}

export {ServerError as IsServerError};