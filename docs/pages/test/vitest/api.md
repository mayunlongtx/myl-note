# Vitest Test Api

## test
- test.skip
::: warning 如果你想跳过运行某些测试，但又不想因为任何原因删除代码，你可以使用 test.skip 来避免运行它们。
:::
```javascript
import { assert, test } from 'vitest'

test.skip('skipped test', () => {
  // Test skipped, no error
  assert.equal(Math.sqrt(4), 3)
})
```
- test.only
::: warning 选择性地，你可以提供一个超时时间（以毫秒为单位），用于指定在终止之前等待的时间。默认值为5秒，并且可以通过testTimeout全局配置。
:::
```javascript
import { assert, test } from 'vitest'

test.only('test', () => {
  // Only this test (and others marked with only) are run
  assert.equal(Math.sqrt(4), 2)
})
```
- test.todo
::: warning 使用test.todo来存根以后要实现的测试。报告中会显示一个条目，以便您知道还有多少测试需要实现。
:::
```javascript
// An entry will be shown in the report for this test
test.todo('unimplemented test')
```
## describe
## 生命周期 hooks
- beforeAll / beforeEach钩子在Vitest中可以返回拆卸函数。因此，如果它们返回的是undefined或null之外的内容，你可能需要重新编写你的钩子声明。
## 断言
- 利用好框架的报错信息
- 类型
	- 单一结果断言
	- 确定结果断言
	- 预期异常断言
	- 相等性断言
	- 模糊相等性断言
- 实现原理
- 自定义断言