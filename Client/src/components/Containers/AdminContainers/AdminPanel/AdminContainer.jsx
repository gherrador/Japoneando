import { AdminPanel } from '../../../'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteProductAlert } from '../../../../Utils';
import { deleteProduct, listProducts } from '../../../../api';

export function AdminContainer() {
  const [list, setList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    listProducts()
    .then((resp) => setList(resp.map(product => (product))))
  }, [])


  const addProduct = () => {
    navigate('/admin/add')
  }

  const checkOrders = () => {
    navigate('/admin/orders')
  }

  const DeleteProduct = async (id) => {
    let response = await deleteProductAlert()
    if (response === true) {
      setList(list.filter(product => product._id !== id))
      deleteProduct(id)
    }
  }
  return (
    <>
      {!list.length ? <h4>Searching Products...</h4>
        :
        <AdminPanel deleteProduct={DeleteProduct} addProduct={addProduct} products={list} checkOrders={checkOrders} />}
    </>
  )
}
