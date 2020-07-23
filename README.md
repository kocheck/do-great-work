# do-great-work

Messy Code, Fun UI.

# Tech Stack Notes

I need a place to keep all of my notes because I forget everything.

## Running with PUG

I am using CodeKit to compile [PUG](https://pugjs.org/api/getting-started.html).

[Reading this has been so helpful.](https://medium.com/jspoint/pug-js-to-make-your-life-easier-with-html-templates-9c62273626e0)

```
//- template.pug
p #{name}'s Pug source code!
const pug = require('pug');

// Compile the source code
const compiledFunction = pug.compileFile('template.pug');

// Render a set of data
console.log(compiledFunction({
  name: 'Timothy'
}));
// "<p>Timothy's Pug source code!</p>"

// Render another set of data
console.log(compiledFunction({
  name: 'Forbes'
}));
// "<p>Forbes's Pug source code!</p>"
```
