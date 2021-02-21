const scitula = {
  writeMatrixArray: (rows, columns, array) => {
    let arr = [];
    let count = 0;

    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        if (array[count]) {
          arr[i][j] = array[count];
        } else {
          arr[i][j] = "*";
        }

        count++;
      }
    }
    return arr;
  },
  encodeScitula: (rows, columns, array) => {
    let arr = [];
    let str = "";

    for (let i = 0; i < columns; i++) {
      arr[i] = [];
      for (let j = 0; j < rows; j++) {
        arr[i][j] = array[j][i];
        str += array[j][i];
      }
    }

    return {
      arr,
      str,
    };
  },
  decodeScitula: (rows, columns, str) => {
    let arr = [];
    let initialState = "";
    let count = 0;

    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        if (str[count] !== "*") {
          arr[i][j] = str[count];
          initialState += str[count];
        } else if (str[count] === "*" && count < str.length) {
          arr[i][j] = "";
          initialState += "";
        }

        console.log(str[count], count);

        count += rows;
      }

      count = i + 1;
    }

    return {
      decodeArray: arr,
      decodeStr: initialState,
    };
  },
};

export default scitula;
