import React from "react";
import ContentOne from "./ContentOne";
import ContentTwo from "./ContentTwo";
import ContentThree from "./ContentThree";
import ContentFour from "./ContentFour";
import ContentFive from "./ContentFive";

export default function App() {
  return (
    <section className="container">
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <ContentFive />
    </section>
  );
}
