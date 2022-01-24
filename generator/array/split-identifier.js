export default function SplitIdentifier(identifier) {
    return identifier
        .toLocaleLowerCase()
        .split(' ')
        .map(s => s.replace(/[^a-zA-Z]+/g, ''));
}
//# sourceMappingURL=split-identifier.js.map