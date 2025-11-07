# Markdown 示例

此页面演示了 VitePress 提供的一些内置 Markdown 扩展功能。

## 语法高亮

VitePress 提供由 [Shiki](https://github.com/shikijs/shiki) 提供支持的语法高亮，并附带诸如行高亮等附加功能：

**输入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义提示框

**输入**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个细节框。
:::
```

**输出**

::: info
这是一个信息框。
:::

::: tip
这是一个提示框。
:::

::: warning
这是一个警告框。
:::

::: danger
这是一个危险警告框。
:::

::: details
这是一个细节框。
:::

## 更多

查看 [文档](https://vitepress.dev/zh/guide/markdown) 以获取完整的 Markdown 扩展列表。
