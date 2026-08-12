# LiapfMultistep

A multi-step form component that allows users to navigate through different steps of a process.

## Installation

```bash
okalit add liapf-multistep --registry github.com/LIAPF-Team/liapf-multistep
```

Or manually copy to your project:

```bash
# The component will be installed in src/catalogs/liapf-multistep/
```

## Usage

```js
import '@catalogs/liapf-multistep/liapf-multistep.js';
```

```html
<liapf-multistep
  currentStep="1"
>
  undefined
</liapf-multistep>
```

## Props

| Name | Type | Default |
|------|------|---------|
| `currentStep` | `Number` | `1` |

## Slots

| Name | Description |
|------|-------------|
| `default` | <step-item-molecule title="Create Account with OAuth"></step-item-molecule> |

## License

MIT
