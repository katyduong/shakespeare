const REVIEWS_URL = 'https://shakespeare.podium.com/api/reviews';

const getReviewsRequest = () =>
  fetch(REVIEWS_URL, {
    method: 'GET',
    headers: {
      'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

const getReviewByIdRequest = (id) =>
  fetch(`${REVIEWS_URL}/${id}`, {
    method: 'GET',
    headers: {
      'x-api-key': 'H3TM28wjL8R4#HTnqk?c',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

const getReviews = async () => {
  try {
    const response = await getReviewsRequest();
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.log({ e });
    return null;
  }
};

const getReviewById = async (id) => {
  try {
    const response = await getReviewByIdRequest(id);
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.log({ e });
    return null;
  }
};

export { getReviewById, getReviews };
