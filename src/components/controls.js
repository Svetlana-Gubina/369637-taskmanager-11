export const getControlElement = function (id, caption, isChecked = false) {
  return `
      <input
        type="radio"
        id="control__${id.toLowerCase()}"
        class="control__input visually-hidden"
        name="control"
        ${isChecked ? `checked` : ``}
      /><br />
      <label for="filter-${id.toLowerCase()}" class="control__label">${caption}</label>
    `;
};
