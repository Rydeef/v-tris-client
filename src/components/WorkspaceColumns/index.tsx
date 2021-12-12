import React, { useEffect, useState } from "react";
import {
  ColumnsWrapper,
  Column,
  ColumnTitle,
  ColumnItem,
  NewTask,
  ColumnItemTitle,
  ColumnTitleText,
  ColumnTitleCount,
  ColumnTitleEdit,
  ColumnTitleContent,
  ColumnItemInfo,
} from "./styles";
import dotsImg from "../../assets/svg/dots.svg";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Popover } from "@material-ui/core";
import TicketPopover from "../TicketPopover/index";
import NewTicket from "../NewTicket";
import NewColumn from "../NewColumn";
import { useDispatch, useSelector } from "react-redux";
import { getTickets } from "../../redux/actions/columns";
import { IColumns } from "../../redux/types/columns";

export const WorkspaceColumns: React.FC = () => {
  const dispatch = useDispatch();

  const columns: IColumns[] = useSelector(({ columns }: any) => columns) || [];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ticketCreation, setTicketCreation] = useState("");
  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTicketCreation = (id: string) => () => {
    setTicketCreation(id);
  };

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  const onDragEnd = (result: any) => {
    const { destination, draggableId, source } = result;
    // if (!destination) {
    //   return;
    // }
    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }

    // let sourceIndex: number;
    // let destinationIndex: number;
    // workspaceTickets.forEach((column, index) => {
    //   if (column.id === source.droppableId) {
    //     sourceIndex = index;
    //   }
    //   if (column.id === destination.droppableId) {
    //     destinationIndex = index;
    //   }
    // });

    // let draggableItem: number;

    // workspaceTickets[sourceIndex!].fields.forEach((field, index) => {
    //   if (field.id === draggableId) {
    //     draggableItem = index;
    //   }
    // });
    // const newTickets = workspaceTickets.slice();
    // if (sourceIndex! !== destinationIndex!) {
    //   newTickets[destinationIndex!].fields.splice(
    //     destination.index,
    //     0,
    //     workspaceTickets[sourceIndex!].fields[draggableItem!]
    //   );
    //   newTickets[sourceIndex!].fields.splice(draggableItem!, 1);
    // }

    // setWorkspaceTickets(newTickets);
  };
  console.log(columns);

  return (
    <ColumnsWrapper
      hideScrollbars={false}
      vertical={false}
      ignoreElements={Column}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.length ? (
          columns.map((column) => (
            <Droppable
              droppableId={column.columnId}
              key={column.columnId}
              type="tickets"
            >
              {(provided) => (
                <Column {...provided.droppableProps} ref={provided.innerRef}>
                  <ColumnTitle outline={column.color}>
                    <ColumnTitleContent>
                      <ColumnTitleText>{column.title}</ColumnTitleText>
                      <ColumnTitleCount>
                        {column.tickets.length}
                      </ColumnTitleCount>
                    </ColumnTitleContent>
                    <ColumnTitleEdit
                      src={dotsImg}
                      alt=""
                      onClick={handleClick}
                    />
                    <Popover
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <TicketPopover
                        columnId={column.columnId}
                        close={handleClose}
                      />
                    </Popover>
                  </ColumnTitle>
                  {column.tickets.map((ticket, index) => (
                    <Draggable
                      draggableId={ticket.ticketId}
                      key={ticket.ticketId}
                      index={index}
                    >
                      {(provided) => (
                        <ColumnItem
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          priority={ticket.priority}
                        >
                          <ColumnItemTitle>{ticket.title}</ColumnItemTitle>
                          <ColumnItemInfo>
                            <ColumnTitleEdit
                              onClick={handleClick}
                              src={dotsImg}
                              alt=""
                            />
                            <Popover
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                            >
                              <TicketPopover
                                ticketId={ticket.ticketId}
                                columnId={column.columnId}
                                close={handleClose}
                              />
                            </Popover>
                          </ColumnItemInfo>
                        </ColumnItem>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  {ticketCreation === column.columnId ? (
                    <NewTicket
                      handleClose={handleTicketCreation}
                      column={column.columnId}
                    />
                  ) : (
                    <NewTask onClick={handleTicketCreation(column.columnId)}>
                      +New Task
                    </NewTask>
                  )}
                </Column>
              )}
            </Droppable>
          ))
        ) : (
          <div>No items!</div>
        )}
        <NewColumn />
      </DragDropContext>
    </ColumnsWrapper>
  );
};

export default WorkspaceColumns;
