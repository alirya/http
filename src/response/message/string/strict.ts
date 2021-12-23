import StrictType from "../../code/codes/strict";
import StrictMessages from "../record/strict";

export default function Strict<Code extends keyof StrictType>(code : Code) : StrictType[Code] {

    return StrictMessages()[code];
}

