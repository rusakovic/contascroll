import {findSelectedContactIndex} from './utils';

describe('findSelectedContactIndex', () => {
  const USER_COUNT = 10;

  describe("when 'positionX' less than 'itemWidth' === first element in array", () => {
    it('should return 0', () => {
      const positionX = 200;
      const itemWidth = 500;

      expect(findSelectedContactIndex(positionX, itemWidth, USER_COUNT)).toBe(
        0,
      );
    });
  });
  describe("when 'positionX' greater than 'itemWidth' === last element in array", () => {
    it(`should return ${USER_COUNT - 1}`, () => {
      const positionX = 5000;
      const itemWidth = 200;

      expect(findSelectedContactIndex(positionX, itemWidth, USER_COUNT)).toBe(
        USER_COUNT - 1,
      );
    });
  });
  describe('when the contact is not first and not last element in array', () => {
    it('should return 2', () => {
      const positionX = 400;
      const itemWidth = 100;

      expect(findSelectedContactIndex(positionX, itemWidth, USER_COUNT)).toBe(
        4,
      );
    });
  });
});
