import './App.css'
import { FacebookFollowCard } from './FacebookFollowCard.jsx'

export function App () {
    return (
        <div className='App'>
            <FacebookFollowCard  isFollowing username="alceaxich" name="Shirley Oxa"/>
            <FacebookFollowCard isFollowing={false} username="alcexich" name="Shirley Oxa"/>
            <FacebookFollowCard isFollowing={true} username="alcexich" name="Shirley Oxa"/>
        </div>
    )
}