# d-lorem
---

## Derby 0.6 lorem ipsum generator component

### Usage

Install:
```bash
npm install d-lorem
```

Add to app:
```js
app.component(require('d-lorem'));
```

Use in html view-file:
```html
<!--  5 sentences -->
  <lorem val="5"/>
  <!-- or -->
  <lorem val="s5"/>

<!--  3 paragraps wrapped in <p>-tag -->
  <lorem val="p3"/>

<!--  3 paragraps plain text -->
  <lorem val="p3" plain/>

<!--  7 words -->
  <lorem val="w7"/>
```

## MIT License
Copyright (c) 2014 by Artur Zayats

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
