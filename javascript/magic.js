/*
challenge found in https://www.hackerrank.com/challenges/magic-square-forming/problem?h_r=internal-search
*/

const mapping_table = [
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4]
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8]
  ],
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6]
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4]
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ]
];

const my_input = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6]
];

function evaluate(s) {
  const ChangeCostsArray = [];
  let totalChangeCost = 0;
  mapping_table.forEach(option_matrix => {
    option_matrix.forEach((option_row, i) => {
      const input_row = my_input[i];
      option_row.forEach((option_number, i) => {
        const input_number = input_row[i];
        // we get one input number
        // if our option is already the input we don't want to add it to the total  to compare because it's cost is null
        option_number === input_number
          ? null
          : (totalChangeCost += Math.abs(input_number - option_number));
      });
    });
    ChangeCostsArray.push(totalChangeCost);
    totalChangeCost = 0;
  });
  return ChangeCostsArray.reduce((prevs, curr) =>
    curr < prevs ? curr : prevs
  );
}

console.log(evaluate(my_input));
