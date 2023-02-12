import * as Fs from 'fs';
import {Type} from './string/replace-content.js';
import ReplaceFile from './void/replace-file.js';
import FileName from './string/file-name.js';
import Strict from '../dist/response/message/record/standard-strict.js';
import StrictString from '../dist/response/message/string/strict.js';
import StrictType from '../dist/response/code/number/strict.js';

const path = __dirname + '/../src/response';
const specPath = __dirname + '/../spec/response';
const src = path + '/ok';

const base : Type = {
    code : 200,
    identifier : StrictString(200)
};

for (const [codeR, message] of Object.entries(Strict()) as [StrictType|string, string][]) {

    console.log(`generating ${codeR} ${message}`);

    const replace = {
        code : codeR,
        identifier : StrictString(codeR as StrictType)
    };
        const fileName = FileName(replace.identifier);


    //for (const suffix of ['-parameter.ts', '-parameters.ts']) {

        // src
        ReplaceFile(
            src + '.ts',
            `${path}/${fileName}.ts`,
            base,
            replace
        );
    //}

    const infix = FileName(base.identifier);
    const root = `${specPath}/${infix}`;
    const specPaths = Fs.readdirSync(root);

    for (const file of specPaths) {

        const infixR = FileName(replace.identifier);

        const dir = [specPath, infixR].join('/');

        if(!Fs.existsSync(dir)) {

            Fs.mkdir(dir, {recursive: true}, function (error) {
                if (error) {
                    console.log(error);
                }
            });
        }

        ReplaceFile(
            [specPath, infix, file].join('/'),
            [specPath, infixR, file].join('/'),
            base,
            replace
        );
    }

}
