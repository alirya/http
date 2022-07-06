import {LowerParameters} from '@alirya/number/boolean/lower.js';
import {GreaterParameters} from '@alirya/number/boolean/greater.js';
/**
 * check if {@param code} is part of redirection http status code (3xx)
 *
 * @param code
 */
export default function Redirection (code : number) : boolean {

    return GreaterParameters(code, 300, true) && LowerParameters(code, 400, false);
}
