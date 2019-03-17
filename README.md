# Flex Grid Framework

Super minimalistic CSS (SCSS) flex grid framework for easy manipulation with responsive-friendly websites.

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

### Rows

Rows are used to wrapper columns using `row` class you cant set up row and write down columns in. There is a plenty of modifications for rows:

**Vertical aligning**

- `row--v-center` - columns will be centered vertically,
- `row--v-top` - columns will be aligned to top vertically, (defaultly)
- `row--v-bottom` - columns will be aligned to bottom vertically,
- `row--stretch` - columns will be centered vertically and they will have same height,

**Horizontal aligning**

- `row--h-center` - columns will be centered horizontally,
- `row--h-left` - columns will be aligned left horizontally, (defaultly)
- `row--h-right` - columns will be aligned right horizontally,
- `row--space-between` - columns will be separated with spaces between,
- `row--space-around` - every columns will be separated by space (event at sides of row)

**Wrapping**

- `row--wrap-reverse` - row will wrap with reversed order
- `row--nowrap` - row will not wrap at all

Example:

```html
<div class="row row--v-top">
    <div class="col">
        Column with auto-width.
    </div>
    <div class="col col--5">
        Column with size of 5 units.
    </div>
    <div class="col col--fill">
        Column filling the remaining width.
    </div>
</div

```

### Columns

There are 2 ways how to create columns in your code:

- Using a mixin which provides an option to define size of the column depending on breakpoint

    ```css
    @include column($size, $breakpointName) // e.g. column(5, 'lg')
    ```

- Using a builded classes by `col--{$size}` and with breakpoint `col--{$breakpointName}-{$size}`. If you wish to use predefined column attributes (padding, box-sizing) you need to add `col` class to your element. To fill remaining width of row you can use `col--fill` class.

    ```html
    <div class="row">
        <div class="col col--20 col--md-18 col--xs-16">Predefined width!</div>
        <div class="col col--fill">Will fill the rest of width...</div>
    </div>
    ```

## License

Released under the MIT license - http://opensource.org/licenses/MIT