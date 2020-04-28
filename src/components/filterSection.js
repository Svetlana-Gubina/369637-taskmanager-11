import {createFilterMarkup} from "./filters.js";

export const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);
  return `<section class="main__filter filter container">
    ${filtersMarkup}
  </section>`;
};
