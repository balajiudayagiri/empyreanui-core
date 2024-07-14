export default function PaletteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="top-0 fixed overflow-auto size-full bg-secondary p-3 z-50 flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-extrabold fixed top-1 left-1 leading-tight tracking-tight">
        Empyrean <span className="text-primary">UI</span>
      </h1>
      {children}
    </div>
  );
}
