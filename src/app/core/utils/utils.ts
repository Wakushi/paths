import { EventModel } from "src/app/models/event.model"

function getRandomIndex(array: any[]): number {
  return Math.floor(Math.random() * array.length)
}

function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * max) + 1
}

function shuffleEventArray(array: EventModel[]): EventModel[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

function checkArraysMatch(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

export { getRandomNumber, shuffleEventArray, getRandomIndex, checkArraysMatch }
