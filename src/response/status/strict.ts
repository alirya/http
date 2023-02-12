import Code from './status.js';
import StrictNumber from './number/strict.js';

export default interface Strict<
    CodeType extends StrictNumber = StrictNumber
> extends Code<CodeType> {

}
