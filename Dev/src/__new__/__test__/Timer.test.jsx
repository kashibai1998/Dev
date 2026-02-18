import { act, renderHook } from "@testing-library/react";
import { useNewTimer } from "../components/Timer";

jest.useFakeTimers();
describe("test sw", () => {
  test("initial time", () => {
    const { result } = renderHook(() => useNewTimer(5, 1, "down"));
    expect(result?.current?.time).toBe("00 : 05");
  });

  test("start time", () => {
    const { result } = renderHook(() => useNewTimer(5, 1, "down"));
    act(() => {
      result.current.start();
    });
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result?.current?.time).toBe("00 : 04");
  });
});
