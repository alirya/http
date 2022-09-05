import Code from './status';
import StrictNumber from './number/strict';

export default interface Strict<
    CodeType extends StrictNumber = StrictNumber
> extends Code<CodeType> {

}
