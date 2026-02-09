import { renderHook, act } from "@testing-library/react";
import useStopWatch from "../hooks/useStopWatch";

jest.useFakeTimers();

describe("useStopWatch", () => {
  test("initial time", () => {
    const { result } = renderHook(() => useStopWatch(60, 1, "up", 60));
    expect(result.current.time).toBe("01 : 00");
  });

  test("start timer", () => {
    const { result } = renderHook(() => useStopWatch(50, 1, "up", 50));
    act(() => {
      result.current.start();
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.time).toBe("00 : 51");
  });
});
