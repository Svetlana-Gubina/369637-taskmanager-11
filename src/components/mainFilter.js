export const makeFilter = ({filters}) => {
  return `<input
    type="radio"
    id="filter__${filters.all.title.toLowerCase()}}"
    class="filter__input visually-hidden"
    name="filter"
    checked
  />
  <label for="filter__all" class="filter__label">
    ${filters.all.title} <span class="filter__${filters.all.title.toLowerCase()}-count">${filters.all.count}</span></label
  >
  <input
    type="radio"
    id="filter__${filters.overdue.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    disabled
  />
  <label for="filter__overdue" class="filter__label"
    >${filters.overdue.title} <span class="filter__${filters.overdue.title.toLowerCase()}-count">${filters.overdue.count}</span></label
  >
  <input
    type="radio"
    id="filter__${filters.today.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
    disabled
  />
  <label for="filter__today" class="filter__label"
    >${filters.today.title} <span class="filter__${filters.today.title.toLowerCase()}-count">${filters.today.count}</span></label
  >
  <input
    type="radio"
    id="filter__${filters.favorites.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__favorites" class="filter__label"
    >${filters.favorites.title} <span class="filter__${filters.favorites.title.toLowerCase()}-count">${filters.favorites.count}</span></label
  >
  <input
    type="radio"
    id="filter__${filters.repeating.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__repeating" class="filter__label"
    >${filters.repeating.title} <span class="filter__${filters.repeating.title.toLowerCase()}-count">${filters.repeating.count}</span></label
  >
  <input
    type="radio"
    id="filter__${filters.tags.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__tags" class="filter__label"
    >${filters.tags.title} <span class="filter__${filters.tags.title.toLowerCase()}-count">${filters.tags.count}</span></label
  >
  <input
    type="radio"
    id="filter__${filters.archive.title.toLowerCase()}"
    class="filter__input visually-hidden"
    name="filter"
  />
  <label for="filter__archive" class="filter__label"
    >${filters.archive.title} <span class="filter__${filters.archive.title.toLowerCase()}-count">${filters.archive.count}</span></label
  >`.trim();
};
