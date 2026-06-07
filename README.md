# recycling-icons

A curated collection of packaging, recycling, disposal, and material identification SVG icons for web, mobile, and product compliance applications.

Works with **Next.js** (App Router and Pages Router), Vite, and any React 17+ project.

## Install

```bash
bun add recycling-icons
# or
npm install recycling-icons
```

## Usage in Next.js

Icons are React components. Import only what you need for optimal tree-shaking.

```tsx
import { Pet1Icon, TrimanIcon, GreenDotIcon } from "recycling-icons";

export default function PackagingLabels() {
  return (
    <div className="flex items-center gap-4">
      <Pet1Icon size={48} title="PET plastic, resin code 1" />
      <TrimanIcon size={48} title="Triman sorting label" />
      <GreenDotIcon size={48} title="Green Dot" />
    </div>
  );
}
```

### App Router (Server Components)

These icons are client-safe SVG elements and can be used directly in Server Components:

```tsx
import { MobiusLoopIcon } from "recycling-icons";

export default function Page() {
  return <MobiusLoopIcon size={32} />;
}
```

### Props

All icons accept standard `SVGSVGElement` props plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Shorthand for `width` and `height` |
| `title` | `string` | — | Accessible label; adds `role="img"` |
| `className` | `string` | — | CSS class |
| `style` | `CSSProperties` | — | Inline styles |

## Available icons

| Component | Source file |
|-----------|-------------|
| `Alu41Icon` | `alu-41.svg` |
| `BiodegradableIcon` | `Biodegradable.svg` |
| `EkobulpackIcon` | `ekobulpack.svg` |
| `Fe40Icon` | `fe-40.svg` |
| `Gl70Icon` | `gl-70.svg` |
| `Gl71Icon` | `gl-71.svg` |
| `Gl72Icon` | `gl-72.svg` |
| `GreenDotIcon` | `green-dot.svg` |
| `GrunePunktIcon` | `grune-punkt.svg` |
| `Hdpe2Icon` | `hdpe-2.svg` |
| `Ldpe4Icon` | `ldpe-4.svg` |
| `MobiusLoopIcon` | `mobius-loop.svg` |
| `Other7Icon` | `other-7.svg` |
| `Pap20Icon` | `pap-20.svg` |
| `Pap21Icon` | `pap-21.svg` |
| `Pap22Icon` | `pap-22.svg` |
| `Pet1Icon` | `pet-1.svg` |
| `Pp5Icon` | `pp-5.svg` |
| `Ps6Icon` | `ps-6.svg` |
| `Pvc3Icon` | `pvc-3.svg` |
| `TidymanIcon` | `tidyman.svg` |
| `TrimanIcon` | `triman.svg` |

## License

MIT
