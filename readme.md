# cox
Collision engine may evolve into physical engine.

# Install
```
npm i @iro/cox
```

# Usage
```js
import {collide, Polygon, Circle} from '@iro/cox'

const polygon = new Polygon({
  x: 10,
  y: 20,
  vertices: [-60, -60, -120, 0, -60, 60, 60, 60, 120, 0, 60, -60]
})
​
const circle = new Circle({
  x: 60,
  y: 60,
  r: 50
})
​
collide(polygon, circle) // output: true
```
