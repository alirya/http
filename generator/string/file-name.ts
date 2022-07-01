import SplitIdentifier from '../array/split-identifier';


export default function FileName(string : string) : string {

    return SplitIdentifier(string).join('-');
}
