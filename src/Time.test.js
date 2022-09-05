import {mount} from "enzyme"
import Time from "./Time"

describe("Time testing",()=>{
    let wrapper = mount(<Time/>)
    test("input elements test case",()=>{
        expect(wrapper.find(".Input").length).toBe(4)
        expect(wrapper.find(".btn").length).toBe(1)
        expect(wrapper.find(".btn").text()).toBe("GoTo")
        expect(wrapper.find(".btn-2").text()).toBe("search")
    })
})