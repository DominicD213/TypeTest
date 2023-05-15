import React from 'react'
import './text.css'
import { useState,useEffect,} from 'react';
import randomWords from 'random-words'

const numOfWords = 200
const seconds =60

const Text = () => {
  const [words,setword] = useState([])
  const [countDown , setCountDown] = useState(seconds)
  const [currentInput , setcurrInput] = useState('')
  const [currentwordIndex, setCurrentWordIndex] = useState(0)
  const [setBestScore] = useState(0)
  const scoreList = {}
  const [list, setList] = useState(scoreList)
  useEffect(() => {
    setword(generateWords)
  }, [])

function generateWords(){
  return new Array (numOfWords).fill(null).map(() => randomWords())
}
function start (){ 
  let interval = setInterval(() =>{
    setCountDown((prevCountDown) => {
      if (prevCountDown !== 0){
         return prevCountDown - 1
        }
        else
          clearInterval(interval)
          setCountDown(seconds)
        }
    )
    
  }, 1000)}

 function handleKeydown({keycode}){
    if(keycode === 32){
      checkMatch()
      setcurrInput('')
      setCurrentWordIndex(currentwordIndex +1)
    }
  }
 
function checkMatch(){
  const wordTocompare = words[currentwordIndex]
  const match = wordTocompare === currentInput.trim()
  console.log({match})
}

function bestScore(){
  if(countDown === 0){
    let score = currentwordIndex
    scoreList.append(score)
    setBestScore(scoreList.max(score))
  }
}
bestScore()


return (
    <div className='container'>
      <div className='container-text__background'>
      <div className='container-text__output'>
      <div className='contianer-header'>
          <h2>Prompt</h2>
          <h3>{countDown}</h3>
          </div>
          <div className='container-text__random-pormpt'>
          <p className='container-text__container'>
            <div id='container-text__random-prompt_p'>{words.map((word,i) => (
              <span key={i}>
                <span>{word}</span>
                <span> </span>
              </span>
          ))}
          </div>
          </p>
        </div>
      </div>
      <div className='text-input'>
        <textarea id='container__text-keylogger' onKeyDown={handleKeydown} value={currentInput} onChange={(e) => setcurrInput(e.target.value)}/>
      </div>
        <div className='container__start-score'>
          <div className='score'>
            <h3>Words Per Minute</h3>
            <p>{currentwordIndex}</p>
          </div>
          <div className='bestscore'>
            <h3>Bestscore</h3>
            <p>{setBestScore}</p>
          </div>
          <button className='button__start' onClick={start}>Start</button>
      </div>
      </div>
    </div>
  )
}

export default Text