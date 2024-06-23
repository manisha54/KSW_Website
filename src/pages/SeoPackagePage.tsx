import { NavBar } from '../components'
import SeoPackages from '../components/Pricing/SeoPackages'
import { Footer } from '../components'
import SeoPackagesVector from '../components/Pricing/SeoPackagesVector'

export default function SeoPackagePage() {
  return (
    <div>

      <div
        className="relative overflow-hidden overflow-x-hidden"
      >
        <SeoPackagesVector />
        <NavBar />
        <SeoPackages />
        <Footer />
      </div>

    </div>
  )
}
