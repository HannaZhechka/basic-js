const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  const names = members.filter(item => typeof item === 'string')
  names.sort()
  const names2 = names.map(name => {
    name = name.replace(/\s/g, '');
    return name[0].toUpperCase();
  })
  const names3 = names2.sort();
  return names3.join('');
}

module.exports = {
  createDreamTeam
};
