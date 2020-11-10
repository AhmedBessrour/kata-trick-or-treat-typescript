import { trickOrTreat } from "./index";

const TRICK_OR_TREAT = 'Trick or treat!';
const THANK_YOU = 'Thank you, strange uncle!';

const CANDY = 'candy';
const APPLE = 'apple';
const BOMB = 'bomb';

describe('Given 1 child', () => {
  const numberOfChildren = 1;
  describe("and no candies", function() {
    it("Should return trick or treat", function() {
      const candiesPackets: Array<string[]> = [];
      assetResponseIsExpected(numberOfChildren, candiesPackets, TRICK_OR_TREAT);
    });
  });

  describe("and two candies", function() {
    it("Should return Thank you, strange uncle!", function() {
      const candiesPackets: Array<string[]> = [[CANDY, CANDY]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, THANK_YOU);
    });
  });

  describe("and two candies one bomb", function() {
    it("Should return trick or treat", function() {
      const candiesPackets: Array<string[]> = [[CANDY, CANDY, BOMB]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, TRICK_OR_TREAT);
    });
  });

  describe("and not enough candies in one packet", function() {
    it("Should return trick or treat", function() {
      const candiesPackets: Array<string[]> = [[CANDY]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, TRICK_OR_TREAT);
    });
  });

  describe("and not enough candies in one packet", function() {
    it("Should return trick or treat", function() {
      const candiesPackets: Array<string[]> = [[CANDY, APPLE]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, TRICK_OR_TREAT);
    });
  });
});

describe('Given 2 children', () => {
  const numberOfChildren = 2;
  describe("and one candies packet", function() {
    it("Should return trick or treat", function() {
      const candiesPackets: Array<string[]> = [[CANDY, CANDY]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, TRICK_OR_TREAT);
    });
  });

  describe("and all good candies packets", function() {
    it("Should return Thank you, strange uncle!", function() {
      const candiesPackets: Array<string[]> = [[CANDY, APPLE, CANDY], [CANDY, CANDY]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, THANK_YOU);
    });
  });

  describe("and not same candies number in packets", function() {
    it("Should return trick or treat", function() {
      const candiesPackets: Array<string[]> = [[CANDY, APPLE, CANDY], [CANDY, CANDY, CANDY]];
      assetResponseIsExpected(numberOfChildren, candiesPackets, TRICK_OR_TREAT);
    });
  });
})

const assetResponseIsExpected = (children: number, candiesPackets: Array<Array<string>>, expected: string) => {
  expect(trickOrTreat(children, candiesPackets)).toEqual(expected);
}
