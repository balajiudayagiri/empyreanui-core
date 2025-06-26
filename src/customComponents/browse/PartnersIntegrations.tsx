import React from "react";

const PartnersIntegrations: React.FC = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Partners &amp; Integrations
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* Partner 1 */}
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0bb0q0-vTiX6VBkycMzzazr4RKZHkHT23X80dV-uqN2d8VPWSaEvJYN-_6rQm242TqfVZNuQseEQYTVmb_bEcrT5WRIMPRpe1n2u67Fl66C-N2oAgAZPsmnBSFSYY2WSVhS_Zo1sUU3cSbh4uKlBNV5vrXKoSvQ135ui6zNuX83-SfX5opQHFMijuhRYikEDqDdYfEf7MaVpQpe99WrJQhWgSQuYeSSgIZe1rYEiQd3hU7Sbfdc9jZPyNyaYGz7CVxYSpVvMs218U")',
            }}></div>
        </div>
        {/* Partner 2 */}
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5VezoGPqrR_Chnqs_DhoBHdBUhqx93JQHKAYuBTIJGJt7eUVZ5oUca-C6FGEaYcrwyx2loQmI-LhJ2fnQBm7KSm3-gSgFZKHFaOsC4aL4YljNYrKecykt3KnUyOEi4EzwQ2onicTw_KfK2l76QfmELxPQF8kcHh2dx_3FYwzpk8hEcsc9r6INjHH5Pxa6OVzUB4TqtTjUmkE4iPSqdcS_gO2Kk7UjQFEQpJpgdbzBfqgHsKwdgdY_ZyVu0"))',
            }}></div>
        </div>
      </div>
    </div>
  );
};

export default PartnersIntegrations;
