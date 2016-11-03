module.exports = {
  /* URL where the REACTDIT API is */
  API_URL: 'http://localhost:3000',
  /* ID of the anonymous user, 0 by default */
  ANON_ID: 0,
  /*
    Types of thread. Ideally this would be stored in the db, but we have three
    fixed types, and this will not change, thus avoiding JOINs and other SQL
  */
  THREAD_TYPES: getThreadTypes(),
  THREAD_TYPE_TEXT: getThreadTypes()[0],
  THREAD_TYPE_LINK: getThreadTypes()[1],
  THREAD_TYPE_IMAGE: getThreadTypes()[2]
};

function getThreadTypes() {
  return ['Text', 'Link', 'Image'];
}
