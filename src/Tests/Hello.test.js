import React from 'react';
import Hello from './hello'
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe.only("Testing Hello Component", () => {
  it("finding title", () => {
    const {getByText} = render(<Hello title="karthik"/>)
    expect(getByText("karthik")).toBeInTheDocument("karthik")
  })

  it("finding title with testId", () => {
    const {getByTestId} = render(<Hello title="karthik"/>)
    expect(getByTestId("title")).toHaveTextContent("karthik");
    expect(getByTestId("title")).toHaveTextContent(/^karthik$/);
  })
  it("finding title with testId", () => {
    const {getByTestId} = render(<Hello title="karthik"/>)
    expect(getByTestId("count")).toHaveTextContent("0");
  })

  it("check counter value after click ", () => {
    const {getByTestId} = render(<Hello title="karthik"/>)
    const button = getByTestId("button");
    userEvent.click(button);
    expect(getByTestId("count")).toHaveTextContent("1");
  })

  it("check counter value after multiple click ", () => {
    const {getByTestId} = render(<Hello title="karthik"/>)
    const button = getByTestId("button");
    userEvent.click(button);
    userEvent.click(button);
    expect(getByTestId("count")).toHaveTextContent("2");
  })

})