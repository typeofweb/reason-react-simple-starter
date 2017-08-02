let component = ReasonReact.statelessComponent "App";

let make ::name _children => {
  ...component,
  render: fun _self => <div> (ReasonReact.stringToElement ("Hello world, " ^ name ^ "!")) </div>
};
