import Lower from '@alirya/number/boolean/lower-parameters';
import Greater from '@alirya/number/boolean/greater-parameters';
/**
 * check if {@param code} is part of informational http status code (1xx)
 *
 * @param code
 */
export default function Informational(code : number) : boolean {

    return Greater(code, 100, true) && Lower(code, 200, false);
}
