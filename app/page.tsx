import Input from "@/components/Input";
import Nav from "@/components/Nav";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <Nav />
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-3xl mb-4">Is The Cheater Banned?</h2>
          <Input />
        </main>
      </div>
    </div>
  );
}
