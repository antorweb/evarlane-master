import FoodCategoryTabs from '@/app/components/AllList/FoodCategoryTabs'
import InfoCards from '@/app/components/AllList/InfoCards'
import MapSection from '@/app/components/AllList/MapSection'
import ProductGrid from '@/app/components/AllList/ProductGrid'
import Reviews from '@/app/components/AllList/Reviews'
import SimilarRestaurants from '@/app/components/AllList/SimilarRestaurants'
import Breadcrumb from '@/app/components/common/Breadcrumb'
import React from 'react'

const page = () => {
  return (
    <div>


        <Breadcrumb />
        <FoodCategoryTabs />
        <InfoCards />
        <MapSection />
        <ProductGrid />
        <Reviews />
        <SimilarRestaurants />
      
    </div>
  )
}

export default page
