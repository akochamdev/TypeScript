// @Filename: declarations.d.ts
declare module "foo*" {
    export function foo(n: number): void;
}

// @Filename: user.ts
///<reference path="declarations.d.ts" />
import {foo} from "foobar";
foo(0);
