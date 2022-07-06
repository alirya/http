import FileName from './file-name.js';
import DefinitionName from './definition-name.js';


export type Type = {
    code : number|string,
    identifier : string
};

export default function ReplaceContent(content : string, search : Type, replace : Type) : string {

    const importS = FileName(search.identifier);
    const importR = FileName(replace.identifier);

    const codeS = search.code.toString();
    const codeR = replace.code.toString();

    const definitionS = DefinitionName(search.identifier);
    const definitionR = DefinitionName(replace.identifier);


    // file import
    content = content.replace(new RegExp(`\/${importS}`, 'g'), `\/${importR}`);
    content = content.replace(new RegExp(definitionS, 'g'), definitionR);
    content = content.replace(new RegExp(codeS, 'g'), codeR);

    return content;
}
