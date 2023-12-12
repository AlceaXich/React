import './App.css'
import { FacebookFollowCard } from './FacebookFollowCard.jsx'

export function App () {
    return (
        <div className='App'>
            <FacebookFollowCard username="alceaxich" initialIsFollowing={true}>
                Shirley Oxa   
            </FacebookFollowCard>
            <FacebookFollowCard username="mihs">
                Alcea Xich
            </FacebookFollowCard>
            
        </div>
    )
}