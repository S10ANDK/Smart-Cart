import React from "react";
import BaseButton from "./components/styles/Buttons";
import PrimaryButton from "./components/styles/PrimaryButton";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <h1>Hello world!</h1>
        <h2>Second we testing</h2>
        {/* <h3>Third stuff yes</h3>
        <h4>This is a drill</h4> */}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <BaseButton>button</BaseButton>
        <PrimaryButton>Primary</PrimaryButton>
      </div>
    </>
  );
}

export default App;
