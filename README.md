# Flex Grid Framework

Super minimalistic CSS flex grid framework for easy manipulation with friendly-responsive websites.

## Configuring

Just before including SCSS source file, you are able to define your own configuration of grid layout system. Variables are listed here:

**$columns**

Max. number of columns
```
default: 24
options: number
```

**$columnsGasp**

Gasp between columns in grid
```
default: 1rem
options: mixed (number of px/rem/em etc.)
```

**$indentation**

Max. number of margin/padding indentation
```
default: 10
options: number
```

**$breakpoints**

Breakpoints definition. You can define your own names and use them later.
```
default: (
    lg: 1440px,
    md: 1024px,
    sm: 768px,
    xs: 560px
)
options: list
```

## How to use

### Columns

There are 2 ways how to create columns in your code:

- Using a mixin which provides an option to define size of the column depending on breakpoint

    ```css
    @extend column($size, $breakpointName) // e.g. column(5, 'lg')
    ```

- Using a builded classes by `col--{$size}` and with breakpoint `col--{$breakpointName}-{$size}`. If you wish to use predefined column attributes (padding, box-sizing) you need to add `col` class to your element.

    ```html
    <div class="col col--24 col--md-18 col--xs-16"></div>
    ```

## License

Released under the MIT license - http://opensource.org/licenses/MIT