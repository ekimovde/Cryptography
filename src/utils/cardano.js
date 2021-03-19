import { splitTextToBlocks } from "./helpers";

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
  encode: (text, key) => {
    let array = [];
    let arr1 = [];
    let count = 1;
    let lengthKey = key - 1;

    for (let i = 0; i < key; i++) {
      arr1[i] = [];
      for (let j = 0; j < key; j++) {
        arr1[i][j] = count;
        count++;
      }
    }

    console.log("Array:", arr1);
    console.log("\n");

    let arrs;

    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        arrs = [].concat(arr1);
        console.log(1, arrs);
        array.push(arrs);
      } else {
        let newMatrix = cardano.rotateRight90(arrs);
        arrs = newMatrix;
        array.push(arrs);
        console.log(2, arrs);
      }
    }

    console.log("\n");
    console.log("FullNewArray:", array);

    let grid = [];
    let newGrid = [];
    let counts = 0;

    array.forEach((item) => {
      while (counts < lengthKey) {
        if (!grid.length) {
          let random = Math.floor(Math.random() * (key * key) + 1);
          grid.push(random);
        } else {
          let bool = false;
          while (!bool) {
            let random = Math.floor(Math.random() * (key * key) + 1);
            if (!grid.includes(random)) {
              grid.push(random);

              bool = true;
            }
          }
          bool = false;
        }
        counts++;
      }
      counts = 0;
    });

    for (let i = 0; i < Math.ceil(grid.length / lengthKey); i++) {
      newGrid[i] = grid.slice(i * lengthKey, i * lengthKey + lengthKey);
    }

    console.log("\n");
    console.log("Grid:", newGrid);

    text = text.replace(/\s/g, "");
    console.log("\n");
    let textBlocks = splitTextToBlocks(text, key * key);
    console.log("TextToBlocks:", textBlocks);

    let countGrid = 0;
    let countText = 0;
    let newArray = [].concat(array);

    for (let i = 0; i < textBlocks.length; i++) {
      console.log(textBlocks[i]);
      for (let j = 0; j < newArray.length; j++) {
        console.log(newArray[j]);
        for (let k = 0; k < newArray[j].length; k++) {
          console.log(newArray[j][k]);
          for (let l = 0; l < newArray[j][k].length; l++) {
            console.log(newArray[j][k][l]);
            for (let m = 0; m < newGrid[countGrid].length; m++) {
              console.log(1, newGrid[countGrid][m]);

              if (newGrid[countGrid][m] === newArray[j][k][l]) {
                console.log(newGrid[countGrid][m], true);
                console.log(textBlocks[i][countText]);
                newArray[j][k][l] = textBlocks[i][countText];

                countText++;
              }
            }
          }
        }
        countGrid++;
      }
      countText = 0;
      countGrid = 0;
      newGrid = [].concat(cardano.shiftGrid(newGrid));
      console.log("ShiftGrid:", newGrid);
    }

    console.log("arrs:", newArray);
  },
  decode: (text, key) => {},
};

export default cardano;
