/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
export function Footer() {
  return (
    <div
      class={tw
        `mt-16 flex justify-center items-center flex-col border-none bg-transparent text-black`}
    >
      <a
        class={tw`font-bold flex justify-start items-center cursor-pointer`}
        href="https://github.com/pr13260"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>Report Bugs</span>
      </a>
    </div>
  );
}
