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

## Development

Requires [Bun](https://bun.sh).

```bash
bun install
bun run build      # regenerate icons from icons/ and bundle dist/
bun run generate   # regenerate React components only
bun run typecheck
```

To add a new icon, drop an `.svg` file into `icons/` and run `bun run build`.

## Publishing to npm

### 1. Choose your package name

The package name is `recycling-icons`. Edit `name` in `package.json` if you want a scoped name like `@your-username/recycling-icons`.

Check availability:

```bash
npm view recycling-icons  # 404 = name is free
```

### 2. Create an npm access token

Go to [npmjs.com](https://www.npmjs.com) → **Account** → **Access Tokens** → **Generate New Token**.

Use one of these:

| Token type | When to use |
|------------|-------------|
| **Granular Access Token** (recommended) | Fine-grained control. Enable **Read and Write** for packages, restrict to your account or org. |
| **Automation** (classic) | CI/CD publish pipelines. Bypasses 2FA on publish. |
| **Publish** (classic) | One-off local publishes from your machine. |

You do **not** need to share the token in chat. Run publish locally:

```bash
npm login          # interactive — safest for first publish
# or
export NPM_TOKEN=npm_xxxxxxxx   # then use .npmrc (see below)
bun run build
npm publish --access public       # required for scoped packages
```

For scoped packages (`@scope/name`), always pass `--access public` unless you want a private package.

### 3. What I need from you to publish

If you want me to run the publish step, provide **only**:

1. Your chosen **package name** (and npm scope if any)
2. Confirmation the name is available on npm
3. An npm token with **publish** permission, set as the `NPM_TOKEN` environment variable in your shell — never paste the token in chat

I will **not** ask for your npm password or 2FA codes.

## License

MIT
