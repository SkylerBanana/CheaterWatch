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

  const handleSubmit = useCallback(async (formData: FormData) => {
    setError("");
    ref.current?.reset();
    const id = await useValidate(formData);

    isNaN(id) && setError(id);
    const playerstatus = await getPlayerStatus(id);

    await supabaseadd(playerstatus);
  }, []);

  return (
    <div>
      <form ref={ref} action={handleSubmit}>
        <input name="steamid" type="url" className="rounded text-black"></input>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 rounded">
          Button
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
