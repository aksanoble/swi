import { get } from "lodash";

export const filterVaccinatedDistricts = districts => {
  return districts
    .filter(
      d =>
        get(d[1], "total.vaccinated1") &&
        get(d[1], "total.vaccinated2") &&
        get(d[1], "meta.population")
    )
    .map(d => {
      const population = d[1].meta.population;
      const vaccinated1 = d[1].total.vaccinated1;
      const vaccinated2 = d[1].total.vaccinated2;
      return {
        id: d[0],
        data: [
          {
            x: (vaccinated1 * 100) / population,
            y: (vaccinated2 * 100) / population
          }
        ]
      };
    });
};

export const getCurrentNav = location => {
  const navigation = [
    {
      name: "STATE-WISE",
      path: "/statewise",
      href: "/statewise",
      current: true
    },
    {
      name: "NATIONAL",
      path: "/national",
      href: "/national",
      current: false
    }
  ];

  return navigation.map(n => {
    n.current = false;
    if (location === n.path) {
      n.current = true;
    }
    return n;
  });
};
