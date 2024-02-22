"use client";
import useValidate from "../clientHooks/useValidate";
import { useCallback } from "react";
import { useRef } from "react";
import { useState } from "react";
import getPlayerStatus from "../auth/serveractions/getPlayerStatus";
import supabaseadd from "../auth/serveractions/supabaseadd";

export default function Form() {
  const [error, setError] = useState("");

  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      console.log(formData);
      setError("");
      ref.current?.reset();
      const id = await useValidate(formData);

      isNaN(id) && setError(id);
      const playerstatus = await getPlayerStatus(id);

      await supabaseadd(playerstatus);
      //to do add a error that displays if someone tries to add the same user to a list twice.
    },
    []
  );

  return (
    <div className="flex flex-row justify-center">
      <form ref={ref} onSubmit={handleSubmit}>
        <input
          placeholder="Enter Steam Profile Link"
          name="steamid"
          type="url"
          className="truncate overscroll-none  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></input>

        <button
          type="submit"
          className="ml-2 px-2 py-2 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
          Submit
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
