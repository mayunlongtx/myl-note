# 编写第一个单元测试

## Vitest的安装和使用
- 安装

```javascript
pnpm add -D vitest
```
```javascript
// package.json
{
  "scripts": {
    "test": "vitest"
  }
}
```
- 写测试
```javascript
// sum.js
export function sum(a, b) {
  return a + b
}
// sum.test.js
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

```
- 运行
```javascript
pnpm test
```
## 测试的基本结构
- 准备数据
- 执行
- 验证
- 拆卸
## 测试代码组织风格