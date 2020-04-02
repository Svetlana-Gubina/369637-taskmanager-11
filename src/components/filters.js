export const getFilterElement = function (id, amount, isChecked = false, isDisabled = false) {
  return `
      <input
        type="radio"
        id="filter__${id.toLowerCase()}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
        ${isDisabled ? `disabled` : ``}
      /><br />
      <label for="filter__${id.toLowerCase()}" class="filter__label">${id} <span class="filter__${id}-count">${amount}</span></label>
    `;
};
