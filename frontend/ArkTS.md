# ArkTS

## TypeScript 快速入门

### 基础类型

1. `boolean` ----- 布尔值 `true`/`false`

2. `number` ----- 数字，支持十进制、二进制、八进制、十六进制（全都是浮点数）

3. `string` ----- 字符串 `''`/`""`

4. `[]` ---- 数组，如：`let list:number[] = [1, 2, 3]`

5. 元组：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

   如：

   ```ts
   let x:[string, number]; 
   x = ['hello', 10]; // OK
   x=[10, 'hello']; // Error
   ```

6. 枚举：
