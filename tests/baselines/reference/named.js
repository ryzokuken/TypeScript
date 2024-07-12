//// [tests/cases/conformance/importDefer/named.ts] ////

//// [a.ts]
export function foo() {
    console.log("foo from a");
}

//// [b.ts]
import defer { foo } from "a";

foo();

//// [a.js]
export function foo() {
    console.log("foo from a");
}
//// [b.js]
import defer { foo } from "a";
foo();
