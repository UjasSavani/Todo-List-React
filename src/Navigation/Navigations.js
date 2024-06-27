import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Outlets from '../outlet/Outlets'
import MockApiView from '../components/MockApiView.js'
import MockData from '../components/MockData.js'
import TodoList from '../components/TodoList.js'

function Navigations() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Outlets />}>
                    <Route path='/todo-list' element={<TodoList />}></Route>
                    <Route path='/mockapi-alldata' element={<MockApiView />}></Route>
                    <Route path='/mock-data' element={<MockData />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigations