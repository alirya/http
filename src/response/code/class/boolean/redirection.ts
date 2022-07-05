import {LowerParameters} from '@alirya/number/boolean/lower';
import {GreaterParameters} from '@alirya/number/boolean/greater';
/**
 * check if {@param code} is part of redirection http status code (3xx)
 *
 * @param code
 */
export default function Redirection (code : number) : boolean {

    return GreaterParameters(code, 300, true) && LowerParameters(code, 400, false);
}
