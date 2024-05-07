Reply to explain and reproduce the issue quokka-949

```
$cd services/mindlerapi ‹3.1.2› ‹main*› 
$ npm i
$ npm run repl

> mindlerapi@0.5.0 repl
> NODE_ENV=local npx ts-node -r tsconfig-paths/register src/procedures/application/repl.ts

dal
```

quokka error Output in VsCode on Cmd-K Q in repl.ts:

```
​​​​​Quokka PRO 'repl.ts' (node: v18.17.1, TypeScript: v5.4.5 + swc)​​​​

​Install "@dal/db" package for the current quokka file​
​Install "@dal/db" package into the project​
 
Cannot find module '@dal/db' 
Require stack: 
- <rootDir>/src/procedures/application/repl.js 
  ​​​​​at ​​​​​​​​Proxy.Module._resolveFilename​​​ ​./node_modules/tsconfig-paths/src/register.ts:115​
  ​​​​​at ​​​​​​services/mindlerapi/src/procedures/application/repl.ts:1:1​
```
