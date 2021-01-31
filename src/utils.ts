/**
 * Notification API
 *
 * configure and display desktop notifications to the user
 * https://developer.mozilla.org/en-US/docs/Web/API/notification
 *
 * @param  {string} title
 * @param  {string} body?
 */
function notification(title: string, body?: string) {
  if (!('Notification' in window)) {
    return;
  }

  Notification.requestPermission().then((permission) => {
    permission === 'granted' &&
      new Notification(title, {
        body,
        icon: '/assets/favicon-196.png'
      });
  });
}

export { notification };
