import React, { useState, useEffect } from 'react'
import { getRandomJoke } from '../services/jokes'

import './randomJoke.scss'

import { Button } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'

let loading = false

const RandomJoke = () => {

    const [currentJoke, setCurrentJoke] = useState(null)
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const updateJoke = async () => {
        loading = true
        const joke = await getRandomJoke()
        setCurrentJoke({...joke, reaction: null})
        loading = false
    }

    const countReaction = reaction => {
        reaction ? setLikes(likes + 1) : setDislikes(dislikes + 1)
    }
    const updateReaction = reaction => {
        if (reaction) {
            setLikes(likes + 1)
            setDislikes(dislikes - 1)
        } else {
            setLikes(likes - 1)
            setDislikes(dislikes + 1)
        }
    }

    const like = reaction => {
        if (currentJoke.reaction !== null) {
            if (currentJoke.reaction !== reaction) updateReaction(reaction)
        } else countReaction(reaction)

        setCurrentJoke({...currentJoke, reaction})
    }

    useEffect(() => {
        if (!currentJoke && !loading) {
            updateJoke()
        }
    }, [])
    
    
    return (
        <div className="container">
            {currentJoke
                ? <p className="joke">{ currentJoke.value }</p>
                : <p>No Joke Available</p>
            }

            <div className="reactions">
                <Button className="icon-btn" onClick={ () => like(false)} variant='outlined' color='error'><ThumbDownIcon></ThumbDownIcon>{ dislikes }</Button>
                <Button className="icon-btn"  onClick={ () => like(true)} variant='outlined' color='success'><ThumbUpIcon></ThumbUpIcon>{ likes }</Button>
                
            </div>

            <Button className="random" onClick={ updateJoke } variant='contained'>New Random Joke</Button>
            
        </div>
    )
}

export default RandomJoke
