// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { TextEncoder, TextDecoder } from "util";
import "@testing-library/jest-dom";
import fetchMock from "jest-fetch-mock";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
fetchMock.enableMocks();
