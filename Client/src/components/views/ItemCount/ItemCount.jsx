import { useEffect, useState } from "react"
import { alertAdd, alertRemove, alertCart, buyFailed } from "../../../Utils"
import { Button, Container } from "react-bootstrap"
import './ItemCount.css'
import { useSelector } from "react-redux"



export function ItemCount({ stock, initial, onAdd, product }) {
  const [count, setCount] = useState(initial)
  const [disable, setDisable] = useState(false)
  const [stockItems, setStock] = useState(stock)

  const User = useSelector(state => state.user.User)



  function comprar() {
    if (stockItems >= count) {
      setStock(stockItems - count)
      alertCart(count, product.name)
      setCount(1)
    }
  }

  useEffect(() => {
    stockItems < 1 && setDisable(true)
  }, [stockItems])

  function addItem() {
    if (count < stockItems) {
      setCount(count + 1)
    } else {
      alertAdd()
    }
  }
  function remove() {
    if (count > 1) {
      setCount(count - 1)
    } else {
      alertRemove()
    }
  }

  function buy(count, producto) {
    comprar();
    onAdd(count, producto)

  }

  return (
    <Container fluid id="btnContainer">
      <div id="box">
        <div id="countMinus">
          <svg onClick={remove} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </div>
        <input id="Qty" type="text" value={count} readOnly></input>
        <div id="countPlus" >
          <svg onClick={addItem} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
      </div>
      <div>
        <p id="stockItems">Stock: {stockItems} Units</p>
        <Button id="btn-add" variant="success" disabled={disable} onClick={() => { !User ? buyFailed() : buy(count, product) }}>Add to Cart</Button>
      </div>
    </Container>
  )
}
