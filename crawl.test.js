const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
    const input = "https://khanrayyan.com/somepath";
    const actual = normalizeURL(input);
    const expected = "khanrayyan.com/somepath";
    expect(actual).toEqual(expected);
})

test("normalizeURL strip trailing slash", () => {
    const input = "https://khanrayyan.com/somepath/";
    const actual = normalizeURL(input);
    const expected = "khanrayyan.com/somepath";
    expect(actual).toEqual(expected);
})

test("normalizeURL capitals", () => {
    const input = "https://KHANrayyan.com/somepath/";
    const actual = normalizeURL(input);
    const expected = "khanrayyan.com/somepath";
    expect(actual).toEqual(expected);
})

test("normalizeURL strip http", () => {
    const input = "http://KHANrayyan.com/somepath/";
    const actual = normalizeURL(input);
    const expected = "khanrayyan.com/somepath";
    expect(actual).toEqual(expected);
})
