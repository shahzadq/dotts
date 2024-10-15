import { createMediaQuery } from "../src/index";

const expected = {
  simple: "only screen and (min-width: 100px) and (max-width: 200px)",
};

test("simple object test", () => {
  expect(
    createMediaQuery({ type: "only screen", minWidth: 100, maxWidth: 200 }),
  ).toBe(expected.simple);
});

test("simple function test", () => {
  expect(
    createMediaQuery(({ and }) =>
      and([{ type: "only screen" }, { minWidth: 100 }, { maxWidth: 200 }]),
    ),
  ).toBe(expected.simple);
});

test("different value units", () => {
  expect(
    createMediaQuery({
      minWidth: "100rem",
    }),
  ).toBe("(min-width: 100rem)");
});

test("or test", () => {
  expect(
    createMediaQuery({
      type: "screen",
      or: [
        { minWidth: 100, maxWidth: 200 },
        { minWidth: 1000, maxWidth: 2000 },
      ],
    }),
  ).toBe(
    "screen and (((min-width: 100px) and (max-width: 200px)) or ((min-width: 1000px) and (max-width: 2000px)))",
  );
});

test("not test", () => {
  expect(
    createMediaQuery({
      type: "screen",
      not: { orientation: "landscape" },
    }),
  ).toBe("screen and (not (orientation: landscape))");
});

test("recursion", () => {
  expect(
    createMediaQuery({
      type: "screen",
      not: {
        not: {
          orientation: "landscape",
        },
      },
    }),
  ).toBe("screen and (not (not (orientation: landscape)))");
});

test("css tricks example", () => {
  expect(
    createMediaQuery({
      or: [
        { minWidth: "20em" },
        {
          type: "not all",
          minHeight: "40em",
        },
      ],
    }),
  ).toBe("(min-width: 20em) or (not all and (min-height: 40em))");
});
