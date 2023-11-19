const validateForm = (state) => {
  const errors = [];

  if (!state.title) {
    errors.push("Please fill in title.");
  }

  if (!state.desc) {
    errors.push("Please fill in description.");
  }

  if (!state.cover || !state.images.length) {
    errors.push("Please upload images.");
  }

  if (!state.features.length) {
    errors.push("Please add at least one feature.");
  }

  if (!state.price || state.price < 1) {
    errors.push("Please add a price greater than 0.");
  }

  if (!state.deliveryTime || state.deliveryTime < 1) {
    errors.push("Please add a delivery time greater than 0.");
  }

  if (!state.revisionNumber) {
    errors.push("Please add a revision number.");
  }

  if (!state.cat) {
    errors.push("Please select a category.");
  }

  return errors;
};

export default validateForm;
