import React from 'react'
import MegaMenu from './components/MegaMenu'
import Banner from './components/Home/Banner'
import OffersSection from './components/Home/OffersSection'
import Categories from './components/Home/Categories'
import Restaurants from './components/Home/RestaurantsSection'
import Personalised from './components/Home/Personalised'
import PartnerRiderSection from './components/Home/PartnerRiderSection'
import StatsCounter from './components/Home/StatsCounter'

const page = () => {
  return (
    <div>
<Banner />
<OffersSection />
<Categories />
<Restaurants />
<Personalised />
<PartnerRiderSection />
<StatsCounter />

      
    </div>
  )
}

export default page
