import React from "react";
import { screen, render, fireEvent, act } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import Notes from "../../../../src/views/claim/notes";
import axios from "axios";
import ClaimWrapStore from "../../../helpers/ClaimWrapStore";
import { claimData } from "../../../helpers/mockApis";
import { ebaoUrl } from "../../../../src/app.config";
import {
  errorConfig,
  successConfig
} from "../../../../src/constants/alert.constants";
import { formError } from "../../../../src/constants/message.constants";
import { updateFieldsByRole } from "../../../helpers/form";
import { notes } from "./NotesTable.test";

const inputFields = [
  {
    name: "Category *",
    text: "combobox",
    value: 1,
    labelText: "Category"
  },
  {
    name: "Recipient",
    text: "combobox",
    value: 370000401,
    labelText: "Recipient"
  },
  {
    name: "Internal / External *",
    text: "combobox",
    value: "I",
    labelText: "Internal / External"
  },
  {
    name: "Attach To *",
    text: "combobox",
    value: "claim",
    labelText: "Attach To"
  },
  {
    name: "Overview",
    text: "textbox",
    value: "test",
    labelText: "Overview"
  },
  {
    name: "Content",
    text: "textbox",
    value: "test",
    labelText: "Content"
  }
];

const mockAxios = new MockAdapter(axios);

const addToastSpy = jest.fn();

const useToasts = () => {
  return { addToast: addToastSpy };
};

jest.mock("react-toast-notifications", () => ({ useToasts }));

const renderComponent = async () => {
  await act(async () => {
    render(<ClaimWrapStore Component={Notes} />);
  });
};

const constructGetNotesURL = (startIndex, perPage) =>
  `${ebaoUrl()}/notes/16832692/list?start=${startIndex}&limit=${perPage}`;

const noRecordsSetup = () => {
  mockAxios.reset();
  mockAxios.onGet(constructGetNotesURL(0, 10)).reply(200, {
    Model: {
      Total: 0,
      Content: []
    }
  });

  mockAxios
    .onGet(`${ebaoUrl()}/public/codetable/data/list/1038`)
    .reply(200, [{ Code: 1, Description: "Contact", Id: 1 }]);

  mockAxios
    .onGet(`${ebaoUrl()}/public/codetable/data/list/-106`)
    .reply(200, [
      { Code: 370000401, Description: "Charles Williamson", Id: 370000401 }
    ]);

  mockAxios
    .onGet(`${ebaoUrl()}/public/codetable/data/list/98100257247`)
    .reply(200, [
      { Code: "E", Description: "External", Id: "E" },
      { Code: "I", Description: "Internal", Id: "I" }
    ]);
};

describe("Notes Tab with no records", () => {
  beforeEach(async () => {
    noRecordsSetup();
    await renderComponent();
  });

  const setFormValues = async () => {
    updateFieldsByRole(true, null, inputFields);

    await act(async () => fireEvent.click(screen.getByTestId("save-note")));
  };

  it("should load notes tab with No Notes template", () => {
    expect(screen.getByTestId("no-notes")).toBeTruthy();
  });

  it("should show add note modal when clicking on add a new note button", () => {
    fireEvent.click(screen.getByTestId("no-notes"));

    expect(screen.getByTestId("window-close")).toBeTruthy();
  });

  it("should show add note modal when clicking on add note button", async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    expect(screen.getByTestId("window-close")).toBeTruthy();
  });

  it("should show success toast when clicking on save button", async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    mockAxios.onPost(`${ebaoUrl()}/notes/save`).reply(200, { Status: "OK" });

    await setFormValues();

    expect(addToastSpy).toBeCalledWith(
      "Note added successfully",
      successConfig
    );
  });

  it("should show error toast when clicking on save note button", async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    mockAxios.onPost(`${ebaoUrl()}/notes/save`).reply(500);

    await setFormValues();

    expect(addToastSpy).toBeCalledWith("Unable to Save Note", errorConfig);
  });

  it(`should show error toast with ${formError} when clicking on save note button`, async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    await act(
      async () => await fireEvent.click(screen.getByTestId("save-note"))
    );

    expect(addToastSpy).toBeCalledWith(formError, errorConfig);
  });

  it("should close add note modal when clicking close icon", async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    const closeIcon = screen.getByTestId("window-close");

    fireEvent.click(closeIcon);

    expect(screen.queryByText(/cancel/i)).not.toBeInTheDocument();
  });

  it("should close add note modal when clicking on cancel button", async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    await act(async () => fireEvent.click(screen.getByTestId("cancel-note")));

    expect(screen.queryByText(/Cancel Note Confirmation/i)).toBeInTheDocument();

    await act(async () =>
      fireEvent.click(screen.getByTestId("confirm-modal-no"))
    );

    expect(
      screen.queryByText(/Cancel Note Confirmation/i)
    ).not.toBeInTheDocument();

    await act(async () => fireEvent.click(screen.getByTestId("cancel-note")));

    expect(screen.queryByText(/Cancel Note Confirmation/i)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("confirm-modal-yes"));

    expect(screen.queryByText(/add a new note/i)).toBeInTheDocument();
  });
});

describe("Notes Tab when a Claim has been registered", () => {
  beforeEach(async () => {
    let updatedClaimData = claimData;
    updatedClaimData.ClaimEntity.StatusCode = "2";
    updatedClaimData.ClaimEntity.ObjectList = [{ ObjectId: 1, Name: "001" }];
    noRecordsSetup();
    await act(async () => {
      render(
        <ClaimWrapStore Component={Notes} updatedClaimData={updatedClaimData} />
      );
    });
  });

  it("should allow you to choose subclaims", async () => {
    await act(async () => fireEvent.click(screen.getByTestId("add-note")));

    expect(screen.queryByText(/Subclaim 001/i)).toBeInTheDocument();
  });
});

describe("Notes Tab with Records", () => {
  beforeEach(async () => {
    mockAxios.reset();
    mockAxios.onGet(constructGetNotesURL(0, 10)).reply(200, {
      Model: {
        Total: 2,
        Content: notes
      }
    });
    await renderComponent();
  });

  it("should show Notes Table with records", () => {
    expect(screen.getByRole("table")).toBeTruthy();

    expect(screen.getByRole("pagination")).toBeTruthy();
  });

  it("should expand subsection of all notes on click expand all and collapse on click of collapse all", () => {
    const expandAllSwitch = screen.getByTestId("expand-switch");

    expect(screen.getByText("Expand All")).toBeTruthy();

    fireEvent.click(expandAllSwitch);
    expect(screen.getAllByTestId("note-subsection").length).toBe(1);

    expect(screen.getByText("Collapse All")).toBeTruthy();

    fireEvent.click(expandAllSwitch);
    expect(screen.queryAllByTestId("note-subsection").length).toBe(0);

    fireEvent.click(expandAllSwitch);
    const IndividualExpandIcon = screen.getByTestId("expand-note").firstChild;

    expect(screen.getByText("Collapse All")).toBeTruthy();

    fireEvent.click(IndividualExpandIcon);
    expect(screen.queryAllByText("Collapse All").length).toBe(0);
  });
});
