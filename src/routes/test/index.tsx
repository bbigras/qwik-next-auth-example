import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>test</div>;
});

export const head: DocumentHead = {
  title: "test",
};
