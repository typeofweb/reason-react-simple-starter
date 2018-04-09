type t;

[@bs.module] external momentWithDate : Js.Date.t => t = "moment";

[@bs.send.pipe: t] external format : string => string = "";
