import { test } from "node:test";
import assert from "node:assert/strict";
test("deliberately failing", () => assert.equal(1 + 1, 3));
