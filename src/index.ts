/** modem-break — starter utilities (retro connection helpers). */

/**
 * Exponential backoff delay (ms) for a 0-based retry `attempt`, capped.
 * Deterministic (no jitter) so it's easy to test and reason about.
 */
export function backoffDelayMs(attempt: number, baseMs = 100, capMs = 30_000): number {
  if (attempt < 0) return baseMs;
  return Math.min(capMs, baseMs * 2 ** attempt);
}

/** Human label for a connection speed in bits per second. */
export function speedLabel(bps: number): string {
  if (bps < 0) throw new Error("bps cannot be negative");
  if (bps >= 1_000_000) return `${(bps / 1_000_000).toFixed(1)} Mbps`;
  if (bps >= 1_000) return `${Math.round(bps / 1_000)} kbps`;
  return `${bps} bps`;
}
