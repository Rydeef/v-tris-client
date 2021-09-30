import React, { useState } from "react";
import {
  ColumnsWrapper,
  Column,
  ColumnTitle,
  ColumnItem,
  NewTask,
  ColumnItemTitle,
  ColumnItemAvatar,
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


type priorityType = "high" | "medium" | "low";

interface ITicketFields {
  id: string;
  text: string;
  priority: priorityType;
}

interface ITicket {
  id: string;
  title: string;
  color?: string;
  fields: ITicketFields[];
}

export const WorkspaceColumns: React.FC = () => {
  const [workspaceTickets, setWorkspaceTickets] = useState<ITicket[]>([
    {
      title: "To do",

      id: "4546546246",
      fields: [
        {
          id: "56758699",
          text: "jkgkk",
          priority: "high",
        },
        {
          id: "768621",
          text: "rtet",
          priority: "high",
        },
        {
          id: "34242645",
          text: "bvvnbv",
          priority: "low",
        },
        {
          id: "4564768",
          text: "Data",
          priority: "low",
        },
      ],
    },
    {
      title: "In progress",
      color: "#003CFF",
      id: "lkjligh",
      fields: [
        {
          id: "kjhkhui",
          text: "Data",
          priority: "low",
        },
        {
          id: "kjhoiyit",
          text: "Data",
          priority: "low",
        },
        {
          id: "jkuyuvm",
          text: "Data",
          priority: "high",
        },
        {
          id: "jhgjtyrybv",
          text: "Data",
          priority: "high",
        },
      ],
    },
    {
      title: "Review",
      color: "#FF9900",
      id: "kbnvcfjhftyu",
      fields: [
        {
          id: "jhgjghvj",
          text: "Data",
          priority: "medium",
        },
        {
          id: "jfhg65yhhdy6",
          text: "Data",
          priority: "medium",
        },
        {
          id: "74jchd56",
          text: "Data",
          priority: "high",
        },
        {
          id: "7mbnkg",
          text: "Data",
          priority: "high",
        },
      ],
    },
    {
      title: "Complete",
      color: "#00FF19",
      id: "bkjhkkghhj",
      fields: [
        {
          id: "jgfjhvgf",
          text: "Data",
          priority: "high",
        },
        {
          id: "khjlfchgf",
          text: "Data",
          priority: "high",
        },
        {
          id: "hgfjyttery",
          text: "Data",
          priority: "medium",
        },
        {
          id: "jhgkhgk",
          text: "Data",
          priority: "low",
        },
      ],
    },
    {
      title: "Complete",
      color: "#5e5f5e",
      id: "jykuyu",
      fields: [
        {
          id: "kkhk",
          text: "Data",
          priority: "high",
        },
        {
          id: "kjhkhkuyu",
          text: "Data",
          priority: "low",
        },
        {
          id: "vmmnvmvm",
          text: "Data",
          priority: "high",
        },
        {
          id: "uytutdtyrey",
          text: "Data",
          priority: "high",
        },
      ],
    },
  ]);
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

  const onDragEnd = (result: any) => {
    const { destination, draggableId, source } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let sourceIndex: number;
    let destinationIndex: number;
    workspaceTickets.forEach((column, index) => {
      if (column.id === source.droppableId) {
        sourceIndex = index;
      }
      if (column.id === destination.droppableId) {
        destinationIndex = index;
      }
    });

    let draggableItem: number;

    workspaceTickets[sourceIndex!].fields.forEach((field, index) => {
      if (field.id === draggableId) {
        draggableItem = index;
      }
    });
    const newTickets = workspaceTickets.slice();
    if (sourceIndex! !== destinationIndex!) {
      newTickets[destinationIndex!].fields.splice(
        destination.index,
        0,
        workspaceTickets[sourceIndex!].fields[draggableItem!]
      );
      newTickets[sourceIndex!].fields.splice(draggableItem!, 1);
    }

    setWorkspaceTickets(newTickets);
  };

  return (
    <ColumnsWrapper
      hideScrollbars={false}
      vertical={false}
      ignoreElements={Column}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        {workspaceTickets.map((column) => (
          <Droppable droppableId={column.id} key={column.id} type="tickets">
            {(provided) => (
              <Column {...provided.droppableProps} ref={provided.innerRef}>
                <ColumnTitle outline={column.color}>
                  <ColumnTitleContent>
                    <ColumnTitleText>{column.title}</ColumnTitleText>
                    <ColumnTitleCount>{column.fields.length}</ColumnTitleCount>
                  </ColumnTitleContent>
                  <ColumnTitleEdit src={dotsImg} alt="" onClick={handleClick} />
                  <Popover
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <TicketPopover id={column.id} />
                  </Popover>
                </ColumnTitle>
                {column.fields.map((field, index) => (
                  <Draggable
                    draggableId={field.id}
                    key={field.id}
                    index={index}
                  >
                    {(provided) => (
                      <ColumnItem
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        priority={field.priority}
                      >
                        <ColumnItemTitle>{field.text}</ColumnItemTitle>
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
                            <TicketPopover id={field.id} />
                          </Popover>
                          <ColumnItemAvatar />
                        </ColumnItemInfo>
                      </ColumnItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                {ticketCreation === column.id ? (
                  <NewTicket
                    handleClose={handleTicketCreation}
                    column={column.id}
                  />
                ) : (
                  <NewTask onClick={handleTicketCreation(column.id)}>
                    +New Task
                  </NewTask>
                )}
              </Column>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </ColumnsWrapper>
  );
};

export default WorkspaceColumns;
