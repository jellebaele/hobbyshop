import '../../assets/styles/pages/singleProductPage.scss'
import { useParams } from "react-router-dom"
import Modal from "../../components/ui/Modal"
import { useAppSelector } from "../../context/hooks"
import EditIconNote from '@mui/icons-material/EditNote'
import CloseIcon from '@mui/icons-material/Close';
import { selectProductById } from "../../features/products/productsSlice"
import { useSmoothNavigation } from "../../hooks/useSmoothNavigation"
import Status from '../../components/ui/Status'
import RoundButton from '../../components/ui/RoundButton'
import { useState } from 'react';
import Button from '../../components/ui/Button'

const SingleProductPage = () => {
  const [amountToOrder, setAmountToOrder] = useState(0);
  const { productId } = useParams();
  const { isVisible, navigateTo } = useSmoothNavigation();

  const product = useAppSelector(state => selectProductById(state, productId))

  const adjustAmountToOrder = (amount: number = -1 | 1) => {
    if ((amountToOrder + amount) < 1) setAmountToOrder(0);
    else setAmountToOrder(amountToOrder + amount);
  }

  return (
    <>
      <Modal visible={isVisible} setInvisible={() => navigateTo(-1)}>
        <div className='singleProductPageContainer'>
          <div className="top">
            {product ? <><h2>{product.name}</h2></> : <><h2>Product not found</h2></>}
            <div className="iconContainer">
              <EditIconNote className='icon editIcon' onClick={() => navigateTo(`/products/${productId}`)} />
              <CloseIcon className='icon editIcon' onClick={() => navigateTo(-1)} />
            </div>
          </div>
          {product && <>
            <div className="center">
              <div className='productProperty'>Aantal: {product.amount} {product.unit}</div>
              <div className='productProperty'>Eigenaar: {product.user}</div>
              <div className='productProperty'>Categorie: {product.category}</div>
              <div className='productProperty'>Laatst bijgewerkt: {product.dateUpdated.toDateString()}</div>
              <div className='productProperty'>Status: <Status status={product.status} /></div>
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