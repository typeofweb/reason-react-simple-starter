type action =
  | Tick
  | Click;

type state = {
  time: int,
  timerId: ref(option(Js.Global.intervalId)),
  count: int,
};

let res =
  Js.Promise.(
    Fetch.fetch("https://www.google.com")
    |> then_(Fetch.Response.text)
    |> then_(text => Js.log(text) |> resolve)
  );

[@bs.val] external alert : string => unit = "alert";

let component = ReasonReact.reducerComponent("MyCounter");

let make = _children => {
  ...component,
  initialState: () => {time: 0, timerId: ref(None), count: 0},
  reducer: (action, state) =>
    switch (action) {
    | Tick => ReasonReact.Update({...state, time: state.time + 1})
    | Click =>
      let oldCount = state.count;
      let newCount = oldCount + 1;
      ReasonReact.UpdateWithSideEffects(
        {...state, count: newCount},
        (({state: {count}}) => alert({j|Updating counter to $count|j})),
      );
    },
  didMount: self =>
    self.state.timerId :=
      Some(Js.Global.setInterval(() => self.send(Tick), 1000)),
  render: ({send, state: {time, count}}) => {
    let timesMessage = time == 1 ? "second" : "seconds";
    let timeMessage = {j|You've spent $time $timesMessage on this page|j};
    let counterMessage = {j|You've clicked the button: $count|j};
    let d = Moment.(momentWithDate(Js.Date.make()) |> format("HH:mm:ss"));
    <div>
      <button onClick=(_event => send(Click))>
        (ReasonReact.string("Click"))
      </button>
      <p> (ReasonReact.string(timeMessage)) </p>
      <p> (ReasonReact.string(counterMessage)) </p>
      <p> (ReasonReact.string(d)) </p>
    </div>;
  },
};