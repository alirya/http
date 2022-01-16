import SplitIdentifier from "../array/spliidentifier";
import UpperFirst from "@alirya/string/upper-first";


export default function DefinitionName(string : string) : string {

    return SplitIdentifier(string).map(s=>UpperFirst(s)).join('');
}
