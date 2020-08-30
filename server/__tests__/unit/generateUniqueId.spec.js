const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate Unique Id function", () => {
    it("Should return a unique string", () => {
        expect(generateUniqueId()).not.toBe(generateUniqueId());
    })
    it("Should return a string of 8 chars", () => {
        expect(generateUniqueId()).toHaveLength(8);
    })
})