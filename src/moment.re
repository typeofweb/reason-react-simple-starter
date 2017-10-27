type t;

external momentWithDate : Js.Date.t => t = "moment" [@@bs.module];

external format : string => string = "" [@@bs.send.pipe : t];
