/**
 * @jest-environment jsdom
 */

import { animatePageIn, animatePageOut } from "./animations"; // adjust path
import gsap from "gsap";

// Mock GSAP timeline and functions
const setMock = jest.fn();
const toMock = jest.fn(() => ({ to: toMock }));

jest.mock("gsap", () => ({
  timeline: jest.fn(() => ({
    set: setMock,
    to: toMock,
  })),
  set: jest.fn(),
}));

describe("Animation Functions", () => {
  let overlay;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Mock overlay element in DOM
    overlay = document.createElement("div");
    overlay.id = "horizontal-overlay";
    document.body.appendChild(overlay);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("animatePageIn should trigger GSAP timeline if overlay exists", () => {
    animatePageIn();

    expect(gsap.timeline).toHaveBeenCalledTimes(1);
    expect(setMock).toHaveBeenCalled();
    expect(toMock).toHaveBeenCalled();
  });

  test("animatePageIn should NOT trigger GSAP if overlay missing", () => {
    document.body.innerHTML = ""; // remove overlay

    animatePageIn();

    expect(gsap.timeline).not.toHaveBeenCalled();
  });

  test("animatePageOut should trigger GSAP timeline and onComplete callback", () => {
    const onComplete = jest.fn();
    animatePageOut("/prev", onComplete);

    expect(gsap.timeline).toHaveBeenCalledTimes(1);
    expect(setMock).toHaveBeenCalled();
    expect(toMock).toHaveBeenCalled();

    // Manually trigger GSAP onComplete callback mock
    const lastCall = toMock.mock.calls[toMock.mock.calls.length - 1][1];
    if (lastCall.onComplete) lastCall.onComplete();

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  test("animatePageOut should NOT trigger GSAP if overlay is missing", () => {
    document.body.innerHTML = "";

    const onComplete = jest.fn();
    animatePageOut("/prev", onComplete);

    expect(gsap.timeline).not.toHaveBeenCalled();
    expect(onComplete).not.toHaveBeenCalled();
  });
});
