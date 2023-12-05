import './App.css'
import { FacebookFollowCard } from './FacebookFollowCard.jsx'

export function App () {
    const alcea = { isFollowing:true, username:'AlceaXich' }
    const mihs = { isFollowing:false, username:'mihs moca' }
    
    return (
        <div className='App'>
            <FacebookFollowCard {...alcea}>
                Shirley Oxa   
            </FacebookFollowCard>
            <FacebookFollowCard {...mihs}>
                Alcea Xich
            </FacebookFollowCard>
            
        </div>
    )
}