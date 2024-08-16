const allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*() `-=[]\\;\',./~_+{}|:"<>?';
const charMap = new Map();
allChars.split('').forEach((char, index) => charMap.set(char, index));

export function Shift(shift: number, char: string, direction: number) {
    const length: number = allChars.length;
    let index = charMap.get(char);

    if(index === undefined) return char;
    if( direction === 0)
        index = (index + shift) % length;
    else if (direction === 1)
        index = ( index - shift + length) % length;

    return allChars[index];
}

export function Encode(shift: number, input: string) {
    return input.split('').map(char => Shift(shift, char, 0)).join('');
}

export function Decode(shift: number, input: string) {
    return input.split('').map(char => Shift(shift, char, 1)).join('');
}

export default allChars;