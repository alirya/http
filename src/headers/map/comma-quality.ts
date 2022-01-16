import String from "@alirya/map/string/string-parameters";
import Mapper from "@alirya/map/mapper-parameters";

export default class CommaQuality extends Map<string, number> {

    set(key: string, value: number) : this {

        if(value > 1) {
            value = 1;
        }

        super.set(key.trim(), value);
        return this;
    }

    toString() : string {

        const mapped = Mapper(this, (k, v)=>[k, 'q=' + v.toString().slice(0, 4)]);
        return String(mapped, ',', ';');
    }
}
