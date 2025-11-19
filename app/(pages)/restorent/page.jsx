import RestaurantsSection from "@/app/components/Home/RestaurantsSection"
import InfoSection from "@/app/components/restorent/InfoSection"
import LeftSidebar from "@/app/components/restorent/LeftSidebar"
import MapLocationCard from "@/app/components/restorent/MapLocationCard"

const page = () => {
  return (
    <>
    

<LeftSidebar />
<InfoSection />

<MapLocationCard />

<RestaurantsSection />

  
 
    </>
  )
}

export default page