import { TextEncoder, TextDecoder } from "util";
import "@testing-library/jest-dom";
import fetch from "node-fetch";

global.fetch = fetch;
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
