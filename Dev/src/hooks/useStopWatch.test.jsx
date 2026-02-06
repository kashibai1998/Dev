import { renderHook, act } from "@testing-library/react";
import useStopWatch from "../hooks/useStopWatch";

describe("useStopWatch", () => {
  test("initial time", () => {
    const { result } = renderHook(() => useStopWatch(60, 1, "up", 60));
    expect(result.current.time).toBe("01 : 00");
  });
});
