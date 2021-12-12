import { call, takeLatest, put } from "redux-saga/effects";

import { api } from "../../services/api";

import { setTickets } from "../actions/columns";
import history from "../../utils/history";
import {
  IDeleteTicketAction,
  IDeleteColumnAction,
  TicketsActionTypes,
  ICreateTicketAction,
  ICreateColumnAction,
} from "../types/columns";

function* getTickets(): Generator {
  try {
    const response: any = yield call(api.get, "/tickets");

    yield put(setTickets(response.data.data));

    if (response.status === 403) {
      history.push("/login");
    }
  } catch (err: any) {
    return err;
  }
}

function* deleteColumn(data: IDeleteColumnAction): Generator {
  try {
    const response: any = yield call(
      api.delete,
      `/tickets/column/${data.payload.columnId}`
    );

    yield put(setTickets(response.data.data));

    if (response.status === 403) {
      history.push("/login");
    }
  } catch (err: any) {
    return err;
  }
}

function* deleteTicket(data: IDeleteTicketAction): Generator {
  try {
    const response: any = yield call(
      api.delete,
      `/tickets/column/${data.payload.columnId}/${data.payload.ticketId}`
    );

    yield put(setTickets(response.data.data));

    if (response.status === 403) {
      history.push("/login");
    }
  } catch (err: any) {
    return err;
  }
}

function* createTicket(data: ICreateTicketAction): Generator {
  try {
    const response: any = yield call(
      api.patch,
      `/tickets/column`,
      data.payload
    );

    yield put(setTickets(response.data.data));

    if (response.status === 403) {
      history.push("/login");
    }
  } catch (err: any) {
    return err;
  }
}

function* createColumn(data: ICreateColumnAction): Generator {
  try {
    const response: any = yield call(api.post, `/tickets/column`, data.payload);

    yield put(setTickets(response.data.data));

    if (response.status === 403) {
      history.push("/login");
    }
  } catch (err: any) {
    return err;
  }
}

function* columns(): Generator {
  yield takeLatest(TicketsActionTypes.GET_TICKETS, getTickets);
  yield takeLatest(TicketsActionTypes.DELETE_COLUMN, deleteColumn);
  yield takeLatest(TicketsActionTypes.DELETE_TICKET, deleteTicket);
  yield takeLatest(TicketsActionTypes.CREATE_TICKET, createTicket);
  yield takeLatest(TicketsActionTypes.CREATE_COLUMN, createColumn);
}

export default columns;
