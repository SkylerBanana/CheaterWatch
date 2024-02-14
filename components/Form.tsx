"use client";
import { validateAndCall } from "@/app/serveractions/validateAndCall";

export default function Form() {
  return (
    <form action={validateAndCall}>
      <input name="steamid" type="url" className="rounded text-black"></input>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 rounded">
        Button
      </button>
    </form>
  );
}
