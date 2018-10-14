import { dialogflow } from "actions-on-google";

const app = dialogflow();

app.intent("Default Welcome Intent", conv => {
  conv.ask("Hi...how is it going?");
});

app.intent("random-number-intent", conv => {
  // conv.ask('Hi, how is it going?');
  conv.close("" + Math.random() * 100);
});

export default app;
