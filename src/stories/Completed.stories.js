import React from "react";
import { storiesOf } from "@storybook/react";
import ShowCompleted from "../components/Completed";

storiesOf("Completed", module).add("default view", () => {
  return <ShowCompleted />;
});
