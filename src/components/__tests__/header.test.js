import { render,screen } from "@testing-library/react"
import Header from "../Header"
import {Provider} from "react-redux"
import appStore from '../../utils/appStore'
import {BrowserRouter} from 'react-router-dom'
import "@testing-library/jest-dom"

test("header components",()=>{
    render(
        <BrowserRouter>
             <Provider store={appStore}>
              <Header/> 
            </Provider>
        </BrowserRouter>   
    )

    const login=screen.getByRole("button")
    expect(login).toBeInTheDocument();
})