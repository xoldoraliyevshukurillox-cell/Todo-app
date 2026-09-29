
import Sidebar from "@/components/Sidebar";

export default function Home() {

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 px-10 py-10 bg-[#F3F4F6] ">
        <div className="mb-8 flex items-center justify-between">
          <div />
          <h1 className="text-4xl font-bold text-black">My Tasks</h1>
          <button className="">
            <img src="/Vector (3).svg" alt="" width={35} height={35}/>
          </button>
        </div>

        <div className="mx-auto flex max-w-2xl gap-3">
          <input
            placeholder="Type your task here.."
            className="flex-1 rounded-lg border px-4 py-3 outline-none text-black focus:border-black"
          />
          <button
            className="flex items-center gap-2 rounded-lg bg-black px-6 py-3 font-medium text-white"
          >
            + Add
          </button>
        </div>

        <div className="mx-auto mt-6 flex max-w-2xl items-center justify-between text-sm">
          <div className="flex gap-2 text-gray-500">
              <button
                className="font-semibold text-black">
              </button>

          </div>
          <span className="text-gray-500">tasks left</span>
        </div>

        <div className="mx-auto mt-4 max-w-2xl space-y-3">
            <div
              className="flex items-center gap-4 rounded-lg border bg-white px-4 py-4"
            >
              <input
                type="checkbox"
              
                className="h-5 w-5 accent-black"
              />
              <span
                className="text-gray-400 line-through"
              >
              </span>
              <button className="text-gray-500 hover:text-black">
               <img src="/pencil 1.svg" alt="" />
              </button>
              <button
                className="text-gray-500 hover:text-black"
              >
                <img src="/trash 1.svg" alt="" />
              </button>
            </div>
        </div>
      </main>
    </div>
  );
}














// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       {/* <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main> */}
//     </div>
//   );
// }
