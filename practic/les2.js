
const getMax = (x, y, z) => {
    if (x > y) {
        if (x > z) {
            max = x;
        } else {
            max = z;

        }
    } else {
        if (y > z) {
            max = y;
        } else {
            max = z;
        }
    }
    return max;
}