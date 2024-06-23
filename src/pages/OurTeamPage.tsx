import { NavBar } from '../components'
import { Footer } from '../components'
import OurTeam from '../components/About/OurTeam'
import OurTeamVector from '../components/About/OurTeamVector'

export default function OurTeamPage() {
  return (
    <>
      <div
        className="relative overflow-hidden overflow-x-hidden"
      >
      <OurTeamVector/>
      <NavBar />
      <OurTeam />
      <Footer />

      </div>
    </>
    
  )
}
