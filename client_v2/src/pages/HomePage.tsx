import "./homePage.scss"
import HighlightedProducts from "../features/products/higlightedProducts/HighlightedProducts"

const HomePage = () => {
  return (
    <div className='homeContainer'>
      <HighlightedProducts />
      <HighlightedProducts />
    </div >
  )
}

export default HomePage