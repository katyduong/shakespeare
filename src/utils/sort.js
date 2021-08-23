export const sortByLowestRating = (a, b) => {
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }
  return 0;
};

export const sortByHighestRating = (a, b) => {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.rating < b.rating) {
    return 1;
  }
  return 0;
};

export const sortByNewestReviews = (a, b) => {
  if (a.publish_date > b.publish_date) {
    return -1;
  }
  if (a.publish_date < b.publish_date) {
    return 1;
  }
  return 0;
};

export const sortByOldestReviews = (a, b) => {
  if (a.publish_date < b.publish_date) {
    return -1;
  }
  if (a.publish_date > b.publish_date) {
    return 1;
  }
  return 0;
};
