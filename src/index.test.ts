import { describe, it, expect } from "vitest";
import { backoffDelayMs, speedLabel } from "./index";

describe("backoffDelayMs", () => {
  it("doubles each attempt", () => {
    expect(backoffDelayMs(0)).toBe(100);
    expect(backoffDelayMs(1)).toBe(200);
    expect(backoffDelayMs(3)).toBe(800);
  });
  it("caps the delay", () => {
    expect(backoffDelayMs(50)).toBe(30_000);
  });
});

describe("speedLabel", () => {
  it("labels bps, kbps and Mbps", () => {
    expect(speedLabel(300)).toBe("300 bps");
    expect(speedLabel(56_000)).toBe("56 kbps");
    expect(speedLabel(2_500_000)).toBe("2.5 Mbps");
  });
  it("throws on negative", () => {
    expect(() => speedLabel(-1)).toThrow();
  });
});
