import {
  IColumns,
  ICreateColumn,
  ICreateTicket,
  IDeleteColumn,
  IDeleteTicket,
  TicketsActionTypes,
} from "../types/columns";

export const getTickets = () => ({
  type: TicketsActionTypes.GET_TICKETS,
});

export const setTickets = (payload: IColumns[]) => ({
  type: TicketsActionTypes.SET_TICKETS,
  payload,
});

export const deleteColumn = (payload: IDeleteColumn) => ({
  type: TicketsActionTypes.DELETE_COLUMN,
  payload,
});

export const deleteTicket = (payload: IDeleteTicket) => ({
  type: TicketsActionTypes.DELETE_TICKET,
  payload,
});

export const createTicket = (payload: ICreateTicket) => ({
  type: TicketsActionTypes.CREATE_TICKET,
  payload,
});

export const createColumn = (payload: ICreateColumn) => ({
  type: TicketsActionTypes.CREATE_COLUMN,
  payload
})