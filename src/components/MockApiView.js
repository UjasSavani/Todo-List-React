import React, { useEffect } from 'react'
import { getApiDataAction, getPerticularDataAction } from '../redux/actions/mockApiActions'
import { connect } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MockApiView({apiData, setApiData, setPerticularData}) {

    const navigator = useNavigate()
    
    function apiCalling(){
        try {
                const dataFromApi = axios.get("https://6621f18527fcd16fa6c84bcc.mockapi.io/id").then((data) => {
                setApiData(data.data)
            }).catch((error) => {
                console.log("some error occured ", error);
                setApiData([])
            })
        } catch (error) {
            console.log(("catch of try block ", error));
            setApiData([])
        }
    }

    useEffect(() => {
        apiCalling()
    }, [])
    return (
    <>
        <div className='data-container'>
            {(apiData.data.length !== 0)? apiData.data.map((value, index) => {
                return(
                    <div className='card' key={index} onClick={(e) => {
                        e.preventDefault()

                        setPerticularData(value)
                        navigator("/mock-data")
                    }}>
                        <div className='card-image'>
                            <img src={value.avatar} />
                        </div>
                        <p>Id : {value.id}</p>
                        <p>Name : {value.name}</p>
                        <p>Created At: {value.createdAt}</p>
                    </div>
                )
            }) : <div> Hello Wolrd! Something Went Wrong</div>}
        </div>
    </>
    )
}

const mapStateToProps = (state) => ({
    apiData: state.mockReducer
})

const mapStateToDispatch = (dispatch) => ({
    setApiData: (data) => (dispatch(getApiDataAction(data))),
    setPerticularData: (details) => (dispatch(getPerticularDataAction(details)))
})

export default connect(mapStateToProps, mapStateToDispatch) (MockApiView)