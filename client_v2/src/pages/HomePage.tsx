import "../assets/styles/pages/homePage.scss"
import HighlightedProducts from "../features/products/HighlightedProducts"

const HomePage = () => {
  return (
    <div className='homeContainer'>
      <HighlightedProducts />
      <HighlightedProducts />
    </div >
  )
}

export default HomePage