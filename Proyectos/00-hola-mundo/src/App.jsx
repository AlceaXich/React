import './App.css'

export function App () {
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar"
                    src="https://unavatar.io/kikobeats" 
                    alt="Avatar random" />
                <div className="tw-followCard-info">
                    <strong>Shirley Oxa</strong>
                    <span className="tw-followCard-infoUserName">@alceaxich</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>Seguir</button>
            </aside>
        </article>
    )
}