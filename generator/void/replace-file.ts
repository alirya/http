import ReplaceContent, {Type} from '../string/replace-content.js';
import * as Fs from 'fs';


export default function ReplaceFile(
    source : string,
    destination: string,
    search : Type,
    replace : Type
) {

    let data = Fs.readFileSync(source).toString();

    data = ReplaceContent(data, search, replace);

    Fs.writeFileSync(destination, data);
}
