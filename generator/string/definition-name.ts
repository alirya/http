import SplitIdentifier from '../array/split-identifier.js';
import UpperFirst from '@axiona/string/upper-first';


export default function DefinitionName(string : string) : string {

    return SplitIdentifier(string).map(s=>UpperFirst(s)).join('');
}
