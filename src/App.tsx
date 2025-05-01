import { useEffect, useState } from 'react'
import './App.css'
import { retrieveCache, writeToCache } from './utils/cacheTools'
import { LogoBar } from './components/TopLogoBar'
import { generatePuzzles, PuzzleContent } from './content/Content'
import { Puzzle } from './components/Puzzle'

function App() {
  const [puzzleContent, setPuzzleContent] = useState<PuzzleContent>()
  const incrementPuzzle = (completedPuzzle: number) => {
    writeToCache('chapter', completedPuzzle)
    const nextPuzzle = Puzzles.find(x => x.puzzleNumber === completedPuzzle + 1)
    setPuzzleContent(nextPuzzle)
  }
  const Puzzles = generatePuzzles(incrementPuzzle)

  const getAndSetContentByCurrentPuzzle = (puzzleNumber: number | undefined) => {
      const puzzleToSearch = puzzleNumber === undefined ? 0 : puzzleNumber++
      const currentPuzzle = Puzzles.find(x => x.puzzleNumber === puzzleToSearch)
      if (currentPuzzle) {
        setPuzzleContent(currentPuzzle)
      }
  }

  useEffect(()=>{
    const cachedData = retrieveCache('chapter')
    const currentChapter = cachedData ? parseInt(cachedData) : 0
    getAndSetContentByCurrentPuzzle(currentChapter)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
    <div className={'AppContainer'} >
      <LogoBar />
      <Puzzle content={puzzleContent?.puzzleContent ?? <>Nothing is here. How did you do that?</>}/>
    </div>
  )
}

export default App
