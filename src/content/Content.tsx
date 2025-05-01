import { ReactElement } from "react"
import { Welcome } from "../components/Puzzles/Welcome"
import { PuzzleOne } from "../components/Puzzles/PuzzleOne"
import { PuzzleTwo } from "../components/Puzzles/PuzzleTwo"
import { PuzzleThree } from "../components/Puzzles/PuzzleThree"
import { PuzzleFour } from "../components/Puzzles/PuzzleFour"
import { PuzzleFive } from "../components/Puzzles/PuzzleFive"
import { PuzzleSix } from "../components/Puzzles/PuzzleSix"
import { PuzzleSeven } from "../components/Puzzles/PuzzleSeven"
import { PuzzleEight } from "../components/Puzzles/PuzzleEight"
import { TheEndPage } from "../components/Puzzles/TheEnd"
import { CouponPage } from "../components/Puzzles/CouponPage"

export interface PuzzleContent {
    puzzleNumber: number
    puzzleContent: ReactElement
}
export const generatePuzzles  = (onClickForward: (lastCompletedPuzzle: number) => void) => {
    return [
        {
        puzzleNumber: 0,
        puzzleContent: <Welcome onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 1,
            puzzleContent: <PuzzleOne onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 2,
            puzzleContent: <PuzzleTwo onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 3,
            puzzleContent: <PuzzleThree onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 4,
            puzzleContent: <PuzzleFour onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 5,
            puzzleContent: <PuzzleFive onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 6,
            puzzleContent: <PuzzleSix onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 7,
            puzzleContent: <PuzzleSeven onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 8,
            puzzleContent: <PuzzleEight onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 9,
            puzzleContent: <TheEndPage onClickForward={onClickForward}/>
        },
        {
            puzzleNumber: 10,
            puzzleContent: <CouponPage onClickForward={onClickForward}/>
        },
    ]as PuzzleContent[]
}