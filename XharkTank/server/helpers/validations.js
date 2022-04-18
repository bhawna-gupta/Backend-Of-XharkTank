//Empty Check
const empty = (input) => {
  if (input === undefined || input === '' || input===null) {
    return true;
  }
  return false;
};
module.exports={empty};