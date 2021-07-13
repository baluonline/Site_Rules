import React from 'react'
// import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
const { useEffect } = React
import { fetchUserData, fetchUsers } from '..//../src/actions/'
import * as Tree from './TreeView';


const ShoppingCards = () => {
  const pageNumber = useSelector(state => state.pageNumber || 0)
  const itemsCount = useSelector(state => state.itemsCount || 10)
  const users = useSelector(state => state.users)
  const userPic = useSelector(state => state.userPic)
  const dispatch = useDispatch()

  useEffect(() => {
    const test = Tree.TreeviewTraverse(Tree.TreeItems,Tree.targetTreeItem);
    console.log('test' +test)
    fetchUsers(pageNumber, itemsCount).then(resp => {
      dispatch({ type: resp.type, data: resp.payload })
    })
  }, [dispatch, pageNumber])
  const RenderUsers = ({ users }) => {
    if (users.length > 0) {
      return (
        <div>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <div className='row d-flex justify-content-xl-center justify-content-md-center justify-content-sm-center '>
                  <p className='col-3'>
                    {user.cell} - {user.name.last} - {user.name.first}
                  </p>
                  <img
                    className='shopping-cards'
                    src={user.picture.large}
                    alt='image not available'
                  />
                </div>
              </div>
            )
          })}
        </div>
      )
    } else return <div> no users</div>
  }
 
  return (
    <div>
      Current page number : {pageNumber} 
      <button
        className='btn-primary btn-lg float-left'
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Previous
      </button>
      <button
        className='btn-primary btn-lg float-right'
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Next Page
      </button>
      <div>
        <RenderUsers users={users} />
      </div>
    </div>
  )
}

export default ShoppingCards
