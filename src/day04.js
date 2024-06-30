/*
IchBinJade
AoC Day 04 - https://adventofcode.com/2023/day/4
2024-06-29
*/

import { getArrayFromFile } from "./utils.js"

function parseCard(line) {
    const regex = /Card\s+\d+:\s+([\d\s]+)\s+\|\s+([\d\s]+)/;
    const match = line.match(regex);
    if (match) {
        const winningNumbers = match[1].trim().split(/\s+/).map(Number);
        const chosenNumbers = match[2].trim().split(/\s+/).map(Number);
        return { winningNumbers, chosenNumbers };
    } else {
        return null;
    }
}


function partOne(inputPath) {
    const inpArr = getArrayFromFile(inputPath);
    let totalPoints = 0
    // Loop array, get cards
    for (let a = 0; a < inpArr.length; a++) {
        const { winningNumbers, chosenNumbers } = parseCard(inpArr[a])
        let cardPoints = 0
        // Create sets and find intersection
        const winningSet = new Set(winningNumbers)
        const chosenSet = new Set(chosenNumbers)
        const realSet = new Set([...winningSet].filter(num => chosenSet.has(num)))
        // Loop intersection and calc points
        for (const win of realSet) {
            cardPoints = cardPoints === 0 ? 1 : cardPoints * 2;
        }
        totalPoints += cardPoints;
    }

    return totalPoints
}

function partTwo(inputPath) {}

console.log(`Part 1: ${partOne("day04.txt")}`);
// console.log(`Part 2: ${partTwo("./input.txt")}`);