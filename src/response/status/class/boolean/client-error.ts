import {LowerParameters} from '@alirya/number/boolean/lower';
import {GreaterParameters} from '@alirya/number/boolean/greater';
/**
 * check if {@param status} is part of client error http status status (4xx)
 *
 * @param status
 */
export default function ClientError(status : number) : boolean {

    return GreaterParameters(status, 400, true) && LowerParameters(status, 500, false);
}
