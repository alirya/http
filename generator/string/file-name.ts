import SplitIdentifier from '../array/split-identifier';
import UpperFirst from '@alirya/string/upper-first';


export default function FileName(string : string) : string {

    return SplitIdentifier(string).join('-');
}
