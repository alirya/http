import {LowerParameters} from '@alirya/number/boolean/lower';
import {GreaterParameters} from '@alirya/number/boolean/greater';
/**
 * check if {@param status} is part of redirection http status status (3xx)
 *
 * @param status
 */
export default function Redirection (status : number) : boolean {

    return GreaterParameters(status, 300, true) && LowerParameters(status, 400, false);
}
