export const getSectionElement = function (classNames) {
  let section = document.createElement(`section`);
  section.className = `${classNames}`;
  return section;
};
