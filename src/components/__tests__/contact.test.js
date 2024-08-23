import ContactUs from '../ContactUs'
import {render,screen} from '@testing-library/react'
import "@testing-library/jest-dom"

describe("contact us page should render",()=>{
    it("should load contact us page",()=>{
        render(<ContactUs/>)
    
        const heading=screen.getByRole("heading");
    
        //assertion
        expect(heading).toBeInTheDocument();
    
    })
    
    it("should load button",()=>{
        render(<ContactUs/>)
    
        const button=screen.getByRole("button")
    
        expect(button).toBeInTheDocument();
    })
    
    
    it("should load 2 test box",()=>{
        render(<ContactUs/>)
    
        const NoOfinput=screen.getAllByRole("textbox")
    
        expect(NoOfinput.length).not.toBe(3);
    })
})

