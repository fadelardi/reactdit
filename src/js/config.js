module.exports = {
  /* URL where the REACTDIT API is */
  API_URL: 'http://localhost:3000',
  /* default user */
  ANON_USER: {id: 0 , name: 'Anonymous'},
  /*
    Types of thread. Ideally this would be stored in the db, but we have three
    fixed types, and this will not change, thus avoiding JOINs and additional queries
  */
  THREAD_TYPES: getThreadTypes(),
  THREAD_TYPE_TEXT: getThreadTypes()[0].name,
  THREAD_TYPE_LINK: getThreadTypes()[1].name,
  THREAD_TYPE_IMAGE: getThreadTypes()[2].name
};
// thread types and their corresponding icons
function getThreadTypes() {
  return [
    { icon: "fa-file-text", name: 'Text' },
    { icon: "fa-link", name: 'Link' },
    { icon: "fa-file-image-o", name: 'Image' }
  ];
}
