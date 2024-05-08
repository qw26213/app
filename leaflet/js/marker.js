var markers = [
  "81.027250,43.926750",
  "81.027300,43.926716",
  "81.027214,43.926567",
  "81.027050,43.926550",
  "81.026860,43.926450",
  "81.026850,43.926450",
  "81.026800,43.926483",
  "81.026970,43.926533",
  "81.027100,43.926582",
  "81.027270,43.926600",
  "81.027250,43.926750",
  "81.027350,43.926815",
  "81.027310,43.926735",
  "81.027240,43.926582",
  "81.027130,43.926400",
  "81.027000,43.926250",
  "81.026820,43.926018",
  "81.026580,43.925730",
  "81.026370,43.925470",
  "81.026170,43.925232",
  "81.026020,43.925034",
  "81.025830,43.924780",
  "81.025665,43.924600",
  "81.025820,43.924465",
  "81.026050,43.924350",
  "81.026310,43.924232",
  "81.026550,43.924150",
  "81.026830,43.924034",
  "81.027084,43.923916",
  "81.027310,43.923817",
  "81.027620,43.923700",
  "81.027885,43.923584",
  "81.028080,43.923500",
  "81.028250,43.923416",
  "81.028210,43.923300",
  "81.028050,43.923150",
  "81.027930,43.922985",
  "81.027820,43.922832",
  "81.027664,43.922670",
  "81.027550,43.922516",
  "81.027450,43.922400",
  "81.027300,43.922220",
  "81.027180,43.922085",
  "81.027084,43.921980",
  "81.026970,43.921818",
  "81.026850,43.921684",
  "81.026730,43.921530",
  "81.026760,43.921500",
  "81.026970,43.921400",
  "81.027130,43.921333",
  "81.027310,43.921270",
  "81.027466,43.921200",
  "81.027650,43.921116",
  "81.027800,43.921050",
  "81.027985,43.920982",
  "81.028130,43.920918",
  "81.028300,43.920850",
  "81.028480,43.920765",
  "81.028650,43.920685",
  "81.028820,43.920616",
  "81.028984,43.920550",
  "81.029150,43.920483",
  "81.029200,43.920383",
  "81.029080,43.920265",
  "81.029000,43.920185",
  "81.028950,43.920185",
  "81.028830,43.920235",
  "81.028660,43.920300",
  "81.028520,43.920383",
  "81.028350,43.920450",
  "81.028180,43.920517",
  "81.028015,43.920580",
  "81.027850,43.920666",
  "81.027700,43.920734",
  "81.027534,43.920800",
  "81.027370,43.920868",
  "81.027180,43.920933",
  "81.027016,43.921000",
  "81.026850,43.921080",
  "81.026700,43.921150",
  "81.026535,43.921215",
  "81.026480,43.921150",
  "81.026634,43.921100",
  "81.026800,43.921017",
  "81.026970,43.920950",
  "81.027130,43.920883",
  "81.027300,43.920820",
  "81.027466,43.920734",
  "81.027630,43.920666",
  "81.027800,43.920600",
  "81.027970,43.920532",
  "81.028130,43.920450",
  "81.028320,43.920383",
  "81.028480,43.920300",
  "81.028630,43.920246",
  "81.028820,43.920170",
  "81.028930,43.920100",
  "81.028830,43.920050",
  "81.028660,43.920130",
  "81.028500,43.920216",
  "81.028336,43.920284",
  "81.028170,43.920350",
  "81.028000,43.920433",
  "81.027830,43.920500",
  "81.027690,43.920567",
  "81.027520,43.920630",
  "81.027350,43.920700",
  "81.027180,43.920784",
  "81.027016,43.920850",
  "81.026830,43.920933",
  "81.026665,43.921000",
  "81.026520,43.921066",
  "81.026400,43.921150",
  "81.026535,43.921200",
  "81.026720,43.921116",
  "81.026920,43.921017",
  "81.027070,43.920967",
  "81.027240,43.920883",
  "81.027430,43.920800",
  "81.027565,43.920734",
  "81.027730,43.920666",
  "81.027910,43.920580",
  "81.028080,43.920517",
  "81.028240,43.920450",
  "81.028420,43.920370",
  "81.028580,43.920320",
  "81.028630,43.920284",
  "81.028750,43.920235",
  "81.028910,43.920170",
  "81.028930,43.920086",
  "81.028885,43.920086",
  "81.028730,43.920150",
  "81.028564,43.920216",
  "81.028420,43.920284",
  "81.028250,43.920350",
  "81.028080,43.920418",
  "81.027930,43.920483",
  "81.027760,43.920550",
  "81.027600,43.920630",
  "81.027435,43.920700",
  "81.027270,43.920765",
  "81.027115,43.920834",
  "81.026950,43.920900",
  "81.026760,43.920982",
  "81.026620,43.921050",
  "81.026450,43.921116",
  "81.026430,43.921116",
  "81.026380,43.921066",
  "81.026480,43.921032",
  "81.026650,43.920967",
  "81.026800,43.920900",
  "81.026970,43.920834",
  "81.027130,43.920750",
  "81.027300,43.920685",
  "81.027466,43.920616",
  "81.027630,43.920550",
  "81.027800,43.920483",
  "81.027950,43.920400",
  "81.028130,43.920334",
  "81.028300,43.920265",
  "81.028450,43.920200",
  "81.028620,43.920130",
  "81.028786,43.920050",
  "81.028800,43.920033",
  "81.028870,43.920000",
  "81.028770,43.919968",
  "81.028630,43.920033",
  "81.028450,43.920100",
  "81.028280,43.920170",
  "81.028130,43.920235",
  "81.027970,43.920300",
  "81.027790,43.920383",
  "81.027630,43.920450",
  "81.027466,43.920517",
  "81.027300,43.920580",
  "81.027130,43.920666",
  "81.026985,43.920715",
  "81.026820,43.920800",
  "81.026650,43.920868",
  "81.026500,43.920933",
  "81.026350,43.920982",
  "81.026430,43.920883",
  "81.026600,43.920820",
  "81.026750,43.920750",
  "81.026920,43.920685",
  "81.027084,43.920616",
  "81.027250,43.920532",
  "81.027430,43.920467",
  "81.027565,43.920400",
  "81.027730,43.920334",
  "81.027900,43.920265",
  "81.028070,43.920200",
  "81.028240,43.920130",
  "81.028400,43.920050",
  "81.028550,43.919983",
  "81.028720,43.919920",
  "81.028820,43.919983",
  "81.028700,43.920033",
  "81.028550,43.920100",
  "81.028400,43.920170",
  "81.028240,43.920235",
  "81.028070,43.920320",
  "81.027910,43.920383",
  "81.027720,43.920467",
  "81.027565,43.920532",
  "81.027400,43.920600",
  "81.027250,43.920666",
  "81.027070,43.920734",
  "81.026900,43.920820",
  "81.026760,43.920868",
  "81.026580,43.920950",
  "81.026410,43.921017",
  "81.026310,43.920982",
  "81.026410,43.920933",
  "81.026600,43.920868",
  "81.026750,43.920800",
  "81.026920,43.920734",
  "81.027084,43.920666",
  "81.027250,43.920580",
  "81.027430,43.920517",
  "81.027580,43.920450",
  "81.027756,43.920383",
  "81.027900,43.920320",
  "81.028070,43.920235",
  "81.028240,43.920170",
  "81.028400,43.920100",
  "81.028550,43.920033",
  "81.028720,43.919950",
  "81.028770,43.919870",
  "81.028650,43.919884",
  "81.028500,43.919950",
  "81.028336,43.920033",
  "81.028170,43.920100",
  "81.028000,43.920170",
  "81.027830,43.920246",
  "81.027664,43.920320",
  "81.027520,43.920383",
  "81.027350,43.920450",
  "81.027180,43.920517",
  "81.027016,43.920580",
  "81.026850,43.920666",
  "81.026680,43.920734",
  "81.026520,43.920800",
  "81.026350,43.920868",
  "81.026230,43.920900",
  "81.026470,43.920784",
  "81.026634,43.920715",
  "81.026800,43.920650",
  "81.026970,43.920580",
  "81.027150,43.920500",
  "81.027310,43.920433",
  "81.027466,43.920383",
  "81.027630,43.920300",
  "81.027790,43.920235",
  "81.027970,43.920170",
  "81.028130,43.920086",
  "81.028300,43.920017",
  "81.028465,43.919950",
  "81.028630,43.919884",
  "81.028730,43.919800",
  "81.028630,43.919765",
  "81.028435,43.919870",
  "81.028270,43.919933",
  "81.028080,43.920017",
  "81.027910,43.920067",
  "81.027760,43.920130",
  "81.027600,43.920216",
  "81.027435,43.920284",
  "81.027270,43.920350",
  "81.027100,43.920418",
  "81.026930,43.920483",
  "81.026760,43.920567",
  "81.026620,43.920630",
  "81.026430,43.920700",
  "81.026276,43.920784",
  "81.026130,43.920784",
  "81.026230,43.920715",
  "81.026400,43.920650",
  "81.026566,43.920580",
  "81.026730,43.920517",
  "81.026900,43.920450",
  "81.027070,43.920383",
  "81.027214,43.920320",
  "81.027380,43.920235",
  "81.027565,43.920170",
  "81.027730,43.920100",
  "81.027885,43.920033",
  "81.028050,43.919968",
  "81.028210,43.919884",
  "81.028380,43.919815",
  "81.028550,43.919750",
  "81.028660,43.919765",
  "81.028660,43.919800",
  "81.028435,43.919900",
  "81.028280,43.919983",
  "81.028114,43.920050",
  "81.027950,43.920116",
  "81.027800,43.920185",
  "81.027630,43.920265",
  "81.027466,43.920334",
  "81.027300,43.920400",
  "81.027130,43.920467",
  "81.026970,43.920550",
  "81.026800,43.920616",
  "81.026634,43.920685",
  "81.026480,43.920750",
  "81.026310,43.920820",
  "81.026170,43.920820",
  "81.026280,43.920750",
  "81.026430,43.920685",
  "81.026600,43.920616",
  "81.026790,43.920550",
  "81.026950,43.920483",
  "81.027100,43.920418",
  "81.027280,43.920334",
  "81.027435,43.920265",
  "81.027580,43.920200",
  "81.027756,43.920130",
  "81.027910,43.920067",
  "81.028070,43.920000",
  "81.028210,43.919933",
  "81.028420,43.919850",
  "81.028550,43.919785",
  "81.028580,43.919680",
  "81.028450,43.919750",
  "81.028300,43.919800",
  "81.028114,43.919884",
  "81.027950,43.919950",
  "81.027800,43.920017",
  "81.027620,43.920086",
  "81.027450,43.920170",
  "81.027280,43.920235",
  "81.027115,43.920300",
  "81.026950,43.920383",
  "81.026790,43.920450",
  "81.026600,43.920517",
  "81.026430,43.920580",
  "81.026276,43.920650",
  "81.026110,43.920715",
  "81.026115,43.920650",
  "81.026276,43.920580",
  "81.026410,43.920517",
  "81.026580,43.920450",
  "81.026750,43.920383",
  "81.026920,43.920320",
  "81.027084,43.920235",
  "81.027250,43.920170",
  "81.027430,43.920100",
  "81.027565,43.920033",
  "81.027730,43.919968",
  "81.027900,43.919900",
  "81.028070,43.919815",
  "81.028240,43.919750",
  "81.028400,43.919680",
  "81.028480,43.919650",
  "81.028480,43.919550",
  "81.028350,43.919617",
  "81.028170,43.919680",
  "81.028015,43.919750",
  "81.027850,43.919815",
  "81.027690,43.919900",
  "81.027534,43.919968",
  "81.027370,43.920033",
  "81.027200,43.920100",
  "81.027016,43.920170",
  "81.026850,43.920235",
  "81.026700,43.920320",
  "81.026535,43.920383",
  "81.026370,43.920450",
  "81.026200,43.920517",
  "81.026050,43.920580",
  "81.026050,43.920685",
  "81.026130,43.920685",
  "81.026340,43.920600",
  "81.026470,43.920532",
  "81.026634,43.920467",
  "81.026820,43.920400",
  "81.026985,43.920334",
  "81.027130,43.920265",
  "81.027280,43.920185",
  "81.027450,43.920116",
  "81.027630,43.920033",
  "81.027800,43.919968",
  "81.027970,43.919900",
  "81.028130,43.919834",
  "81.028300,43.919750",
  "81.028465,43.919680",
  "81.028534,43.919600",
  "81.028500,43.919600",
  "81.028270,43.919680",
  "81.028100,43.919750",
  "81.027950,43.919815",
  "81.027790,43.919884",
  "81.027630,43.919950",
  "81.027466,43.920033",
  "81.027280,43.920100",
  "81.027130,43.920170",
  "81.026970,43.920235",
  "81.026800,43.920300",
  "81.026634,43.920383",
  "81.026480,43.920450",
  "81.026300,43.920517",
  "81.026130,43.920600",
  "81.025986,43.920616",
  "81.026030,43.920567",
  "81.026215,43.920467",
  "81.026380,43.920400",
  "81.026550,43.920334",
  "81.026720,43.920265",
  "81.026860,43.920185",
  "81.027030,43.920116",
  "81.027200,43.920050",
  "81.027370,43.919983",
  "81.027534,43.919920",
  "81.027700,43.919850",
  "81.027850,43.919765",
  "81.028015,43.919700",
  "81.028180,43.919632",
  "81.028350,43.919567",
  "81.028465,43.919483",
  "81.028320,43.919500",
  "81.028180,43.919567",
  "81.028030,43.919632",
  "81.027850,43.919700",
  "81.027720,43.919765",
  "81.027550,43.919834",
  "81.027380,43.919900",
  "81.027214,43.919983",
  "81.027050,43.920050",
  "81.026886,43.920116",
  "81.026700,43.920185",
  "81.026550,43.920246",
  "81.026370,43.920334",
  "81.026215,43.920400",
  "81.026070,43.920467",
  "81.026000,43.920483",
  "81.026050,43.920383",
  "81.026230,43.920300",
  "81.026370,43.920246",
  "81.026535,43.920170",
  "81.026720,43.920100",
  "81.026850,43.920033",
  "81.027016,43.919968",
  "81.027200,43.919884",
  "81.027350,43.919815",
  "81.027500,43.919750",
  "81.027690,43.919680",
  "81.027850,43.919617",
  "81.028015,43.919550",
  "81.028170,43.919483",
  "81.028300,43.919420",
  "81.028336,43.919533",
  "81.028150,43.919617",
  "81.027985,43.919680",
  "81.027820,43.919765",
  "81.027630,43.919834",
  "81.027480,43.919900",
  "81.027310,43.919968",
  "81.027150,43.920033",
  "81.026985,43.920116",
  "81.026820,43.920185",
  "81.026650,43.920246",
  "81.026500,43.920320",
  "81.026340,43.920383",
  "81.026170,43.920450",
  "81.026000,43.920532",
  "81.025930,43.920483",
  "81.026050,43.920433",
  "81.026215,43.920350",
  "81.026370,43.920284",
  "81.026550,43.920216",
  "81.026700,43.920150",
  "81.026860,43.920067",
  "81.027016,43.920000",
  "81.027180,43.919933",
  "81.027350,43.919870",
  "81.027500,43.919800",
  "81.027690,43.919735",
  "81.027820,43.919666",
  "81.028000,43.919600",
  "81.028170,43.919518",
  "81.028320,43.919468",
  "81.028350,43.919450",
  "81.028210,43.919434",
  "81.028070,43.919483",
  "81.027900,43.919550",
  "81.027730,43.919617",
  "81.027565,43.919700",
  "81.027400,43.919765",
  "81.027250,43.919834",
  "81.027084,43.919900",
  "81.026920,43.919968",
  "81.026760,43.920033",
  "81.026600,43.920116",
  "81.026450,43.920170",
  "81.026280,43.920246",
  "81.026115,43.920320",
  "81.025950,43.920383",
  "81.025850,43.920450",
  "81.025900,43.920517",
  "81.025800,43.920418",
  "81.025780,43.920383",
  "81.025890,43.920370",
  "81.026020,43.920320",
  "81.026170,43.920235",
  "81.026340,43.920170",
  "81.026500,43.920100",
  "81.026650,43.920033",
  "81.026820,43.919968",
  "81.026985,43.919900",
  "81.027130,43.919834",
  "81.027300,43.919765",
  "81.027466,43.919700",
  "81.027630,43.919617",
  "81.027790,43.919550",
  "81.027950,43.919483",
  "81.028100,43.919420",
  "81.028270,43.919350",
  "81.028280,43.919350",
  "81.028210,43.919300",
  "81.028130,43.919334",
  "81.027970,43.919400",
  "81.027800,43.919468",
  "81.027650,43.919550",
  "81.027480,43.919617",
  "81.027336,43.919680",
  "81.027170,43.919750",
  "81.027016,43.919815",
  "81.026850,43.919884",
  "81.026700,43.919950",
  "81.026535,43.920000",
  "81.026370,43.920086",
  "81.026200,43.920170",
  "81.026070,43.920216",
  "81.025900,43.920284",
  "81.025734,43.920320",
  "81.025780,43.920246",
  "81.025860,43.920216",
  "81.026020,43.920130",
  "81.026184,43.920067",
  "81.026350,43.920000",
  "81.026500,43.919933",
  "81.026680,43.919870",
  "81.026820,43.919800",
  "81.026970,43.919735",
  "81.027130,43.919650",
  "81.027280,43.919600",
  "81.027466,43.919533",
  "81.027620,43.919468",
  "81.027756,43.919400",
  "81.027930,43.919334",
  "81.028080,43.919250",
  "81.028240,43.919216",
  "81.028280,43.919266",
  "81.028240,43.919334",
  "81.028130,43.919384",
  "81.027970,43.919450",
  "81.027800,43.919518",
  "81.027650,43.919582",
  "81.027480,43.919650",
  "81.027336,43.919716",
  "81.027170,43.919785",
  "81.027000,43.919870",
  "81.026850,43.919933",
  "81.026680,43.920000",
  "81.026520,43.920050",
  "81.026350,43.920116",
  "81.026184,43.920185",
  "81.026030,43.920265",
  "81.025860,43.920334",
  "81.025764,43.920300",
  "81.025900,43.920235",
  "81.026070,43.920150",
  "81.026230,43.920086",
  "81.026400,43.920017",
  "81.026566,43.919950",
  "81.026730,43.919884",
  "81.026886,43.919815",
  "81.027050,43.919735",
  "81.027200,43.919666",
  "81.027370,43.919600",
  "81.027534,43.919533",
  "81.027690,43.919468",
  "81.027850,43.919400",
  "81.028015,43.919334",
  "81.028180,43.919250",
  "81.028210,43.919180",
  "81.028130,43.919216",
  "81.027930,43.919285",
  "81.027760,43.919350",
  "81.027600,43.919420",
  "81.027450,43.919500",
  "81.027300,43.919567",
  "81.027115,43.919632",
  "81.026970,43.919700",
  "81.026800,43.919765",
  "81.026634,43.919834",
  "81.026480,43.919900",
  "81.026310,43.919968",
  "81.026130,43.920050",
  "81.025970,43.920116",
  "81.025800,43.920185",
  "81.025665,43.920216",
  "81.025700,43.920150",
  "81.025750,43.920130",
  "81.025920,43.920050",
  "81.026085,43.919983",
  "81.026230,43.919920",
  "81.026380,43.919850",
  "81.026550,43.919785",
  "81.026720,43.919716",
  "81.026860,43.919650",
  "81.027016,43.919582",
  "81.027170,43.919518",
  "81.027336,43.919450",
  "81.027500,43.919384",
  "81.027650,43.919315",
  "81.027820,43.919250",
  "81.027970,43.919180",
  "81.028080,43.919150",
  "81.028070,43.919067",
  "81.027930,43.919117",
  "81.027760,43.919180",
  "81.027600,43.919250",
  "81.027435,43.919315",
  "81.027270,43.919384",
  "81.027115,43.919450",
  "81.026950,43.919518",
  "81.026886,43.919550",
  "81.026730,43.919617",
  "81.026566,43.919680",
  "81.026400,43.919750",
  "81.026250,43.919815",
  "81.026085,43.919884",
  "81.025920,43.919968",
  "81.025750,43.920033",
  "81.025600,43.920100",
  "81.025720,43.919968",
  "81.025900,43.919900",
  "81.026070,43.919815",
  "81.026230,43.919750",
  "81.026400,43.919680",
  "81.026566,43.919617",
  "81.026730,43.919550",
  "81.026900,43.919483",
  "81.027050,43.919400",
  "81.027214,43.919334",
  "81.027380,43.919266",
  "81.027550,43.919200",
  "81.027700,43.919132",
  "81.027870,43.919067",
  "81.027985,43.919000",
  "81.028070,43.919100",
  "81.027950,43.919150",
  "81.027800,43.919216",
  "81.027630,43.919285",
  "81.027480,43.919350",
  "81.027310,43.919420",
  "81.027130,43.919483",
  "81.026985,43.919550",
  "81.026850,43.919617",
  "81.026680,43.919680",
  "81.026500,43.919765",
  "81.026370,43.919815",
  "81.026200,43.919884",
  "81.026020,43.919968",
  "81.025890,43.920033",
  "81.025700,43.920100",
  "81.025635,43.920185",
  "81.025680,43.920185",
  "81.025850,43.920130",
  "81.025970,43.920067",
  "81.026110,43.920017",
  "81.026280,43.919950",
  "81.026450,43.919884",
  "81.026620,43.919800",
  "81.026790,43.919735",
  "81.026950,43.919666",
  "81.027115,43.919600",
  "81.027280,43.919518",
  "81.027430,43.919468",
  "81.027550,43.919420",
  "81.027720,43.919350",
  "81.027885,43.919266",
  "81.028050,43.919200",
  "81.028180,43.919180",
  "81.028200,43.919266",
  "81.028015,43.919334",
  "81.027870,43.919400",
  "81.027700,43.919468",
  "81.027550,43.919533",
  "81.027380,43.919600",
  "81.027214,43.919666",
  "81.027070,43.919735",
  "81.026886,43.919815",
  "81.026730,43.919884",
  "81.026566,43.919950",
  "81.026400,43.920017",
  "81.026230,43.920086",
  "81.026085,43.920150",
  "81.025920,43.920216",
  "81.025830,43.920265",
  "81.025635,43.920185",
  "81.025600,43.920130",
  "81.025580,43.920086",
  "81.025600,43.920086",
  "81.025536,43.920086",
  "81.025665,43.920216",
  "81.025800,43.920370",
  "81.025930,43.920532",
  "81.026110,43.920750",
  "81.026230,43.920900",
  "81.026280,43.920967",
  "81.026410,43.921150",
  "81.026600,43.921368",
  "81.026750,43.921550",
  "81.026900,43.921750",
  "81.027070,43.921950",
  "81.027240,43.922150",
  "81.027430,43.922367",
  "81.027600,43.922585",
  "81.027760,43.922800",
  "81.027930,43.923035",
  "81.028130,43.923250",
  "81.028250,43.923380",
  "81.028114,43.923500",
  "81.027885,43.923600",
  "81.027565,43.923733",
  "81.027240,43.923880",
  "81.026886,43.924015",
  "81.026550,43.924168",
  "81.026200,43.924300",
  "81.025850,43.924446",
  "81.025635,43.924550",
  "81.025750,43.924717",
  "81.025950,43.924965",
  "81.026170,43.925250",
  "81.026370,43.925484",
  "81.026600,43.925762",
  "81.026820,43.926033",
  "81.027030,43.926285",
  "81.027150,43.926450",
  "81.027250,43.926582",
  "81.027310,43.926735",
  "81.027370,43.926850",
  "81.027310,43.926785",
  "81.027250,43.926650",
  "81.027180,43.926500",
  "81.027050,43.926334",
  "81.026920,43.926150",
  "81.026730,43.925920",
  "81.026520,43.925667",
  "81.026310,43.925415",
  "81.026130,43.925182",
  "81.025930,43.924915",
  "81.025734,43.924683",
  "81.025665,43.924515",
  "81.025930,43.924435",
  "81.026215,43.924316",
  "81.026535,43.924183",
  "81.026860,43.924050",
  "81.027170,43.923916",
  "81.027435,43.923800",
  "81.027720,43.923683",
  "81.027985,43.923565",
  "81.028150,43.923485",
  "81.028280,43.923400",
  "81.028150,43.923267",
  "81.028030,43.923120",
  "81.027870,43.922916",
  "81.027730,43.922750",
  "81.027580,43.922565",
  "81.027430,43.922367",
  "81.027280,43.922200",
  "81.027170,43.922066",
  "81.027000,43.921867",
  "81.026830,43.921665",
  "81.026680,43.921467",
  "81.026500,43.921250",
  "81.026340,43.921032",
  "81.026170,43.920834",
  "81.026020,43.920630",
  "81.025830,43.920418",
  "81.025700,43.920246",
  "81.025600,43.920116",
  "81.025665,43.920100",
  "81.025750,43.920067",
  "81.025920,43.920000",
  "81.026085,43.919920",
  "81.026250,43.919850",
  "81.026410,43.919785",
  "81.026580,43.919716",
  "81.026750,43.919650",
  "81.026820,43.919617",
  "81.026970,43.919550",
  "81.027130,43.919483",
  "81.027280,43.919420",
  "81.027450,43.919334",
  "81.027620,43.919285",
  "81.027790,43.919200",
  "81.027930,43.919132",
  "81.028080,43.919067",
  "81.028000,43.918983",
  "81.027870,43.919033",
  "81.027700,43.919100",
  "81.027534,43.919167",
  "81.027370,43.919235",
  "81.027200,43.919300",
  "81.027050,43.919365",
  "81.026886,43.919450",
  "81.026720,43.919518",
  "81.026550,43.919582",
  "81.026400,43.919650",
  "81.026230,43.919716",
  "81.026070,43.919785",
  "81.025920,43.919850",
  "81.025750,43.919933",
  "81.025580,43.919983",
  "81.025536,43.920086",
  "81.025700,43.920033",
  "81.025860,43.919968",
  "81.026030,43.919900",
  "81.026184,43.919834",
  "81.026350,43.919765",
  "81.026535,43.919680",
  "81.026680,43.919632",
  "81.026830,43.919550",
  "81.027016,43.919483",
  "81.027170,43.919420",
  "81.027336,43.919350",
  "81.027500,43.919285",
  "81.027664,43.919216",
  "81.027830,43.919150",
  "81.028000,43.919083",
  "81.028050,43.918983",
  "81.027930,43.918970",
  "81.027730,43.919050",
  "81.027565,43.919117",
  "81.027400,43.919180",
  "81.027240,43.919250",
  "81.027070,43.919315",
  "81.026900,43.919384",
  "81.026730,43.919450",
  "81.026580,43.919518",
  "81.026410,43.919582",
  "81.026250,43.919666",
  "81.026085,43.919735",
  "81.025920,43.919800",
  "81.025764,43.919870",
  "81.025600,43.919950",
  "81.025450,43.919983",
  "81.025500,43.919920",
  "81.025665,43.919834",
  "81.025830,43.919765",
  "81.026000,43.919700",
  "81.026170,43.919632",
  "81.026340,43.919567",
  "81.026500,43.919483",
  "81.026665,43.919420",
  "81.026830,43.919350",
  "81.026985,43.919285",
  "81.027150,43.919200",
  "81.027310,43.919150",
  "81.027480,43.919083",
  "81.027650,43.919000",
  "81.027820,43.918934",
  "81.027930,43.918865",
  "81.027820,43.918846",
  "81.027630,43.918915",
  "81.027480,43.918983",
  "81.027310,43.919050",
  "81.027150,43.919132",
  "81.027000,43.919200",
  "81.026830,43.919266",
  "81.026665,43.919315",
  "81.026520,43.919384",
  "81.026350,43.919450",
  "81.026184,43.919533",
  "81.026020,43.919600",
  "81.025860,43.919666",
  "81.025700,43.919735",
  "81.025536,43.919815",
  "81.025400,43.919884",
  "81.025536,43.919950",
  "81.025650,43.919900",
  "81.025820,43.919815",
  "81.025970,43.919750",
  "81.026130,43.919680",
  "81.026310,43.919617",
  "81.026480,43.919533",
  "81.026650,43.919468",
  "81.026820,43.919400",
  "81.026985,43.919334",
  "81.027150,43.919266",
  "81.027300,43.919200",
  "81.027466,43.919117",
  "81.027650,43.919050",
  "81.027790,43.918983",
  "81.027970,43.918915",
  "81.027870,43.918884",
  "81.027756,43.918934",
  "81.027565,43.919000",
  "81.027380,43.919067",
  "81.027214,43.919132",
  "81.027050,43.919200",
  "81.026900,43.919285",
  "81.026730,43.919350",
  "81.026550,43.919420",
  "81.026380,43.919483",
  "81.026215,43.919567",
  "81.026050,43.919632",
  "81.025890,43.919700",
  "81.025720,43.919765",
  "81.025550,43.919850",
  "81.025400,43.919884",
  "81.025400,43.919834",
  "81.025620,43.919735",
  "81.025780,43.919666",
  "81.025950,43.919600",
  "81.026115,43.919533",
  "81.026276,43.919468",
  "81.026430,43.919384",
  "81.026600,43.919315",
  "81.026760,43.919250",
  "81.026930,43.919180",
  "81.027100,43.919117",
  "81.027270,43.919033",
  "81.027435,43.918970",
  "81.027580,43.918900",
  "81.027756,43.918835",
  "81.027850,43.918800",
  "81.027620,43.918816",
  "81.027450,43.918884",
  "81.027280,43.918950",
  "81.027115,43.919033",
  "81.026950,43.919100",
  "81.026790,43.919167",
  "81.026620,43.919235",
  "81.026450,43.919315",
  "81.026280,43.919384",
  "81.026110,43.919450",
  "81.025930,43.919518",
  "81.025750,43.919600",
  "81.025600,43.919666",
  "81.025410,43.919735",
  "81.025280,43.919750",
  "81.025330,43.919700",
  "81.025520,43.919617",
  "81.025680,43.919550",
  "81.025830,43.919483",
  "81.026000,43.919420",
  "81.026184,43.919334",
  "81.026340,43.919266",
  "81.026500,43.919200",
  "81.026680,43.919117",
  "81.026830,43.919067",
  "81.027016,43.918983",
  "81.027180,43.918915",
  "81.027336,43.918846",
  "81.027520,43.918785",
  "81.027690,43.918716",
  "81.027820,43.918700",
  "81.027790,43.918785",
  "81.027600,43.918865",
  "81.027435,43.918934",
  "81.027270,43.919018",
  "81.027100,43.919083",
  "81.026930,43.919150",
  "81.026760,43.919235",
  "81.026600,43.919300",
  "81.026410,43.919365",
  "81.026250,43.919434",
  "81.026085,43.919500",
  "81.025920,43.919567",
  "81.025750,43.919650",
  "81.025580,43.919716",
  "81.025410,43.919800",
  "81.025330,43.919750",
  "81.025450,43.919700",
  "81.025620,43.919617",
  "81.025780,43.919550",
  "81.025950,43.919483",
  "81.026130,43.919420",
  "81.026300,43.919350",
  "81.026470,43.919285",
  "81.026634,43.919216",
  "81.026800,43.919132",
  "81.026970,43.919050",
  "81.027130,43.918983",
  "81.027300,43.918915",
  "81.027466,43.918835",
  "81.027630,43.918770",
  "81.027800,43.918700",
  "81.027730,43.918633",
  "81.027650,43.918682",
  "81.027466,43.918750",
  "81.027300,43.918835",
  "81.027130,43.918900",
  "81.026985,43.918970",
  "81.026820,43.919033",
  "81.026650,43.919117",
  "81.026480,43.919180",
  "81.026340,43.919250",
  "81.026150,43.919334",
  "81.026000,43.919384",
  "81.025830,43.919468",
  "81.025650,43.919533",
  "81.025480,43.919600",
  "81.025330,43.919666",
  "81.025230,43.919632",
  "81.025330,43.919582",
  "81.025520,43.919483",
  "81.025665,43.919434",
  "81.025850,43.919350",
  "81.026020,43.919285",
  "81.026184,43.919200",
  "81.026370,43.919132",
  "81.026535,43.919067",
  "81.026720,43.919000",
  "81.026886,43.918915",
  "81.027050,43.918846",
  "81.027214,43.918785",
  "81.027380,43.918716",
  "81.027550,43.918650",
  "81.027690,43.918583",
  "81.027480,43.918583",
  "81.027336,43.918667",
  "81.027170,43.918730",
  "81.027000,43.918800",
  "81.026830,43.918865",
  "81.026665,43.918934",
  "81.026500,43.919000",
  "81.026340,43.919067",
  "81.026184,43.919132",
  "81.026020,43.919216",
  "81.025850,43.919266",
  "81.025680,43.919334",
  "81.025520,43.919420",
  "81.025370,43.919483",
  "81.025200,43.919550",
  "81.025250,43.919650",
  "81.025380,43.919600",
  "81.025550,43.919533",
  "81.025720,43.919450",
  "81.025890,43.919384",
  "81.026050,43.919315",
  "81.026200,43.919250",
  "81.026370,43.919167",
  "81.026535,43.919100",
  "81.026700,43.919033",
  "81.026860,43.918970",
  "81.027030,43.918900",
  "81.027200,43.918835",
  "81.027370,43.918770",
  "81.027520,43.918700",
  "81.027690,43.918617",
  "81.027650,43.918533",
  "81.027520,43.918600",
  "81.027370,43.918667",
  "81.027180,43.918730",
  "81.027030,43.918800",
  "81.026860,43.918884",
  "81.026700,43.918950",
  "81.026550,43.919018",
  "81.026380,43.919067",
  "81.026215,43.919150",
  "81.026085,43.919235",
  "81.025920,43.919300",
  "81.025750,43.919365",
  "81.025600,43.919434",
  "81.025410,43.919500",
  "81.025270,43.919567",
  "81.025130,43.919567",
  "81.025250,43.919500",
  "81.025440,43.919420",
  "81.025580,43.919350",
  "81.025750,43.919285",
  "81.025930,43.919200",
  "81.026085,43.919132",
  "81.026276,43.919050",
  "81.026450,43.918983",
  "81.026600,43.918915",
  "81.026790,43.918835",
  "81.026950,43.918770",
  "81.027115,43.918700",
  "81.027280,43.918633",
  "81.027466,43.918568",
  "81.027600,43.918500",
  "81.027690,43.918500",
  "81.027630,43.918470",
  "81.027580,43.918450",
  "81.027435,43.918520",
  "81.027270,43.918583",
  "81.027100,43.918650",
  "81.026950,43.918716",
  "81.026790,43.918800",
  "81.026634,43.918865",
  "81.026470,43.918934",
  "81.026300,43.919000",
  "81.026130,43.919083",
  "81.025970,43.919150",
  "81.025800,43.919216",
  "81.025635,43.919285",
  "81.025480,43.919350",
  "81.025314,43.919420",
  "81.025200,43.919483",
  "81.025085,43.919468",
  "81.025185,43.919400",
  "81.025350,43.919315",
  "81.025520,43.919250",
  "81.025680,43.919167",
  "81.025850,43.919100",
  "81.026020,43.919033",
  "81.026184,43.918970",
  "81.026350,43.918900",
  "81.026520,43.918835",
  "81.026680,43.918770",
  "81.026850,43.918700",
  "81.027016,43.918617",
  "81.027170,43.918550",
  "81.027336,43.918484",
  "81.027500,43.918400",
  "81.027500,43.918335",
  "81.027370,43.918400",
  "81.027200,43.918470",
  "81.027030,43.918533",
  "81.026860,43.918600",
  "81.026700,43.918667",
  "81.026550,43.918730",
  "81.026380,43.918800",
  "81.026230,43.918865",
  "81.026050,43.918934",
  "81.025900,43.919018",
  "81.025750,43.919067",
  "81.025566,43.919150",
  "81.025400,43.919216",
  "81.025250,43.919285",
  "81.025085,43.919350",
  "81.025030,43.919434",
  "81.025150,43.919450",
  "81.025314,43.919384",
  "81.025470,43.919300",
  "81.025635,43.919250",
  "81.025780,43.919167",
  "81.025970,43.919100",
  "81.026130,43.919033",
  "81.026280,43.918970",
  "81.026450,43.918915",
  "81.026600,43.918835",
  "81.026760,43.918770",
  "81.026930,43.918700",
  "81.027084,43.918633",
  "81.027250,43.918568",
  "81.027430,43.918500",
  "81.027565,43.918434",
  "81.027450,43.918385",
  "81.027336,43.918450",
  "81.027170,43.918520",
  "81.027000,43.918583",
  "81.026830,43.918650",
  "81.026680,43.918716",
  "81.026520,43.918785",
  "81.026350,43.918865",
  "81.026184,43.918934",
  "81.026020,43.919000",
  "81.025850,43.919067",
  "81.025680,43.919132",
  "81.025520,43.919200",
  "81.025370,43.919266",
  "81.025200,43.919350",
  "81.025100,43.919384",
  "81.025050,43.919420",
  "81.025130,43.919550",
  "81.025270,43.919716",
  "81.025400,43.919900",
  "81.025566,43.920100"
].map(it => ({ lng: Number(it.split(',')[0]), lat: Number(it.split(',')[1]) }))