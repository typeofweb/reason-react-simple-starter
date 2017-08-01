open Jest;

open Expect;

test "should add one to one" (fun () => expect (1 + 1) |> toEqual 2);
