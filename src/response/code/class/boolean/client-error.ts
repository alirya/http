import {LowerParameters} from '@alirya/number/boolean/lower.js';
import {GreaterParameters} from '@alirya/number/boolean/greater.js';
/**
 * check if {@param code} is part of client error http status code (4xx)
 *
 * @param code
 */
export default function ClientError(code : number) : boolean {

    return GreaterParameters(code, 400, true) && LowerParameters(code, 500, false);
}
