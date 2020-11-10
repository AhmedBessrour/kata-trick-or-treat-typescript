enum ResponseTypes {
  TRICK_OR_TREAT = 'Trick or treat!',
  THANK_YOU = 'Thank you, strange uncle!'
}

enum CandiesTypes {
  BOMB = 'bomb',
  CANDY = 'candy'
};

const MIN_MANDATORY_CANDIES = 2;

export function trickOrTreat(numberOfChildren: number, candiesPackets: Array<Array<string>>): string {
  return isTrickOrTreat(numberOfChildren, candiesPackets)
    ? ResponseTypes.TRICK_OR_TREAT
    : ResponseTypes.THANK_YOU;
}

function isTrickOrTreat(numberOfChildren: number, candiesPackets: Array<Array<string>>) {
  const numberOfPackets = candiesPackets.length;
  return numberOfPackets < numberOfChildren || isInvalid(candiesPackets);
}

function isInvalid(candiesPackets: Array<Array<string>>) {
  return hasBomb(candiesPackets) ||
    onePacketIsInsufficient(candiesPackets) ||
    notSameCandiesNumber(candiesPackets);
}

function hasBomb(candiesPackets: Array<Array<string>>): boolean {
  return candiesPackets.some(item => item.some(item => item === CandiesTypes.BOMB));
}

function onePacketIsInsufficient(candiesPackets: Array<Array<string>>) {
  return candiesPackets.some(item => countCandies(item) < MIN_MANDATORY_CANDIES);
}

function notSameCandiesNumber(candiesPacket: Array<string[]>) {
  return !candiesPacket.map(elem => countCandies(elem))
    .every((val, i, arr) => val === arr[0])
}

function countCandies(candiesPacket: Array<string>) {
  return candiesPacket.filter(item => item === CandiesTypes.CANDY).length;
}
