import { OrderList } from '../../../'
import { changeStatusAlert } from '../../../../Utils'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatusOrder, filterStatus } from '../../../../features'

export const OrderListContainer = () => {
  const dispatch = useDispatch()

  const orderState = useSelector(state => state.order)
  const user = useSelector(state => state.user.User)

  const options = [
    { value: 'generated', label: 'generated' },
    { value: 'In process', label: 'In process' },
    { value: 'Sent it', label: 'Sent it' }
  ]
  const getSelector = async (newStatus, id, currentStatus) => {
    let changeStatus = await changeStatusAlert(currentStatus, newStatus)
     if (changeStatus === true) {
      dispatch(updateStatusOrder({status:newStatus, id: id}))
    } 
  }
  const filter = (filter) => {
    dispatch(filterStatus(filter))
  }

  return (
    <div>
     <OrderList User={user} orderState={orderState} filter={filter} orders={orderState.orders} options={options} selector={getSelector} />
    </div>
  )
}

