# Markdown

#### Writing markdown

You can write and load markdown files directly into the demo.

This page is actually written in markdown! See `pages/Markdown.md`.

#### Using markdown

Simply import and use the file in `config/navigation.js`:

```js
import SomePage from 'pages/SomePage.md'
page('some-page', 'Some Page', SomePage)
```

#### Component support

You can Vue code such as components in markdown, just by writing them:

<view-docs label="View docs!" src="markdown"></view-docs>


#### Supported formatting

You can use any of the usual formats such as *italic*, **bold**, and `monospace`.

Here is a list:

- foo
- bar
- baz

Here is a table:

one|two|three
---|---|-----
1|2|3
4|5|6

Code will be formatted once I add the Prism plugin:

```js
console.log('hello')
```

