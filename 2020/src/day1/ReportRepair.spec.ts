import { getThreeIndices } from "./ReportRepair"

describe('ReportRepair', () => {

  describe('getThreeIndices', () => {
    it('should get three indices matching the test data from aoc', () => {
      const data = ['1721', '979', '366', '299', '675', '1456'];
      const indices = [1, 2, 4];
      const { i, j, k } = getThreeIndices(data);
      expect(indices.includes(i)).toBe(true);
      expect(indices.includes(j)).toBe(true);
      expect(indices.includes(k)).toBe(true);
    })
  })
})
