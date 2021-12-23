import StrictType from "../record/strict";
import StrictMessages from "../record/standard-strict";

export default function Strict<Code extends keyof StrictType>(code : Code) : StrictType[Code] {

    return StrictMessages()[code];
}
