import { useState } from 'react'

export function FacebookFollowCard ({ children, username }){
    const [isFollowing, setIsFollowing] = useState(false)
    
    //LA LINEA ANTERIOR ES EQUIVALENTE A LAS SIGUIENTES 3 LINEAS

    /*const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1]*/

    console.log(isFollowing)
    const text = isFollowing ? 'Siguiendo' : 'seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src="https://unavatar.io/kikobeats" 
                    alt="Avatar random" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}