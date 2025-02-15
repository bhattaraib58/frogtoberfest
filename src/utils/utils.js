/**
 * Returns formatted date eg July 28, 1993.
 *
 * @param {string} dateTime
 * @returns {string}
 */
export function formatDate(dateTime) {
  const date = new Date(dateTime);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}

/**
 * Fetch and return responses from Github apis.
 *
 * @param {*} url
 * @param {*} githubToken
 * @returns {Promise}
 */
export function fetchInfoFromGitHub(url, githubToken) {
  const response = fetch(url, {
    headers: {
      Authorization: `token ${githubToken}`
    }
  })
    .then(response => response)
    .catch(error => error);

  return response;
}
