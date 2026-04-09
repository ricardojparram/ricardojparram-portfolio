export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute w-105 h-105 rounded-full top-[-12%] left-[-10%] mix-blend-screen filter blur-[120px] opacity-10 bg-zinc-300 animate-float-1" />
      <div className="absolute w-130 h-130 bg-zinc-500 rounded-full bottom-[-18%] right-[-14%] mix-blend-screen filter blur-[130px] opacity-8 animate-float-2" />
    </div>
  );
}
