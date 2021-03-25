class Cell {
  static num;
  static hole = false;
}

let matrix = [[]];
let k;

const cardano = {
  generate: (l) => {
    let m = new Array(l * 2);
    for (let i = 0; i < m.length; i++) {
      m[i] = new Array(l * 2);
    }
    matrix = m;

    for (let y = 0; y < l * 2; y++)
      for (let x = 0; x < l * 2; x++) {
        matrix[x][y] = new Cell();
      }
    let id = 1;

    let tmp = new Array(l);
    for (let i = 0; i < l; i++) {
      tmp[i] = new Array(l);
    }

    for (let y = 0; y < l; y++)
      for (let x = 0; x < l; x++) {
        tmp[x][y] = new Cell();
        tmp[x][y].num = id;
        tmp[x][y].hole = false;
        id++;
      }

    cardano.addMatrix(tmp, 0, 0);
    tmp = cardano.rotateMatrix(tmp);

    cardano.addMatrix(tmp, l, 0);
    tmp = cardano.rotateMatrix(tmp);

    cardano.addMatrix(tmp, l, l);
    tmp = cardano.rotateMatrix(tmp);

    cardano.addMatrix(tmp, 0, l);
  },

  addMatrix: (tmp, offsetX, offsetY) => {
    for (let y = 0; y < k; y++)
      for (let x = 0; x < k; x++) {
        matrix[x + offsetX][y + offsetY].num = tmp[x][y].num;
      }
  },

  rotateMatrix: (tmp) => {
    let l = tmp.length;
    let tmpCopy = new Array(l);
    for (let i = 0; i < l; i++) {
      tmpCopy[i] = new Array(l);
    }

    for (let y = 0; y < l; y++)
      for (let x = 0; x < l; x++) {
        tmpCopy[x][y] = new Cell();
        tmpCopy[x][y].num = tmp[x][y].num;
        tmpCopy[x][y].hole = tmp[x][y].hole;
      }

    let t = new Array(l);
    for (let i = 0; i < l; i++) {
      t[i] = new Array(l);
    }

    for (let y = 0; y < l; y++)
      for (let x = 0; x < l; x++) {
        t[y][x] = new Cell();
        t[y][x].num = tmpCopy[x][y].num;
        t[y][x].hole = tmpCopy[x][y].hole;
      }

    for (let y = 0; y < l; y++)
      for (let x = 0; x < l; x++) {
        tmpCopy[x][y].num = t[x][y].num;
        tmpCopy[x][y].hole = t[x][y].hole;
      }

    for (let y = 0; y < l; y++)
      for (let x = 0; x < l; x++) {
        t[x][y].num = tmpCopy[l - 1 - x][y].num;
        t[x][y].hole = tmpCopy[l - 1 - x][y].hole;
      }

    return t;
  },
  toConsole: (tmp) => {
    let s = "";
    for (let y = 0; y < k * 2; y++) {
      for (let x = 0; x < k * 2; x++) {
        if (tmp[x][y].hole === false) s += tmp[x][y].num + " ";
        else s += tmp[x][y].num + "* ";
      }
      s += "\n";
    }
    console.log(s);
  },
  encode: (text, key) => {
    k = key;
    cardano.generate(k);

    let encodedMatrix = new Array(k * 2);
    for (let i = 0; i < encodedMatrix.length; i++) {
      encodedMatrix[i] = new Array(k * 2);
    }

    let id = 0;
    let elements = [];
    for (let i = 0; i < key * key; i++) {
      elements.push(Math.floor(Math.random() * key));
    }

    for (let y = 0; y < k * 2; y++) {
      for (let x = 0; x < k * 2; x++) {
        if (elements[matrix[x][y].num - 1] > 0) {
          elements[matrix[x][y].num - 1]--;
        } else if (elements[matrix[x][y].num - 1] !== -1) {
          matrix[x][y].hole = true;
          elements[matrix[x][y].num - 1] = -1;
        }
      }
    }

    for (let j = 0; j < 4; j++) {
      for (let y = 0; y < k * 2; y++) {
        for (let x = 0; x < k * 2; x++) {
          if (matrix[x][y].hole) {
            if (id < text.length) {
              encodedMatrix[x][y] = text[id];
            } else encodedMatrix[x][y] = "*";
            id++;
          }
        }
      }

      matrix = cardano.rotateMatrix(matrix);
    }

    let s = "";
    for (let y = 0; y < k * 2; y++) {
      for (let x = 0; x < k * 2; x++) {
        s += encodedMatrix[x][y] + " ";
      }
      s += "\n";
    }
    console.log("Encode:");
    console.log(s);

    s = "";
    for (let y = 0; y < k * 2; y++) {
      for (let x = 0; x < k * 2; x++) {
        s += encodedMatrix[x][y];
      }
    }

    return s;
  },
  decode: (text, key) => {
    k = key;

    let encodedMatrix = new Array(k * 2);
    for (let i = 0; i < encodedMatrix.length; i++) {
      encodedMatrix[i] = new Array(k * 2);
    }

    let id = 0;

    for (let y = 0; y < k * 2; y++) {
      for (let x = 0; x < k * 2; x++) {
        encodedMatrix[x][y] = text[id];
        id++;
      }
    }

    let s = "";
    for (let y = 0; y < k * 2; y++) {
      for (let x = 0; x < k * 2; x++) {
        s += encodedMatrix[x][y] + " ";
      }
      s += "\n";
    }
    console.log("\n");
    console.log("Decode:");
    console.log(s);

    s = "";
    for (let j = 0; j < 4; j++) {
      for (let y = 0; y < k * 2; y++) {
        for (let x = 0; x < k * 2; x++) {
          if (matrix[x][y].hole) {
            s += encodedMatrix[x][y];
          }
        }
      }

      matrix = cardano.rotateMatrix(matrix);
    }

    return s;
  },
};

export default cardano;
