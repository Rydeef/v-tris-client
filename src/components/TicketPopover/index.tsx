import React from "react";
import { PopoverBlock, PopoverItem } from "./styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { useDispatch } from "react-redux";
import { deleteColumn, deleteTicket } from "../../redux/actions/columns";

interface TicketPopoverProps {
  columnId: string;
  ticketId?: string;
  close: () => void;
}

export const TicketPopover: React.FC<TicketPopoverProps> = ({
  columnId,
  ticketId,
  close,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(columnId, ticketId);

    if (ticketId) {
      dispatch(deleteTicket({ columnId, ticketId }));
    } else {
      dispatch(deleteColumn({ columnId }));
    }
    close();
  };
  return (
    <PopoverBlock>
      <PopoverItem onClick={handleDelete}>
        <DeleteForeverOutlinedIcon /> Delete
      </PopoverItem>
      <PopoverItem>
        <EditOutlinedIcon /> Edit
      </PopoverItem>
    </PopoverBlock>
  );
};

export default TicketPopover;
