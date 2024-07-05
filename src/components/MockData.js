import React from 'react'
import { connect } from 'react-redux'

function MockData({ singleData }) {
  return (
    <div className='single-card'>
      <div className='card-image'>
        <img src={singleData.detail.avatar} />
      </div>
      <p> Id: {singleData.detail.id} </p>
      <p> Name: {singleData.detail.name} </p>
      <p> Craeted At: {singleData.detail.createdAt}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  singleData: state.mockReducer
})
const mapStateToDispatch = (dispatch) => ({

})
export default connect(mapStateToProps, mapStateToDispatch)(MockData)