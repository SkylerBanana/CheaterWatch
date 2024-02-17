"use client";
import { validateAndCall } from "../auth/serveractions/validateAndCall";
import { useCallback } from "react";
import { useRef } from "react";

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div>
      <form
        ref={ref}
        action={useCallback(async (formData: FormData) => {
          const id = await validateAndCall(formData);
          console.log(id);
          ref.current?.reset();
        }, [])}
      >
        <input name="steamid" type="url" className="rounded text-black"></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 rounded">
          Button
        </button>
      </form>
    </div>
  );
}
