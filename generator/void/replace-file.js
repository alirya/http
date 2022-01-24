import ReplaceContent from '../string/replace-content';
import * as Fs from 'fs';
export default function ReplaceFile(source, destination, search, replace) {
    let data = Fs.readFileSync(source).toString();
    data = ReplaceContent(data, search, replace);
    Fs.writeFileSync(destination, data);
}
//# sourceMappingURL=replace-file.js.map