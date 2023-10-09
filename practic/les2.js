const pointInCircle = (a, b, r, x, y) => {
    const res = (x - a) ** 2 + (y - b) ** 2 <= r ** 2;
    return res;
  }