import SplitIdentifier from '../array/split-identifier.js';


export default function FileName(string : string) : string {

    return SplitIdentifier(string).join('-');
}
