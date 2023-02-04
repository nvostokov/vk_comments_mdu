var a = new Date('2017-09-21T21:00:00.000Z');

var res = [
    addLeadZero(a.getDate()),
    addLeadZero(a.getMonth() + 1),
    a.getFullYear()
    ].join('.');

console.log(res);

function addLeadZero(val) {
  if (+val < 10) return '0' + val;
  return val;
};