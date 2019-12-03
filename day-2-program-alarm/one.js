const intcode = (input, restore = false, seedOne = 12, seedTwo = 2) => {
  let convertedInput = input.split(",").map(x => parseInt(x.trim()));

  let index = 0;
  let opcode = convertedInput[index];

  if (restore) {
    convertedInput[1] = seedOne;
    convertedInput[2] = seedTwo;
  }

  while (opcode !== 99) {
    opcode = convertedInput[index];

    let firstPosition = convertedInput[index + 1];
    let secondPosition = convertedInput[index + 2];
    let finalPosition = convertedInput[index + 3];

    switch (opcode) {
      case 1:
        {
          const sum =
            convertedInput[firstPosition] + convertedInput[secondPosition];
          convertedInput[finalPosition] = sum;
        }
        break;

      case 2:
        {
          const product =
            convertedInput[firstPosition] * convertedInput[secondPosition];
          convertedInput[finalPosition] = product;
        }
        break;
    }

    index += 4;
  }

  return convertedInput;
};

module.exports = intcode;
