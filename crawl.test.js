import { normalizeURL, getURLsfromHTML } from "./crawl.js";
import { test, expect } from "@jest/globals";

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

test("getURLsFromHTML", () => {
    const inputHTMLBody = `
<html>
    <body>
        <a href="https://khanrayyan.com">
            Rayyan's Website
        </a>
    </body>
</html>
`;

    const inputBaseURL = "https://khanrayyan.com";
    const actual = getURLsfromHTML(inputHTMLBody, inputBaseURL);
    const expected = ["https://khanrayyan.com"];
    expect(actual).toEqual(expected);

})