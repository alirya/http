import Code from './code';
import StrictNumber from './number/strict';

export default interface Strict<
    CodeType extends StrictNumber = StrictNumber
> extends Code<CodeType> {

}
