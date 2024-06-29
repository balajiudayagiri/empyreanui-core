import { Palette } from "empyreanui/customComponents";

export default function PaletteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-14 ">
      <Palette />
      {children}
    </main>
  );
}
