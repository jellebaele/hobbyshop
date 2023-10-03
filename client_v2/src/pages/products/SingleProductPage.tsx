import '../../assets/styles/pages/products/singleProductPage.scss'
import { useParams } from "react-router-dom"
import Modal from "../../components/ui/Modal"
import EditIconNote from '@mui/icons-material/EditNote'
import CloseIcon from '@mui/icons-material/Close';
import { useSmoothNavigation } from "../../hooks/useSmoothNavigation"
import RoundButton from '../../components/ui/RoundButton'
import { useState } from 'react';
import Button from '../../components/ui/Button'
import ProductContent from '../../features/products/ProductContent'
import { useProductAggregate } from '../../features/products/hooks/useProductAggregate'

const SingleProductPage = () => {
  const [amountToOrder, setAmountToOrder] = useState(0);
  const { productId } = useParams();
  const { isVisible, navigateTo } = useSmoothNavigation();

  const product = useProductAggregate(productId)

  const adjustAmountToOrder = (amount: number = -1 | 1) => {
    if ((amountToOrder + amount) < 1) setAmountToOrder(0);
    else setAmountToOrder(amountToOrder + amount);
  }

  return (
    <>
      <Modal visible={isVisible} setInvisible={() => navigateTo(-1)}>
        <div className='singleProductPageContainer'>
          <div className="top">
            {product ? <><h2>Overzicht</h2></> : <><h2>Product not found</h2></>}
            <div className="iconContainer">
              <EditIconNote className='icon editIcon' onClick={() => navigateTo(`/products/edit/${productId}`)} />
              <CloseIcon className='icon editIcon' onClick={() => navigateTo(-1)} />
            </div>
          </div>
          {product && <>
            <div className="center">
              <ProductContent product={product} />
            </div>
            <div className="bottom">
              <div className="amountContainer">
                <RoundButton className='icon' onClick={() => adjustAmountToOrder(-1)}>-</RoundButton>
                {amountToOrder}
                <RoundButton className='icon' onClick={() => adjustAmountToOrder(1)}>+</RoundButton>
              </div>
              <Button className='orderButton'>Bestel</Button>
            </div>
          </>}
        </div>
      </Modal>
    </>
  )
}

export default SingleProductPage