type action =
  | Tick
  | Click;

type state = {
  time: int,
  timerId: ref (option Js.Global.intervalId),
  count: int
};

let res =
  Js.Promise.(
    Fetch.fetch "https://www.google.com"
    |> then_ Fetch.Response.text
    |> then_ (fun text => Js.log text |> resolve)
  );

external alert : string => unit = "alert" [@@bs.val];

let component = ReasonReact.reducerComponent "MyCounter";

let make _children => {
  ...component,
  initialState: fun () => {time: 0, timerId: ref None, count: 0},
  reducer: fun action state =>
    switch action {
    | Tick => ReasonReact.Update {...state, time: state.time + 1}
    | Click =>
      let oldCount = state.count;
      let newCount = oldCount + 1;
      ReasonReact.UpdateWithSideEffects
        {...state, count: newCount}
        (fun {state: {count}} => alert {j|Updating counter to $count|j})
    },
  didMount: fun self => {
    self.state.timerId := Some (Js.Global.setInterval (self.reduce (fun _ => Tick)) 1000);
    ReasonReact.NoUpdate
  },
  render: fun {reduce, state: {time, count}} => {
    let timesMessage = time == 1 ? "second" : "seconds";
    let timeMessage = {j|You've spent $time $timesMessage on this page|j};
    let counterMessage = {j|You've clicked the button: $count|j};
    let d = Moment.(momentWithDate (Js.Date.make ()) |> format "dddd");
    <div>
      <button onClick=(reduce (fun _ => Click))> (ReasonReact.stringToElement "Click") </button>
      <p> (ReasonReact.stringToElement timeMessage) </p>
      <p> (ReasonReact.stringToElement counterMessage) </p>
      <p> (ReasonReact.stringToElement d) </p>
    </div>
  }
};
