

export default function SplitIdentifier(identifier : string) : string[] {

    return identifier
        .toLocaleLowerCase()
        .split(' ')
        .map(s=>s.replace(/[^a-zA-Z]+/g, ''))
}
