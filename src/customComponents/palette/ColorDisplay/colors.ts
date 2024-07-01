const colors = {
  // primary: {
  //   0: "#7fbcff",
  //   1: "#63aeff",
  //   2: "#469fff",
  //   3: "#2a90ff",
  //   4: "#0e82fe",
  //   5: "#0074f0",
  //   6: "#0066d4",
  //   7: "#0058b8",
  //   8: "#004b9b",
  //   9: "#003d7f",
  // },
  // secondary: {
  //   0: "#aeb4b9",
  //   1: "#9fa6ac",
  //   2: "#90989f",
  //   3: "#818a92",
  //   4: "#727c84",
  //   5: "#656d75",
  //   6: "#585f66",
  //   7: "#4b5156",
  //   8: "#3e4347",
  //   9: "#303438",
  // },
  // error: {
  //   0: "#eea1a9",
  //   1: "#ea8992",
  //   2: "#e6717c",
  //   3: "#e25966",
  //   4: "#de4150",
  //   5: "#d92839",
  //   6: "#c42231",
  //   7: "#ac1d2b",
  //   8: "#941925",
  //   9: "#7c151f",
  // },
  // warning: {
  //   0: "#ffe086",
  //   1: "#ffd96a",
  //   2: "#ffd24d",
  //   3: "#ffcb31",
  //   4: "#fec415",
  //   5: "#f7b900",
  //   6: "#dba400",
  //   7: "#bf8f00",
  //   8: "#a27a00",
  //   9: "#866400",
  // },
  // info: {
  //   0: "#62d8eb",
  //   1: "#49d2e8",
  //   2: "#30cce5",
  //   3: "#1bc3dd",
  //   4: "#18adc4",
  //   5: "#1596ab",
  //   6: "#128092",
  //   7: "#0f6a79",
  //   8: "#0b545f",
  //   9: "#083e46",
  // },
  // alert: {
  //   0: "#ffeaea",
  //   1: "#fecece",
  //   2: "#ffb1b1",
  //   3: "#ff9595",
  //   4: "#ff7979",
  //   5: "#ff5c5c",
  //   6: "#ff4040",
  //   7: "#ff2424",
  //   8: "#fe0707",
  //   9: "#ea0000",
  // },
  // success: {
  //   0: "#71dd8a",
  //   1: "#5ad777",
  //   2: "#43d264",
  //   3: "#30c953",
  //   4: "#2ab249",
  //   5: "#259b40",
  //   6: "#1f8436",
  //   7: "#1a6d2d",
  //   8: "#145623",
  //   9: "#0f401a",
  // },
  slate: {
    0: "#f8fafc",
    1: "#f1f5f9",
    2: "#e2e8f0",
    3: "#cbd5e1",
    4: "#94a3b8",
    5: "#64748b",
    6: "#475569",
    7: "#334155",
    8: "#1e293b",
    9: "#0f172a",
  },
  gray: {
    0: "#bfbfbf",
    1: "#b1b1b1",
    2: "#a3a3a3",
    3: "#959595",
    4: "#878787",
    5: "#787878",
    6: "#6a6a6a",
    7: "#5c5c5c",
    8: "#4e4e4e",
    9: "#404040",
  },
  zinc: {
    0: "#fafafa",
    1: "#f4f4f5",
    2: "#e4e4e7",
    3: "#d4d4d8",
    4: "#a1a1aa",
    5: "#71717a",
    6: "#52525b",
    7: "#3f3f46",
    8: "#27272a",
    9: "#18181b",
  },
  // neutral: {
  //   0: "#fafafa",
  //   1: "#f5f5f5",
  //   2: "#e5e5e5",
  //   3: "#d4d4d4",
  //   4: "#a3a3a3",
  //   5: "#737373",
  //   6: "#525252",
  //   7: "#404040",
  //   8: "#262626",
  //   9: "#171717",
  // },
  stone: {
    0: "#fafaf9",
    1: "#f5f5f4",
    2: "#e7e5e4",
    3: "#d6d3d1",
    4: "#a8a29e",
    5: "#78716c",
    6: "#57534e",
    7: "#44403c",
    8: "#292524",
    9: "#1c1917",
  },
  red: {
    0: "#ff7f7f",
    1: "#ff6363",
    2: "#ff4646",
    3: "#ff2a2a",
    4: "#fe0e0e",
    5: "#f00000",
    6: "#d40000",
    7: "#b80000",
    8: "#9b0000",
    9: "#7f0000",
  },
  orange: {
    0: "#fff7ed",
    1: "#ffedd5",
    2: "#fed7aa",
    3: "#fdba74",
    4: "#fb923c",
    5: "#f97316",
    6: "#ea580c",
    7: "#c2410c",
    8: "#9a3412",
    9: "#7c2d12",
  },
  amber: {
    0: "#fffbeb",
    1: "#fef3c7",
    2: "#fde68a",
    3: "#fcd34d",
    4: "#fbbf24",
    5: "#f59e0b",
    6: "#d97706",
    7: "#b45309",
    8: "#92400e",
    9: "#78350f",
  },
  yellow: {
    0: "#fefce8",
    1: "#fef9c3",
    2: "#fef08a",
    3: "#fde047",
    4: "#facc15",
    5: "#eab308",
    6: "#ca8a04",
    7: "#a16207",
    8: "#854d0e",
    9: "#713f12",
  },
  lime: {
    0: "#f7fee7",
    1: "#ecfccb",
    2: "#d9f99d",
    3: "#bef264",
    4: "#a3e635",
    5: "#84cc16",
    6: "#65a30d",
    7: "#4d7c0f",
    8: "#3f6212",
    9: "#365314",
  },
  green: {
    0: "#00ff00",
    1: "#00e300",
    2: "#00c600",
    3: "#00aa00",
    4: "#008e00",
    5: "#007100",
    6: "#005500",
    7: "#003900",
    8: "#001c00",
    9: "#000000",
  },
  emerald: {
    0: "#ecfdf5",
    1: "#d1fae5",
    2: "#a7f3d0",
    3: "#6ee7b7",
    4: "#34d399",
    5: "#10b981",
    6: "#059669",
    7: "#047857",
    8: "#065f46",
    9: "#064e3b",
  },
  teal: {
    0: "#f0fdfa",
    1: "#ccfbf1",
    2: "#99f6e4",
    3: "#5eead4",
    4: "#2dd4bf",
    5: "#14b8a6",
    6: "#0d9488",
    7: "#0f766e",
    8: "#115e59",
    9: "#134e4a",
  },
  cyan: {
    0: "#ecfeff",
    1: "#cffafe",
    2: "#a5f3fc",
    3: "#67e8f9",
    4: "#22d3ee",
    5: "#06b6d4",
    6: "#0891b2",
    7: "#0e7490",
    8: "#155e75",
    9: "#164e63",
  },
  sky: {
    0: "#f0f9ff",
    1: "#e0f2fe",
    2: "#bae6fd",
    3: "#7dd3fc",
    4: "#38bdf8",
    5: "#0ea5e9",
    6: "#0284c7",
    7: "#0369a1",
    8: "#075985",
    9: "#0c4a6e",
  },
  blue: {
    0: "#eff6ff",
    1: "#dbeafe",
    2: "#bfdbfe",
    3: "#93c5fd",
    4: "#60a5fa",
    5: "#3b82f6",
    6: "#2563eb",
    7: "#1d4ed8",
    8: "#1e40af",
    9: "#1e3a8a",
  },
  indigo: {
    0: "#eef2ff",
    1: "#e0e7ff",
    2: "#c7d2fe",
    3: "#a5b4fc",
    4: "#818cf8",
    5: "#6366f1",
    6: "#4f46e5",
    7: "#4338ca",
    8: "#3730a3",
    9: "#312e81",
  },
  violet: {
    0: "#f5f3ff",
    1: "#ede9fe",
    2: "#ddd6fe",
    3: "#c4b5fd",
    4: "#a78bfa",
    5: "#8b5cf6",
    6: "#7c3aed",
    7: "#6d28d9",
    8: "#5b21b6",
    9: "#4c1d95",
  },
  purple: {
    0: "#faf5ff",
    1: "#f3e8ff",
    2: "#e9d5ff",
    3: "#d8b4fe",
    4: "#c084fc",
    5: "#a855f7",
    6: "#9333ea",
    7: "#7e22ce",
    8: "#6b21a8",
    9: "#581c87",
  },
  fuchsia: {
    0: "#fdf4ff",
    1: "#fae8ff",
    2: "#f5d0fe",
    3: "#f0abfc",
    4: "#e879f9",
    5: "#d946ef",
    6: "#c026d3",
    7: "#a21caf",
    8: "#86198f",
    9: "#701a75",
  },
  pink: {
    0: "#fdf2f8",
    1: "#fce7f3",
    2: "#fbcfe8",
    3: "#f9a8d4",
    4: "#f472b6",
    5: "#ec4899",
    6: "#db2777",
    7: "#be185d",
    8: "#9d174d",
    9: "#831843",
  },
  rose: {
    0: "#fff1f2",
    1: "#ffe4e6",
    2: "#fecdd3",
    3: "#fda4af",
    4: "#fb7185",
    5: "#f43f5e",
    6: "#e11d48",
    7: "#be123c",
    8: "#9f1239",
    9: "#881337",
  },
  dark: {
    0: "#c1c2c5",
    1: "#a6a7ab",
    2: "#909296",
    3: "#5c5f66",
    4: "#373a40",
    5: "#2c2e33",
    6: "#25262b",
    7: "#1a1b1e",
    8: "#141517",
    9: "#101113",
  },
  white: {
    0: "#ffffff",
    1: "#f8f8f8",
    2: "#f1f1f1",
    3: "#eaeaea",
    4: "#e3e3e3",
    5: "#dcdcdc",
    6: "#d5d5d5",
    7: "#cecece",
    8: "#c7c7c7",
    9: "#c0c0c0",
  },
  aliceblue: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fefeff",
    5: "#e1f1ff",
    6: "#c5e4ff",
    7: "#a9d6ff",
    8: "#8cc9fe",
    9: "#70bcff",
  },
  antiquewhite: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fefdfc",
    4: "#fbf1e3",
    5: "#f8e4ca",
    6: "#f5d8b1",
    7: "#f2cb98",
    8: "#eebe7e",
    9: "#ebb265",
  },
  aqua: {
    0: "#7ffeff",
    1: "#63feff",
    2: "#46feff",
    3: "#2afeff",
    4: "#0efefe",
    5: "#00f0f0",
    6: "#00d4d4",
    7: "#00b8b8",
    8: "#009b9b",
    9: "#007f7f",
  },
  aquamarine: {
    0: "#fefffe",
    1: "#e2fff5",
    2: "#c5ffeb",
    3: "#a9ffe2",
    4: "#8dfed8",
    5: "#70ffcf",
    6: "#54fec5",
    7: "#38ffbc",
    8: "#1bffb2",
    9: "#00fea9",
  },
  azure: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#feffff",
    5: "#e1ffff",
    6: "#c5ffff",
    7: "#a9ffff",
    8: "#8cfefe",
    9: "#70feff",
  },
  beige: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fefefd",
    4: "#f8f8e7",
    5: "#f1f1d0",
    6: "#ebebba",
    7: "#e5e5a4",
    8: "#dede8e",
    9: "#d8d878",
  },
  bisque: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fff7ee",
    4: "#feead2",
    5: "#ffddb5",
    6: "#fed099",
    7: "#ffc37d",
    8: "#ffb660",
    9: "#ffa944",
  },
  black: {
    0: "#3f3f3f",
    1: "#313131",
    2: "#232323",
    3: "#151515",
    4: "#070707",
    5: "#000000",
    6: "#000000",
    7: "#000000",
    8: "#000000",
    9: "#000000",
  },
  blanchedalmond: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fffcf7",
    4: "#fff0db",
    5: "#ffe5be",
    6: "#ffd9a2",
    7: "#ffce86",
    8: "#ffc369",
    9: "#feb74d",
  },
  blueviolet: {
    0: "#c79bf1",
    1: "#ba82ed",
    2: "#ac69ea",
    3: "#9e50e7",
    4: "#9037e3",
    5: "#831ee0",
    6: "#741bc7",
    7: "#6517ae",
    8: "#571495",
    9: "#48117c",
  },
  brown: {
    0: "#db7373",
    1: "#d55c5c",
    2: "#cf4545",
    3: "#c63232",
    4: "#b02c2c",
    5: "#992727",
    6: "#832121",
    7: "#6c1b1b",
    8: "#551515",
    9: "#3f1010",
  },
  burlywood: {
    0: "#f9f3eb",
    1: "#f3e6d4",
    2: "#edd8be",
    3: "#e7cba8",
    4: "#e1be92",
    5: "#dab17b",
    6: "#d4a465",
    7: "#ce974f",
    8: "#c88939",
    9: "#b47a31",
  },
  cadetblue: {
    0: "#afcecf",
    1: "#9dc3c4",
    2: "#8bb8ba",
    3: "#79aeaf",
    4: "#67a3a5",
    5: "#599597",
    6: "#4f8385",
    7: "#447273",
    8: "#3a6061",
    9: "#2f4f50",
  },
  chartreuse: {
    0: "#bfff7f",
    1: "#b0ff63",
    2: "#a2ff46",
    3: "#94ff2a",
    4: "#86fe0e",
    5: "#77f000",
    6: "#69d400",
    7: "#5bb800",
    8: "#4d9b00",
    9: "#3f7f00",
  },
  chocolate: {
    0: "#edae82",
    1: "#e99e69",
    2: "#e68e50",
    3: "#e27f37",
    4: "#de6f1f",
    5: "#c5621c",
    6: "#ac5618",
    7: "#944a15",
    8: "#7b3d11",
    9: "#62310e",
  },
  coral: {
    0: "#fedccf",
    1: "#ffc7b3",
    2: "#feb296",
    3: "#ff9e7a",
    4: "#ff895e",
    5: "#ff7441",
    6: "#ff5f25",
    7: "#ff4b09",
    8: "#eb3f00",
    9: "#cf3700",
  },
  cornflowerblue: {
    0: "#d6e3fa",
    1: "#bcd1f7",
    2: "#a3c0f4",
    3: "#8aaff1",
    4: "#709dee",
    5: "#578ceb",
    6: "#3d7ae8",
    7: "#2469e5",
    8: "#185cd5",
    9: "#1551bb",
  },
  cornsilk: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fffaea",
    5: "#fef5cd",
    6: "#ffefb1",
    7: "#ffe995",
    8: "#ffe478",
    9: "#ffde5c",
  },
  crimson: {
    0: "#f37c94",
    1: "#f0627e",
    2: "#ee4869",
    3: "#ec2e54",
    4: "#e8153f",
    5: "#cf1238",
    6: "#b51031",
    7: "#9b0e2a",
    8: "#810b23",
    9: "#67091c",
  },
  darkblue: {
    0: "#0b0bff",
    1: "#0000ee",
    2: "#0000d1",
    3: "#0000b5",
    4: "#000099",
    5: "#00007c",
    6: "#000060",
    7: "#000044",
    8: "#000027",
    9: "#00000b",
  },
  darkcyan: {
    0: "#0bfeff",
    1: "#00eeee",
    2: "#00d1d1",
    3: "#00b5b5",
    4: "#009999",
    5: "#007c7c",
    6: "#006060",
    7: "#004444",
    8: "#002727",
    9: "#000b0b",
  },
  darkgoldenrod: {
    0: "#f4c44e",
    1: "#f2bb33",
    2: "#f1b218",
    3: "#e0a30d",
    4: "#c58f0b",
    5: "#aa7c0a",
    6: "#8f6808",
    7: "#755507",
    8: "#5a4105",
    9: "#3f2e03",
  },
  darkgray: {
    0: "#e8e8e8",
    1: "#dadada",
    2: "#cccccc",
    3: "#bebebe",
    4: "#b0b0b0",
    5: "#a1a1a1",
    6: "#939393",
    7: "#858585",
    8: "#777777",
    9: "#696969",
  },
  darkgrey: {
    0: "#e8e8e8",
    1: "#dadada",
    2: "#cccccc",
    3: "#bebebe",
    4: "#b0b0b0",
    5: "#a1a1a1",
    6: "#939393",
    7: "#858585",
    8: "#777777",
    9: "#696969",
  },
  darkgreen: {
    0: "#00e300",
    1: "#00c700",
    2: "#00aa00",
    3: "#008e00",
    4: "#007200",
    5: "#005500",
    6: "#003900",
    7: "#001d00",
    8: "#000000",
    9: "#000000",
  },
  darkkhaki: {
    0: "#e4e1c3",
    1: "#dbd8af",
    2: "#d2ce9b",
    3: "#cac588",
    4: "#c1bb74",
    5: "#b8b261",
    6: "#afa84e",
    7: "#9b9545",
    8: "#88823c",
    9: "#746f33",
  },
  darkmagenta: {
    0: "#ff0bfe",
    1: "#ee00ee",
    2: "#d100d1",
    3: "#b500b5",
    4: "#990099",
    5: "#7c007c",
    6: "#600060",
    7: "#440044",
    8: "#270027",
    9: "#0b000b",
  },
  darkolivegreen: {
    0: "#98b960",
    1: "#8baf4d",
    2: "#7c9c44",
    3: "#6c883b",
    4: "#5c7433",
    5: "#4d612a",
    6: "#3d4d22",
    7: "#2d3919",
    8: "#1e2610",
    9: "#0e1208",
  },
  darkorange: {
    0: "#ffc57f",
    1: "#ffb863",
    2: "#ffab46",
    3: "#ff9f2a",
    4: "#fe920e",
    5: "#f08400",
    6: "#d47400",
    7: "#b86500",
    8: "#9b5500",
    9: "#7f4600",
  },
  darkorchid: {
    0: "#cb97e5",
    1: "#c081e0",
    2: "#b56ada",
    3: "#aa53d4",
    4: "#9e3ccf",
    5: "#902fc0",
    6: "#7f29a9",
    7: "#6e2493",
    8: "#5d1e7c",
    9: "#4c1865",
  },
  darkred: {
    0: "#ff0b0b",
    1: "#ee0000",
    2: "#d10000",
    3: "#b50000",
    4: "#990000",
    5: "#7c0000",
    6: "#600000",
    7: "#440000",
    8: "#270000",
    9: "#0b0000",
  },
  darksalmon: {
    0: "#fbece7",
    1: "#f7d9cf",
    2: "#f3c5b6",
    3: "#efb29e",
    4: "#eb9f86",
    5: "#e68c6d",
    6: "#e27955",
    7: "#de663d",
    8: "#da5224",
    9: "#c34920",
  },
  darkseagreen: {
    0: "#deebde",
    1: "#cde1cd",
    2: "#bbd6bb",
    3: "#a9cba9",
    4: "#97c197",
    5: "#86b686",
    6: "#74ac74",
    7: "#62a162",
    8: "#569156",
    9: "#4c7f4c",
  },
  darkslateblue: {
    0: "#8a80c7",
    1: "#786cbe",
    2: "#6558b6",
    3: "#5749a8",
    4: "#4d4194",
    5: "#423881",
    6: "#38306d",
    7: "#2e2759",
    8: "#241e46",
    9: "#1a1632",
  },
  darkslategray: {
    0: "#5e9e9e",
    1: "#538d8d",
    2: "#497b7b",
    3: "#3e6969",
    4: "#345757",
    5: "#294646",
    6: "#1f3434",
    7: "#142222",
    8: "#0a1010",
    9: "#000000",
  },
  darkslategrey: {
    0: "#5e9e9e",
    1: "#538d8d",
    2: "#497b7b",
    3: "#3e6969",
    4: "#345757",
    5: "#294646",
    6: "#1f3434",
    7: "#142222",
    8: "#0a1010",
    9: "#000000",
  },
  darkturquoise: {
    0: "#51fcfe",
    1: "#35fcff",
    2: "#18fbfe",
    3: "#00f7fb",
    4: "#00dbdf",
    5: "#00c0c2",
    6: "#00a4a6",
    7: "#00888a",
    8: "#006c6d",
    9: "#005051",
  },
  darkviolet: {
    0: "#cb53fe",
    1: "#c337ff",
    2: "#ba1afe",
    3: "#b100fd",
    4: "#9d00e1",
    5: "#8a00c4",
    6: "#7600a8",
    7: "#62008c",
    8: "#4e006f",
    9: "#3a0053",
  },
  deeppink: {
    0: "#fe93cd",
    1: "#ff77c0",
    2: "#fe5ab3",
    3: "#ff3ea6",
    4: "#ff2299",
    5: "#ff058c",
    6: "#e8007d",
    7: "#cc006e",
    8: "#af005f",
    9: "#93004f",
  },
  deepskyblue: {
    0: "#7fdfff",
    1: "#63d7ff",
    2: "#46d0ff",
    3: "#2ac9ff",
    4: "#0ec2fe",
    5: "#00b4f0",
    6: "#009fd4",
    7: "#0089b8",
    8: "#00749b",
    9: "#005f7f",
  },
  dimgray: {
    0: "#a8a8a8",
    1: "#9a9a9a",
    2: "#8c8c8c",
    3: "#7e7e7e",
    4: "#707070",
    5: "#616161",
    6: "#535353",
    7: "#454545",
    8: "#373737",
    9: "#292929",
  },
  dimgrey: {
    0: "#a8a8a8",
    1: "#9a9a9a",
    2: "#8c8c8c",
    3: "#7e7e7e",
    4: "#707070",
    5: "#616161",
    6: "#535353",
    7: "#454545",
    8: "#373737",
    9: "#292929",
  },
  dodgerblue: {
    0: "#9dceff",
    1: "#81c0ff",
    2: "#64b2ff",
    3: "#48a4ff",
    4: "#2c96ff",
    5: "#0f89fe",
    6: "#007af2",
    7: "#006cd6",
    8: "#005eb9",
    9: "#004f9d",
  },
  firebrick: {
    0: "#e36f6f",
    1: "#df5858",
    2: "#da4040",
    3: "#d52828",
    4: "#bd2424",
    5: "#a61f1f",
    6: "#8e1b1b",
    7: "#761616",
    8: "#5e1212",
    9: "#460d0d",
  },
  floralwhite: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fffefe",
    5: "#fff5e1",
    6: "#ffebc5",
    7: "#ffe2a9",
    8: "#fed88c",
    9: "#ffcf70",
  },
  forestgreen: {
    0: "#56d556",
    1: "#3fd03f",
    2: "#2fc32f",
    3: "#2aad2a",
    4: "#249624",
    5: "#1f7f1f",
    6: "#196819",
    7: "#145214",
    8: "#0e3b0e",
    9: "#082408",
  },
  gainsboro: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#f1f1f1",
    4: "#e3e3e3",
    5: "#d4d4d4",
    6: "#c6c6c6",
    7: "#b8b8b8",
    8: "#aaaaaa",
    9: "#9c9c9c",
  },
  ghostwhite: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#ffffff",
    5: "#e9e9ff",
    6: "#cdcdfe",
    7: "#b1b1ff",
    8: "#9494ff",
    9: "#7878ff",
  },
  gold: {
    0: "#ffeb7f",
    1: "#ffe663",
    2: "#ffe246",
    3: "#ffdd2a",
    4: "#fed90e",
    5: "#f0cb00",
    6: "#d4b300",
    7: "#b89b00",
    8: "#9b8300",
    9: "#7f6b00",
  },
  goldenrod: {
    0: "#eed18b",
    1: "#eac872",
    2: "#e6be5a",
    3: "#e3b541",
    4: "#dfab28",
    5: "#cd9b1e",
    6: "#b4881a",
    7: "#9c7616",
    8: "#836313",
    9: "#6a500f",
  },
  greenyellow: {
    0: "#dfffae",
    1: "#d4fe92",
    2: "#c8ff75",
    3: "#bdff59",
    4: "#b2ff3d",
    5: "#a7ff20",
    6: "#9cff04",
    7: "#8ce700",
    8: "#7aca00",
    9: "#69ae00",
  },
  honeydew: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fefffe",
    5: "#e1ffe1",
    6: "#c5ffc5",
    7: "#a9ffa9",
    8: "#8cfe8c",
    9: "#70ff70",
  },
  hotpink: {
    0: "#ffe8f3",
    1: "#ffcce5",
    2: "#ffafd7",
    3: "#ff93c9",
    4: "#ff77bb",
    5: "#fe5aac",
    6: "#ff3e9e",
    7: "#ff2290",
    8: "#ff0582",
    9: "#e80074",
  },
  indianred: {
    0: "#eabdbd",
    1: "#e4a7a7",
    2: "#dd9292",
    3: "#d67c7c",
    4: "#d06666",
    5: "#c95151",
    6: "#c23b3b",
    7: "#ad3535",
    8: "#972e2e",
    9: "#812727",
  },
  ivory: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fffffe",
    5: "#ffffe1",
    6: "#ffffc5",
    7: "#ffffa9",
    8: "#fefe8c",
    9: "#feff70",
  },
  khaki: {
    0: "#fefefc",
    1: "#fbf9e3",
    2: "#f8f3ca",
    3: "#f4eeb1",
    4: "#f1e898",
    5: "#eee37f",
    6: "#ebdd66",
    7: "#e7d84d",
    8: "#e4d234",
    9: "#dfcb1d",
  },
  lavender: {
    0: "#fffffe",
    1: "#fffffe",
    2: "#fffffe",
    3: "#fffffe",
    4: "#f1f1fc",
    5: "#dadaf7",
    6: "#c2c2f2",
    7: "#aaaaee",
    8: "#9393e9",
    9: "#7b7be4",
  },
  lavenderblush: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fffefe",
    5: "#ffe1eb",
    6: "#ffc5d8",
    7: "#ffa9c5",
    8: "#fe8cb2",
    9: "#ff70a0",
  },
  lawngreen: {
    0: "#bcff7c",
    1: "#aeff60",
    2: "#9fff43",
    3: "#91ff27",
    4: "#83fe0b",
    5: "#75ed00",
    6: "#67d100",
    7: "#59b500",
    8: "#4b9800",
    9: "#3d7c00",
  },
  lemonchiffon: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fffef7",
    4: "#fffbdb",
    5: "#fff8be",
    6: "#fff5a2",
    7: "#fff286",
    8: "#fff069",
    9: "#feed4d",
  },
  lightblue: {
    0: "#fffefe",
    1: "#f8fcfd",
    2: "#e3f1f6",
    3: "#cde7ef",
    4: "#b7dde9",
    5: "#a2d2e2",
    6: "#8cc8dc",
    7: "#76bed5",
    8: "#61b3ce",
    9: "#4ba9c8",
  },
  lightcoral: {
    0: "#fdf2f2",
    1: "#fad8d8",
    2: "#f7bfbf",
    3: "#f4a6a6",
    4: "#f18c8c",
    5: "#ee7373",
    6: "#eb5959",
    7: "#e84040",
    8: "#e52727",
    9: "#d71919",
  },
  lightcyan: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#eeffff",
    5: "#d1fefe",
    6: "#b5ffff",
    7: "#99feff",
    8: "#7cfeff",
    9: "#60feff",
  },
  lightgoldenrodyellow: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fefef8",
    4: "#fbfbde",
    5: "#f8f8c5",
    6: "#f5f5ab",
    7: "#f2f292",
    8: "#f0f078",
    9: "#eded5f",
  },
  lightgray: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#f6f6f6",
    3: "#e8e8e8",
    4: "#dadada",
    5: "#cbcbcb",
    6: "#bdbdbd",
    7: "#afafaf",
    8: "#a1a1a1",
    9: "#939393",
  },
  lightgrey: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#f6f6f6",
    3: "#e8e8e8",
    4: "#dadada",
    5: "#cbcbcb",
    6: "#bdbdbd",
    7: "#afafaf",
    8: "#a1a1a1",
    9: "#939393",
  },
  lightgreen: {
    0: "#fefefe",
    1: "#e5fbe5",
    2: "#cdf7cd",
    3: "#b4f3b4",
    4: "#9cef9c",
    5: "#83ec83",
    6: "#6be86b",
    7: "#52e452",
    8: "#3ae03a",
    9: "#21dc21",
  },
  lightpink: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#fffcfd",
    3: "#ffe0e5",
    4: "#fec4cd",
    5: "#ffa7b4",
    6: "#fe8b9c",
    7: "#ff6f84",
    8: "#ff526c",
    9: "#ff3654",
  },
  lightsalmon: {
    0: "#fffbf9",
    1: "#ffe6dd",
    2: "#ffd2c0",
    3: "#ffbea4",
    4: "#feaa88",
    5: "#ff956b",
    6: "#fe814f",
    7: "#ff6d33",
    8: "#ff5916",
    9: "#f94700",
  },
  lightseagreen: {
    0: "#6ce4de",
    1: "#54e0d8",
    2: "#3cdcd3",
    3: "#26d6cc",
    4: "#22beb5",
    5: "#1da59e",
    6: "#198d87",
    7: "#157570",
    8: "#105d59",
    9: "#0c4542",
  },
  lightskyblue: {
    0: "#fffefe",
    1: "#e6f4fd",
    2: "#cbe9fc",
    3: "#afdefb",
    4: "#94d3fa",
    5: "#79c8f9",
    6: "#5ebdf8",
    7: "#43b2f7",
    8: "#27a7f6",
    9: "#0c9cf4",
  },
  lightslategray: {
    0: "#bfc7cf",
    1: "#afb9c3",
    2: "#9fabb7",
    3: "#8f9dab",
    4: "#7f8f9f",
    5: "#6e8092",
    6: "#627283",
    7: "#566472",
    8: "#4a5662",
    9: "#3d4852",
  },
  lightslategrey: {
    0: "#bfc7cf",
    1: "#afb9c3",
    2: "#9fabb7",
    3: "#8f9dab",
    4: "#7f8f9f",
    5: "#6e8092",
    6: "#627283",
    7: "#566472",
    8: "#4a5662",
    9: "#3d4852",
  },
  lightsteelblue: {
    0: "#ffffff",
    1: "#f5f8fb",
    2: "#e1e9f2",
    3: "#cddaea",
    4: "#b9cbe2",
    5: "#a6bcd9",
    6: "#92add1",
    7: "#7e9ec9",
    8: "#6a8fc0",
    9: "#5680b8",
  },
  lightyellow: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#ffffee",
    5: "#fefed1",
    6: "#ffffb5",
    7: "#feff99",
    8: "#feff7c",
    9: "#feff60",
  },
  limegreen: {
    0: "#98e698",
    1: "#81e081",
    2: "#6ada6a",
    3: "#54d554",
    4: "#3dcf3d",
    5: "#2fc12f",
    6: "#29aa29",
    7: "#249424",
    8: "#1e7d1e",
    9: "#186618",
  },
  linen: {
    0: "#feffff",
    1: "#feffff",
    2: "#feffff",
    3: "#feffff",
    4: "#fcf7f1",
    5: "#f7e8da",
    6: "#f2dac2",
    7: "#eeccaa",
    8: "#e9be93",
    9: "#e4b07b",
  },
  magenta: {
    0: "#ff7ffe",
    1: "#ff63fe",
    2: "#ff46fe",
    3: "#ff2afe",
    4: "#fe0efe",
    5: "#f000f0",
    6: "#d400d4",
    7: "#b800b8",
    8: "#9b009b",
    9: "#7f007f",
  },
  maroon: {
    0: "#ff0000",
    1: "#e30000",
    2: "#c60000",
    3: "#aa0000",
    4: "#8e0000",
    5: "#710000",
    6: "#550000",
    7: "#390000",
    8: "#1c0000",
    9: "#000000",
  },
  mediumaquamarine: {
    0: "#c6ecdf",
    1: "#b0e5d3",
    2: "#9bdec7",
    3: "#86d7bb",
    4: "#70d0af",
    5: "#5bc9a4",
    6: "#45c298",
    7: "#3ab189",
    8: "#339c78",
    9: "#2c8768",
  },
  mediumblue: {
    0: "#4d4dfe",
    1: "#3131ff",
    2: "#1414fe",
    3: "#0000f7",
    4: "#0000db",
    5: "#0000be",
    6: "#0000a2",
    7: "#000086",
    8: "#000069",
    9: "#00004d",
  },
  mediumorchid: {
    0: "#e3baed",
    1: "#d9a3e7",
    2: "#d08de1",
    3: "#c776db",
    4: "#be60d5",
    5: "#b549d0",
    6: "#ab34c9",
    7: "#982eb2",
    8: "#85289c",
    9: "#722285",
  },
  mediumpurple: {
    0: "#dfd5f4",
    1: "#cebfee",
    2: "#bda8e9",
    3: "#ac91e3",
    4: "#9b7bdd",
    5: "#8a64d8",
    6: "#794ed2",
    7: "#6837cc",
    8: "#5b2eb9",
    9: "#5028a2",
  },
  mediumseagreen: {
    0: "#93dab3",
    1: "#7ed3a4",
    2: "#69cc95",
    3: "#53c586",
    4: "#3fbd77",
    5: "#38a86a",
    6: "#31935c",
    7: "#2a7d4f",
    8: "#236842",
    9: "#1b5334",
  },
  mediumslateblue: {
    0: "#dfdafa",
    1: "#c8c1f8",
    2: "#b2a7f5",
    3: "#9c8ef2",
    4: "#8674ef",
    5: "#6f5bec",
    6: "#5941e9",
    7: "#4328e6",
    8: "#3418da",
    9: "#2d15c0",
  },
  mediumspringgreen: {
    0: "#7affcc",
    1: "#5effc1",
    2: "#41ffb6",
    3: "#25ffab",
    4: "#09ffa0",
    5: "#00eb91",
    6: "#00cf7f",
    7: "#00b36e",
    8: "#00965c",
    9: "#007a4b",
  },
  mediumturquoise: {
    0: "#adeae8",
    1: "#97e4e2",
    2: "#80dfdb",
    3: "#69d9d5",
    4: "#53d3cf",
    5: "#3ccec8",
    6: "#2fbeb9",
    7: "#2aa7a3",
    8: "#24918d",
    9: "#1e7a77",
  },
  mediumvioletred: {
    0: "#ef6cbe",
    1: "#ec52b3",
    2: "#ea38a8",
    3: "#e71f9d",
    4: "#d3168d",
    5: "#ba137c",
    6: "#a0106b",
    7: "#860e5a",
    8: "#6d0b49",
    9: "#530837",
  },
  midnightblue: {
    0: "#3636d2",
    1: "#2b2bc1",
    2: "#2525a9",
    3: "#202092",
    4: "#1b1b7b",
    5: "#161664",
    6: "#11114d",
    7: "#0c0c36",
    8: "#06061e",
    9: "#010107",
  },
  mintcream: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#ffffff",
    5: "#e6fff2",
    6: "#cafee4",
    7: "#aeffd6",
    8: "#91ffc8",
    9: "#75ffba",
  },
  mistyrose: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fff0ef",
    5: "#fed7d2",
    6: "#ffbdb6",
    7: "#ffa49a",
    8: "#ff8a7d",
    9: "#ff7161",
  },
  moccasin: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#fffdfb",
    3: "#fff3df",
    4: "#fee9c3",
    5: "#ffdea6",
    6: "#fed48a",
    7: "#ffca6e",
    8: "#ffbf51",
    9: "#ffb535",
  },
  navajowhite: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#fffaf3",
    3: "#ffefd7",
    4: "#ffe3bb",
    5: "#ffd89e",
    6: "#ffcc82",
    7: "#ffc166",
    8: "#feb649",
    9: "#ffaa2d",
  },
  navy: {
    0: "#0000ff",
    1: "#0000e3",
    2: "#0000c6",
    3: "#0000aa",
    4: "#00008e",
    5: "#000071",
    6: "#000055",
    7: "#000039",
    8: "#00001c",
    9: "#000000",
  },
  oldlace: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fefaf3",
    5: "#fbefd8",
    6: "#f9e5be",
    7: "#f7daa4",
    8: "#f5d08a",
    9: "#f3c56f",
  },
  olive: {
    0: "#feff00",
    1: "#e3e300",
    2: "#c6c600",
    3: "#aaaa00",
    4: "#8e8e00",
    5: "#717100",
    6: "#555500",
    7: "#393900",
    8: "#1c1c00",
    9: "#000000",
  },
  olivedrab: {
    0: "#add65a",
    1: "#a2d043",
    2: "#95c631",
    3: "#84b02b",
    4: "#739925",
    5: "#628220",
    6: "#516b1a",
    7: "#405514",
    8: "#2f3e0f",
    9: "#1d2709",
  },
  orangered: {
    0: "#ffa27f",
    1: "#ff8d63",
    2: "#ff7846",
    3: "#ff632a",
    4: "#fe4f0e",
    5: "#f04100",
    6: "#d43900",
    7: "#b83100",
    8: "#9b2a00",
    9: "#7f2200",
  },
  orchid: {
    0: "#f4d5f3",
    1: "#eebeec",
    2: "#e8a8e6",
    3: "#e291df",
    4: "#dc7bd9",
    5: "#d764d2",
    6: "#d14ecc",
    7: "#cb37c5",
    8: "#b72fb2",
    9: "#a0299c",
  },
  palegoldenrod: {
    0: "#ffffff",
    1: "#fefefc",
    2: "#f9f7e5",
    3: "#f5f1cd",
    4: "#f0ebb5",
    5: "#ebe49e",
    6: "#e6de86",
    7: "#e2d86e",
    8: "#ddd157",
    9: "#d8cb3f",
  },
  palegreen: {
    0: "#ffffff",
    1: "#f7fef7",
    2: "#dcfddc",
    3: "#c0fcc0",
    4: "#a5fba5",
    5: "#8afa8a",
    6: "#6ff96f",
    7: "#53f853",
    8: "#38f738",
    9: "#1df61d",
  },
  paleturquoise: {
    0: "#fffefe",
    1: "#fffefe",
    2: "#e9fafa",
    3: "#d2f5f5",
    4: "#baf0f0",
    5: "#a3ebeb",
    6: "#8be6e6",
    7: "#74e1e1",
    8: "#5ddcdc",
    9: "#45d7d7",
  },
  palevioletred: {
    0: "#f4d5df",
    1: "#eebfce",
    2: "#e9a8bd",
    3: "#e391ac",
    4: "#dd7b9b",
    5: "#d8648a",
    6: "#d24e79",
    7: "#cc3768",
    8: "#b92e5b",
    9: "#a22850",
  },
  papayawhip: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fff4e3",
    5: "#fee9c6",
    6: "#ffdeaa",
    7: "#ffd48e",
    8: "#ffc971",
    9: "#ffbe55",
  },
  peachpuff: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#fff0e3",
    4: "#fee1c7",
    5: "#ffd2aa",
    6: "#fec38e",
    7: "#ffb472",
    8: "#ffa555",
    9: "#ff9639",
  },
  peru: {
    0: "#e7c5a4",
    1: "#e1b68d",
    2: "#dba877",
    3: "#d59a60",
    4: "#cf8c4a",
    5: "#c97d34",
    6: "#b26f2e",
    7: "#9c6128",
    8: "#855322",
    9: "#6f451d",
  },
  plum: {
    0: "#fefdfe",
    1: "#f7e9f7",
    2: "#efd4ef",
    3: "#e8bfe8",
    4: "#e0aae0",
    5: "#d995d9",
    6: "#d180d1",
    7: "#ca6bca",
    8: "#c256c2",
    9: "#ba42ba",
  },
  powderblue: {
    0: "#ffffff",
    1: "#fbfdfd",
    2: "#e5f5f7",
    3: "#d0ecf0",
    4: "#bae4e9",
    5: "#a5dbe2",
    6: "#8fd3db",
    7: "#7acad4",
    8: "#64c2ce",
    9: "#4fb9c7",
  },
  rebeccapurple: {
    0: "#a579d2",
    1: "#9763cb",
    2: "#894ec4",
    3: "#7b3db8",
    4: "#6d36a3",
    5: "#5e2f8e",
    6: "#502879",
    7: "#422163",
    8: "#341a4e",
    9: "#261339",
  },
  rosybrown: {
    0: "#ebdede",
    1: "#e1cdcd",
    2: "#d6bbbb",
    3: "#cba9a9",
    4: "#c19797",
    5: "#b68686",
    6: "#ac7474",
    7: "#a16262",
    8: "#915656",
    9: "#7f4c4c",
  },
  royalblue: {
    0: "#afbff2",
    1: "#96acee",
    2: "#7e99ea",
    3: "#6585e6",
    4: "#4d72e2",
    5: "#345fdf",
    6: "#214ed5",
    7: "#1d45bd",
    8: "#1a3ca4",
    9: "#16338c",
  },
  saddlebrown: {
    0: "#e48039",
    1: "#e07020",
    2: "#c9631b",
    3: "#b05718",
    4: "#974b14",
    5: "#7e3e11",
    6: "#65320d",
    7: "#4c260a",
    8: "#331907",
    9: "#1a0d03",
  },
  salmon: {
    0: "#feeeed",
    1: "#fdd6d1",
    2: "#fcbdb6",
    3: "#fba49b",
    4: "#fa8c7f",
    5: "#f97364",
    6: "#f85b48",
    7: "#f7422d",
    8: "#f62912",
    9: "#e41e08",
  },
  sandybrown: {
    0: "#fce8d7",
    1: "#fad9bc",
    2: "#f8c9a2",
    3: "#f6ba87",
    4: "#f4ab6d",
    5: "#f39c52",
    6: "#f18d38",
    7: "#ef7e1d",
    8: "#e16f0f",
    9: "#c6620d",
  },
  seagreen: {
    0: "#6acd96",
    1: "#55c687",
    2: "#40bf78",
    3: "#38aa6a",
    4: "#31955d",
    5: "#2a8050",
    6: "#236b43",
    7: "#1c5535",
    8: "#154028",
    9: "#0e2b1b",
  },
  seashell: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fffdfc",
    5: "#ffecdf",
    6: "#ffdcc3",
    7: "#ffcba7",
    8: "#feba8a",
    9: "#ffaa6e",
  },
  sienna: {
    0: "#d89474",
    1: "#d1835e",
    2: "#cb7248",
    3: "#c16336",
    4: "#ab5730",
    5: "#944c29",
    6: "#7e4123",
    7: "#68351d",
    8: "#522a17",
    9: "#3c1f11",
  },
  silver: {
    0: "#ffffff",
    1: "#f1f1f1",
    2: "#e3e3e3",
    3: "#d5d5d5",
    4: "#c7c7c7",
    5: "#b8b8b8",
    6: "#aaaaaa",
    7: "#9c9c9c",
    8: "#8e8e8e",
    9: "#808080",
  },
  skyblue: {
    0: "#f4fafd",
    1: "#dcf0f9",
    2: "#c3e6f5",
    3: "#abdcf1",
    4: "#93d2ed",
    5: "#7ac9e8",
    6: "#62bfe4",
    7: "#4ab5e0",
    8: "#32abdc",
    9: "#229dcf",
  },
  slateblue: {
    0: "#c2bbea",
    1: "#aea6e4",
    2: "#9b90dd",
    3: "#877ad6",
    4: "#7364d0",
    5: "#604fc9",
    6: "#4d3ac1",
    7: "#4434ac",
    8: "#3c2d96",
    9: "#332680",
  },
  slategray: {
    0: "#b7bfc7",
    1: "#a7b1bb",
    2: "#97a3ae",
    3: "#8795a2",
    4: "#778796",
    5: "#697888",
    6: "#5d6a78",
    7: "#505c68",
    8: "#444e58",
    9: "#384048",
  },
  slategrey: {
    0: "#b7bfc7",
    1: "#a7b1bb",
    2: "#97a3ae",
    3: "#8795a2",
    4: "#778796",
    5: "#697888",
    6: "#5d6a78",
    7: "#505c68",
    8: "#444e58",
    9: "#384048",
  },
  snow: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#ffffff",
    5: "#ffebeb",
    6: "#fecfcf",
    7: "#ffb3b3",
    8: "#ff9696",
    9: "#ff7a7a",
  },
  springgreen: {
    0: "#7fffbf",
    1: "#63ffb0",
    2: "#46ffa2",
    3: "#2aff94",
    4: "#0efe86",
    5: "#00f077",
    6: "#00d469",
    7: "#00b85b",
    8: "#009b4d",
    9: "#007f3f",
  },
  steelblue: {
    0: "#9fbfd9",
    1: "#8bb1d1",
    2: "#76a4ca",
    3: "#6296c2",
    4: "#4e88ba",
    5: "#427aa9",
    6: "#3a6b95",
    7: "#325d81",
    8: "#2a4e6c",
    9: "#223f58",
  },
  tan: {
    0: "#f5efe7",
    1: "#ede2d3",
    2: "#e5d5be",
    3: "#ddc7aa",
    4: "#d5ba96",
    5: "#cead81",
    6: "#c6a06d",
    7: "#be9259",
    8: "#b48546",
    9: "#9f763e",
  },
  thistle: {
    0: "#ffffff",
    1: "#fdfcfd",
    2: "#f2ebf2",
    3: "#e8d9e8",
    4: "#ddc7dd",
    5: "#d2b6d2",
    6: "#c7a4c7",
    7: "#bd92bd",
    8: "#b281b2",
    9: "#a76fa7",
  },
  tomato: {
    0: "#ffcfc6",
    1: "#ffb7aa",
    2: "#ff9f8d",
    3: "#ff8771",
    4: "#fe6f55",
    5: "#ff5638",
    6: "#fe3e1c",
    7: "#ff2600",
    8: "#e22200",
    9: "#c61e00",
  },
  turquoise: {
    0: "#adf1ea",
    1: "#95ede4",
    2: "#7ce9de",
    3: "#64e5d8",
    4: "#4ce1d2",
    5: "#33decd",
    6: "#22d3c1",
    7: "#1ebaab",
    8: "#1aa294",
    9: "#168a7e",
  },
  wheat: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#fdf9f1",
    3: "#f9eed8",
    4: "#f6e3bf",
    5: "#f3d8a6",
    6: "#f0cd8d",
    7: "#ecc274",
    8: "#e9b75b",
    9: "#e6ad42",
  },
  whitesmoke: {
    0: "#ffffff",
    1: "#ffffff",
    2: "#ffffff",
    3: "#ffffff",
    4: "#fcfcfc",
    5: "#ededed",
    6: "#dfdfdf",
    7: "#d1d1d1",
    8: "#c3c3c3",
    9: "#b5b5b5",
  },
  yellowgreen: {
    0: "#cce698",
    1: "#c1e081",
    2: "#b6da6a",
    3: "#aad554",
    4: "#9fcf3d",
    5: "#91c12f",
    6: "#80aa29",
    7: "#6f9424",
    8: "#5e7d1e",
    9: "#4d6618",
  },
};

export default colors;
