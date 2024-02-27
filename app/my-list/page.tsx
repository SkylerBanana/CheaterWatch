import BackButton from "@/app/components/BackButton";
import supabaseRead from "../auth/serveractions/supabaseRead";
export default function MyList() {
  supabaseRead();
  return (
    <div>
      <BackButton />
      <p>My List</p>
    </div>
  );
}
