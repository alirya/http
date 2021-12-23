import SplitIdentifier from "../array/split-identifier";
import UpperFirst from "@dikac/t-string/upper-first";


export default function DefinitionName(string : string) : string {

    return SplitIdentifier(string).map(s=>UpperFirst(s)).join('');
}
