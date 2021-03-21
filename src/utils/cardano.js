import { Cell } from "./Cell";

let matrix = [];

const cardano = {
  rotateRight90: (matrix) => {
    let result = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!result[j]) {
          result[j] = [];
        }
        result[j].push(matrix[i][j]);
      }
    }
    return result;
  },
  shiftGrid: (grid) => {
    let k = 1;

    return grid.map((el, index, arr) => {
      return index < k ? arr[arr.length + index - k] : arr[index - k];
    });
  },
  splitTextToBlocks: (txt, len) => {
    const pattern = new RegExp(".{1," + len + "}", "g");
    return txt.match(pattern);
  },
  generate: (len) => {
    let key = len;

    for (let i = 0; i < len * 2; i++) {
      matrix[i] = [];
      for (let j = 0; j < len * 2; j++) {
        matrix[i][j] = new Cell();
      }
    }

    let i = 1;
    let tmp = [];

    for (let y = 0; y < len; y++) {
      tmp[y] = [];
      for (let x = 0; x < len; x++) {
        tmp[y][x] = new Cell(i, false);
        i++;
      }
    }

    cardano.addMatr(tmp, key, 0, 0);

    tmp = cardano.rotate(tmp);

    cardano.addMatr(tmp, key, len, 0);

    tmp = cardano.rotate(tmp);

    cardano.addMatr(tmp, key, len, len);

    tmp = cardano.rotate(tmp);

    cardano.addMatr(tmp, key, 0, len);
  },
  addMatr: (tmp, key, offsetX, offsetY) => {
    let len = key;

    for (let y = 0; y < len; y++) {
      for (let x = 0; x < len; x++) {
        matrix[x + offsetX][y + offsetY].num = tmp[x][y].num;
      }
    }
  },
  rotate: (arrs) => {
    let len = Math.sqrt(arrs.Length);

    let arrCopy = [...arrs];

    for (let y = 0; y < len; y++)
      for (let x = 0; x < len; x++) {
        arrCopy[x][y] = new Cell();
        arrCopy[x][y].num = matrix[x][y].num;
        arrCopy[x][y].hole = matrix[x][y].hole;
      }

    let tmp = [];

    for (let y = 0; y < len; y++) {
      tmp[y] = [];
      for (let x = 0; x < len; x++) {
        tmp[y][x] = new Cell();
        tmp[y][x].num = arrCopy[x][y].num;
        tmp[y][x].hole = arrCopy[x][y].hole;
      }
    }

    for (let y = 0; y < len; y++) {
      for (let x = 0; x < len; x++) {
        arrCopy[x][y].num = tmp[x][y].num;
        arrCopy[x][y].hole = tmp[x][y].hole;
      }
    }

    for (let y = 0; y < len; y++) {
      for (let x = 0; x < len; x++) {
        tmp[x][y].num = arrCopy[len - 1 - x][y].num;
        tmp[x][y].hole = arrCopy[len - 1 - x][y].hole;
      }
    }

    return tmp;
  },

  encode: (text, key) => {
    cardano.generate(key);

    console.log(matrix);
  },
  decode: (text, key) => {},
};

export default cardano;
