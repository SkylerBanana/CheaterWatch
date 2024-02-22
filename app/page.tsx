import Nav from "@/app/components/Nav";
import Form from "@/app/components/Form";

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col  items-center bg-[#12141a]">
      <Nav />
      <div className="animate-in flex-1 flex flex-col  opacity-0 max-w-4xl py-12 px-12 bg-[#0F0F0F] mt-5 rounded-2xl border-solid border-[#323f53] border mb-5 ">
        <main className="flex-1 flex flex-col gap-6 items-center">
          <h2 className="font-bold text-4xl mb-4  text-center">
            Cheater Watch
          </h2>
          <p className="text-center pb-2 text-lg">
            To start: Enter a steam profile link or vanity url
          </p>
          <Form />
          <div className="border  rounded p-4 ">
            <p className="text-center pb-2  text-2xl lg:text-3xl underline underline-offset-8 mb-4">
              What is Cheater Watch?
            </p>
            <p className="text-center text-lg lg:text-2xl">
              Cheater Watch is a tool used to help you keep track of suspicious
              individuals encountered in Counter-Strike and other Steam games.
              Simply add a player to your list, and you will automatically
              receive email notifications if they are banned.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
