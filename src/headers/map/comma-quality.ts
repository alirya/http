import {StringParameters} from '@axiona/map/string/string.js';
import {MapperParameters} from '@axiona/map/mapper.js';

export default class CommaQuality extends Map<string, number> {

    set(key: string, value: number) : this {

        if(value > 1) {
            value = 1;
        }

        super.set(key.trim(), value);
        return this;
    }

    toString() : string {

        const mapped = MapperParameters(this, (k, v)=>[k, 'q=' + v.toString().slice(0, 4)]);
        return StringParameters(mapped, ',', ';');
    }
}
