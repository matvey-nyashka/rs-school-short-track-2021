/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const index = email.lastIndexOf('@');
  const str = email.slice(index + 1);
  return str;
}

module.exports = getEmailDomain;
