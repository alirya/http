export default function CommaQualityFromString(value: string) : Map<string, number> {

    const splits : [string, number][] = value.split(',').map(value=>{

        const parts = value.split(';', 2);
        let quality: number;

        if(parts[1]) {

            const temp : string = parts[1];
            const value : string = temp.split('=', 2).pop() as string;

            quality = parseFloat(value.trim());

        } else {

            quality = 1;
        }

        return [parts[0].trim(), quality];
    });

    const sorted = splits.sort(([, v1], [, v2])=>v1-v2);

    return new Map<string, number>(sorted);
}
