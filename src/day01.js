/*
IchBinJade
AoC Day 1 - https://adventofcode.com/2023/day/1
YYYY-MM-DD
*/

import { getArrayFromFile } from "./utils.js"

function partOne(inputPath) {
    const inpArr = getArrayFromFile(inputPath);
    let total = 0;

    // Remove any non-numeric characters
    for (let i = 0; i < inpArr.length; i++) {
        let line = inpArr[i].replace(/\D/g,"");
        if (line.length > 0) {
            let firstDigit = line[0];
            let lastDigit = line[line.length - 1];
            if (lastDigit == null) {
                lastDigit = firstDigit;
            }
            const wholeNum = firstDigit + lastDigit;
            total += parseInt(wholeNum);
        }
    }
    return total;
}

function partTwo(inputPath) {
    const inpArr = getArrayFromFile(inputPath)
  let total = 0;

  // Setup a 'map' of number-word combos
  const wordMap = {
    "oneight": 18,
    "twone": 21,
    "eightwo": 82,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  }
  
  for (let i = 0; i < inpArr.length; i++) {
    let line = inpArr[i];
    if (line.length > 0) {
      for (const word in wordMap) {
        // Create regex to match word
        const wordRegex = new RegExp(word, "g");
        line = line.replace(wordRegex, wordMap[word]);
      }

      // Apply partOne regex for leftover letters
      line = line.replace(/\D/g, "");

      // Calculate total
      let firstDigit = line[0];
      let lastDigit = line[line.length - 1];
      if (lastDigit == null) {
        lastDigit = firstDigit;
      }
      const wholeNum = firstDigit + lastDigit;
      total += parseInt(wholeNum);
    }
  }
  return total;
}

console.log(`Part 1: ${partOne("day01.txt")}`);
console.log(`Part 2: ${partTwo("day01.txt")}`);