import { sum } from "../scripts/functions.js";
describe("Tests of Sum functions", () =>
{

    test('Sum of 1,1 equal 2', () =>
    {
        expect(sum(1, 1)).toBe(2)
    })
    test('Sum of 3,1 equal 4', () =>
    {
        expect(sum(3, 1)).toBe(4)
    })
    test('Sum of 5,-1 equal 2', () =>
    {
        expect(sum(5, -1)).toBe(4)
    })
    test('Sum of -1,1 equal 0', () =>
    {
        expect(sum(-1, 1)).toBe(0)
    })
})