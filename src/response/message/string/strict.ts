import StrictType from '../record/strict.js';
import StrictMessages from '../record/standard-strict.js';

export default function Strict<Code extends keyof StrictType>(status : Code) : StrictType[Code] {

    return StrictMessages()[status];
}
