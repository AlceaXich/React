import './App.css'
import { FacebookFollowCard } from './FacebookFollowCard.jsx'

export function App () {
    return (
        <div className='App'>
            <FacebookFollowCard  isFollowing username="alceaxich">
                Shirley Oxa   
            </FacebookFollowCard>
            <FacebookFollowCard isFollowing={false} username="mihs">
                Alcea Xich
            </FacebookFollowCard>
            
        </div>
    )
}