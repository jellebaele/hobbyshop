import './singleProduct.scss'
import { useParams } from "react-router-dom"
import Modal from "../../../components/ui/modal/Modal"
import { useAppSelector } from "../../../context/hooks";
import { selectPostById } from "../productsSlice";
import EditIconNote from '@mui/icons-material/EditNote'
import CloseIcon from '@mui/icons-material/Close';
import Status from '../../../components/ui/status/Status';
import { useSmoothVisibility } from '../../../hooks/useSmoothClose';

const SingleProduct = () => {
  const { productId } = useParams();
  const { visible, setInvisible } = useSmoothVisibility();

  const product = useAppSelector((state) => selectPostById(state, productId))

  const renderProduct = () => {
    if (!product) {
      return <h2>Post not found!</h2>
    } else {
      return (
        <>
          <div className="top">
            <h2>{product.name}</h2>
            <div className="iconContainer">
              <EditIconNote className='icon editIcon' />
              <CloseIcon className='icon editIcon' onClick={() => setInvisible()} />
            </div>
          </div>
          <div className="center">
            <div className='productProperty'>Aantal: {product.amount} {product.unit}</div>
            <div className='productProperty'>Eigenaar: {product.user}</div>
            <div className='productProperty'>Categorie: {product.category}</div>
            <div className='productProperty'>Laatst bijgewerkt: {product.dateUpdated.toDateString()}</div>
            <div className='productProperty'>Status: <Status status={product.status} /></div>
          </div>
          <div className="bottom">

          </div>
        </>
      )
    }
  }

  return (
    <>
      <Modal visible={visible} setInvisible={setInvisible}>
        <div className="singleProductContainer">
          {renderProduct()}
        </div>
      </Modal>
    </>
  )
}

export default SingleProduct