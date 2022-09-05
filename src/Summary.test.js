import React from "react";
import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import ClaimSummary from "../../../src/views/claim/Summary";
import Header from "../../../src/views/claim/header/Header";
import Navigation from "../../../src/views/claim/header/Navigation";
import Documents from "../../../src/views/claim/documents/Documents";
import RegistrationPage from "../../../src/views/claim/registration";
import Claim from "../../../src/views/claim/claim/Claim";
import GlobalStore from "../../../src/store/Store";
import { ebaoUrl } from "../../../src/app.config";
import { successfulData, claimData } from "../../helpers/mockApis";
import { taskMockApis } from "../../helpers/taskMockApis";
import { errorConfig } from "../../../src/constants/alert.constants";
import Notes from "../../../src/views/claim/notes";
import Diaries from "../../../src/views/claim/diaries";
import ClaimParty from "../../../src/views/claim/parties";
import ClaimTasks from "../../../src/views/claim/tasks/ClaimTasks";
import Tabs from "../../../src/components/tabs";
import Claimants from "../../../src/views/claim/claimants/Claimants";

const mockAxios = new MockAdapter(axios);

const addToastSpy = jest.fn();
const useToasts = () => {
  return { addToast: addToastSpy };
};

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));
jest.mock("react-toast-notifications", () => ({ useToasts }));

describe("Claim Summary page", () => {
  mockAxios
    .onGet(`${ebaoUrl()}/claimhandling/caseForm/16832729/0`)
    .reply(200, claimData);
  mockAxios.onGet(`${ebaoUrl()}/party/partylist/16832692/0/0`).reply(200, {
    Model: { Total: 500 }
  });
  successfulData(mockAxios);
  taskMockApis(mockAxios);
  mockAxios.onAny().reply(500);

  let baseUrl = "test/";
  let wrapper;

  const loadPath = async path => {
    const url = `${baseUrl}16832729/0${path}`;
    const match = {
      url,
      path: `${baseUrl}:taskId/:caseId`,
      params: {
        taskId: 16832729,
        caseId: 0
      }
    };

    await act(async () => {
      wrapper = mount(
        <MemoryRouter initialEntries={[url]}>
          <GlobalStore>
            <ClaimSummary match={match} />
          </GlobalStore>
        </MemoryRouter>
      );
    });
    wrapper.update();
  };

  afterEach(() => {
    wrapper.unmount();
  });

  it("should load Claim Header and Claim Navigation", async () => {
    await loadPath("");
    expect(wrapper.find(Header).length).toBeTruthy();
    expect(wrapper.find(Navigation).find("li").length).toBe(7);
  });

  it("should load Registration view on '/registration/id' navigation ", async () => {
    baseUrl = "registration/";
    await loadPath("");
    expect(wrapper.containsMatchingElement(RegistrationPage)).toEqual(true);
  });

  it("should load Claim view on '/claim/id' navigation ", async () => {
    baseUrl = "claim/";
    await loadPath("");
    expect(wrapper.containsMatchingElement(Claim)).toEqual(true);
  });

  it("should load Claimants view on '/claim/id' navigation ", async () => {
    await loadPath("/claimants");
    expect(wrapper.containsMatchingElement(Claimants)).toEqual(true);
  });

  it("should load Notes view on '/notes' navigation ", async () => {
    await loadPath("/notes");
    expect(wrapper.containsMatchingElement(Notes)).toEqual(true);
  });

  it("should load Notes view on '/tasks' navigation ", async () => {
    await loadPath("/tasks");
    expect(wrapper.containsMatchingElement(ClaimTasks)).toBeTruthy();
  });

  it("should load Diaries view on '/diary' navigation ", async () => {
    await loadPath("/diary");
    expect(wrapper.containsMatchingElement(Diaries)).toBeTruthy();
  });

  it("should load Notes view on '/documents' navigation ", async () => {
    await loadPath("/documents");
    const tabDiv = wrapper.find(Tabs);

    expect(tabDiv.html().includes("500")).toBeTruthy();
    expect(wrapper.find(Documents).length).toBe(1);
  });

  it("should load Notes view on '/parties' navigation ", async () => {
    await loadPath("/parties");
    expect(wrapper.find(ClaimParty)).toBeTruthy();
  });

  it("should load Notes view on '/parties' navigation with error in api", async () => {
    mockAxios
      .onGet(`${ebaoUrl()}/party/listByPartyName/16832692/a/0/10`)
      .reply(500);
    await loadPath("/parties");
    expect(wrapper.html().includes("No Parties")).toBeTruthy();
  });

  it("should load Registration view on '/registration/id' navigation with error in api", async () => {
    baseUrl = "registration";
    mockAxios
      .onGet(`${ebaoUrl()}/claimhandling/caseForm/16832729/0`)
      .reply(500);
    await loadPath("");
    expect(addToastSpy).toHaveBeenCalledWith(
      "Error in fetching Claim details #16832729/0",
      errorConfig
    );
    expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
  });
});
