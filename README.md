# modem-break

> ⚠️ **Starter scaffold.** El repo estaba vacío; esto es una base que ya compila
> y tiene pruebas. **El propósito final está por definir** — el scaffold usa un
> tema de "conexión retro" como punto de partida; ajústalo cuando definas la idea.

## Qué hace (por ahora)

Utilidades puras de conexión:

- `backoffDelayMs(intento, base?, tope?)` → retroceso exponencial determinista
  (útil para reintentos).
- `speedLabel(bps)` → etiqueta legible de velocidad: `bps` / `kbps` / `Mbps`.

## Para quién es

Base genérica en TypeScript hasta concretar qué será `modem-break`.

## Instalación

```bash
git clone https://github.com/giopark4444-commits/modem-break.git
cd modem-break
npm install
```

## Ejemplo de uso

```ts
import { backoffDelayMs, speedLabel } from "./src/index";

backoffDelayMs(3);     // 800 (ms)
speedLabel(56_000);    // "56 kbps"
```

## Pruebas

```bash
npm test          # vitest run
npm run test:watch
```

## Stack

TypeScript · Vitest.
