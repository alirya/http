import StrictType from '../record/strict';
import StrictMessages from '../record/standard-strict';

export default function Strict<Code extends keyof StrictType>(status : Code) : StrictType[Code] {

    return StrictMessages()[status];
}
