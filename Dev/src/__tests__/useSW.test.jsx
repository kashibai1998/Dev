import { renderHook, act } from "@testing-library/react";
import useSW from "../comp/useSW";
jest.useFakeTimers();
describe("useSW", () => {
  test("initialTime", () => {
    const { result } = renderHook(() => useSW(10, 1, "down"));
    expect(result.current.time).toBe("00 : 10");
  });

  test("start timer down ", () => {
    const { result } = renderHook(() => useSW(10, 1, "down"));
    act(() => result.current.start());
    act(() => jest.advanceTimersByTime(1000));
    expect(result.current.time).toBe("00 : 09");
  });
});
