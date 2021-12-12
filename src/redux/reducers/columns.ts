import { IColumns, TicketsActions, TicketsActionTypes } from "../types/columns";

const initialState: IColumns[] = [];

const columns = (state = initialState, action: TicketsActions): IColumns[] => {
  switch (action.type) {
    case TicketsActionTypes.SET_TICKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default columns;
