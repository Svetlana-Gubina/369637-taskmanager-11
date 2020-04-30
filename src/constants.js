export const HOURS_LIMIT = 23;
export const MINUTES_LIMIT = 59;
export const TAGS_SET = new Set([`cinema`, `practice`, `theory`, `intensive`, `homework`, `keks`]);

export const COLOR = {
  BLACK: `black`,
  YELLOW: `yellow`,
  BLUE: `blue`,
  GREEN: `green`,
  PINK: `pink`,
};

export const COLORS = Object.values(COLOR);

export const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

export const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const FilterType = {
  ALL: `all`,
  ARCHIVE: `archive`,
  FAVORITES: `favorites`,
  OVERDUE: `overdue`,
  REPEATING: `repeating`,
  TODAY: `today`,
};
