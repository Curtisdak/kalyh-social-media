import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[calc(100vh+180px)] lg:h-[calc(100vh+70px)]   flex items-center justify-evenly ">
      <div className="hidden lg:flex  w-[35%] flex-col  gap-2 bg-background p-10 rounded-lg shadow-lg ">
        <p className="text-4xl">Hello</p>
        <h1 className="text-4xl ">
          Welcome to{" "}
          <span className="text-8xl  text-primary font-extrabold">Kalyh</span>
        </h1>
        <p className="text-xl">
          This is the social network for you and your surrounding.{" "}
        </p>
        <span className="text-muted-foreground">
          feel free to connect with others and enjoy !
        </span>

        <span className="ml-[90%] text-primary font-bold text-sm  opacity-50 mt-[40px]">
          Kalyh
        </span>
      </div>
      <SignUp />
    </div>
  );
}
