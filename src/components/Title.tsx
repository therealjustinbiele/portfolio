export function Title({ text, className }: { text: string; className?: string; }) {
  return (
    <div className={className || ""}>
        <h1 className="text-3xl font-bold group-hover:scale-125 transition-all">
            {text}
        </h1>
        <div className="w-5 h-2 transition-all bg-green-500 rounded-full group-hover:translate-y-3 group-hover:w-full"></div>
        <div className="w-5 h-2 transition-all bg-indigo-500 rounded-full translate-x-2 group-hover:translate-y-3 group-hover:w-full"></div>
    </div>
  );
}