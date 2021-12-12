export enum TicketsActionTypes {
  GET_TICKETS = "GET_TICKETS",
  SET_TICKETS = "SET_TICKETS",
  CREATE_COLUMN = "CREATE_COLUMN",
  CREATE_TICKET = "CREATE_TICKET",
  DELETE_COLUMN = "DELETE_COLUMN",
  DELETE_TICKET = "DELETE_TICKET",
}

export interface ITicket {
  ticketId: string;
  title: string;
  priority: string;
}

export interface IColumns {
  title: string;
  color: string;
  owner: string;
  columnId: string;
  tickets: ITicket[];
}

export interface IDeleteColumn {
  columnId: string;
}

export interface IDeleteTicket extends IDeleteColumn {
  ticketId: string;
}

export interface ICreateTicket {
  title: string;
  columnId: string;
  priority?: string;
}

export interface ICreateColumn {
  title: string;
  color?: string;
}

export interface IGetTicketsAction {
  type: TicketsActionTypes.GET_TICKETS;
}

export interface ISetTicketsAction {
  type: TicketsActionTypes.SET_TICKETS;
  payload: IColumns[];
}

export interface IDeleteColumnAction {
  type: TicketsActionTypes.DELETE_COLUMN;
  payload: IDeleteColumn;
}

export interface IDeleteTicketAction {
  type: TicketsActionTypes.DELETE_TICKET;
  payload: IDeleteTicket;
}

export interface ICreateTicketAction {
  type: TicketsActionTypes.CREATE_TICKET;
  payload: ICreateTicket;
}

export interface ICreateColumnAction {
  type: TicketsActionTypes.CREATE_COLUMN;
  payload: ICreateTicket;
}

export type TicketsActions =
  | IGetTicketsAction
  | ISetTicketsAction
  | IDeleteColumnAction
  | IDeleteTicketAction
  | ICreateTicketAction;
