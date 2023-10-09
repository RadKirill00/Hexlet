const pointInCircle = (a, b, r, x, y) => {
    const res = (x - a) ** 2 + (y - b) ** 2 <= r ** 2;
    return res;
  }
console.log(pointInCircle(0, 0, 1, 0, 0) === true);
 console.log(pointInCircle(0, 0, 1, 1, 0) === true);
 console.log(pointInCircle(0, 0, 1, 1, 1) === false);
  console.log(pointInCircle(0, 0, 1, Math.sqrt(0.8), 1 / 3) === true);
  const isStrongPassword = (password) => {
    const length = password.length;
    return length > 8 && length < 24;
  };
  isStrongPassword('qwerty1');
  isStrongPassword('qwerty1241531tv');
  isStrongPassword('qwwkfdnbosrlkmbpfodmjofnemmno');
  isStrongPassword('qwerty1103-M11');