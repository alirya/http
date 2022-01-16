import SplitIdentifier from '../array/spliidentifier';
import UpperFirst from '@alirya/string/upper-first';


export default function FileName(string : string) : string {

    return SplitIdentifier(string).join('-');
}
