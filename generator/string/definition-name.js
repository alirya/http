import SplitIdentifier from '../array/split-identifier.js';
import UpperFirst from '@alirya/string/upper-first';
export default function DefinitionName(string) {
    return SplitIdentifier(string).map(s => UpperFirst(s)).join('');
}
//# sourceMappingURL=definition-name.js.map