import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../../api';
import { addingProducts } from '../../../../Utils';
import { AddProductPanel } from '../../..';


export function AddProductContainer() {
  const navigate = useNavigate();

  const regresar = () => {
    navigate('/admin')
  }

  const saveProduct = async(data) => {
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('code', data.code)
    formData.append('category', data.category)
    formData.append('photo', data.photo[0])
    formData.append('photo2', data.photo2[0])
    formData.append('photo3', data.photo3[0])
    formData.append('price', data.price)
    formData.append('stock', data.stock)
    await addProduct(formData)
    .then(() => navigate('/admin'))  
    .then(addingProducts())
   }

  return (
    <div><AddProductPanel back={regresar} save={saveProduct} /></div>
  )
}

