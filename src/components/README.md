# Components

## [Card Components](cards)

## [Game Board Components](game)

## General Components

### CircleRenderer

Renders children on a circle based on it's given props

| Prop name   | Type    | Description                                                                         |
| ----------- | ------- | ----------------------------------------------------------------------------------- |
| radiusX     | number  | Radius of the circle in the X direction                                             |
| radiusY     | number  | Radius of the circle in the Y direction                                             |
| padding     | string  | padding to apply to container.                                                      |
| drawCircles | boolean | Whether or not to draw circles represending the circle's radius and outside padding |
| startAngle  | number  | the starting angle to place the 'center' at (measured in degrees)                   |
| alpha       | number  | The angle between adjacent elements on the circle (measured in degrees)             |
| rotate      | string  | Rotatation after placement on circle (one of 'none', 'tangent')                     |
| passTheta   | string  | If specified, pass the angle each element is as a prop given my `passTheta`         |
