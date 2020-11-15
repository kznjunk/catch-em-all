## Usage

```js
const { catchEmAll } = require('@kznjunk/catch-em-all')

const [ error, data ] = await catchEmAll(sendEmail('Pika Pika'))
if (!data) console.log(error)
```
