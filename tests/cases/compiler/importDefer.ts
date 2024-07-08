// @module: ESNext
// @Filename: a.ts
export function a() {
    console.log("a from a");
}

// @Filename: b.ts
import defer * as bNs from "b";

bNs.a();