open Jest;

open Expect;

test("should add one to one", () =>
  expect(1 + 1) |> toEqual(2)
);
