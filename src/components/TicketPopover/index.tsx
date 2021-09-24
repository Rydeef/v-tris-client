import React from "react";
import { PopoverBlock, PopoverItem } from "./styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

interface TicketPopoverProps {
  id?: string;
}

export const TicketPopover: React.FC<TicketPopoverProps> = ({ id }) => {
  const copyToClipboard = (id: string) => () => {
    // const el = document.createElement("textarea");
    // el.value = id;
    // console.log(id);
    
    // document.body.appendChild(el);
    // el.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(id)
    // document.body.removeChild(el);
  };
  return (
    <PopoverBlock>
      <PopoverItem>
        <DeleteForeverOutlinedIcon /> Delete
      </PopoverItem>
      <PopoverItem>
        <EditOutlinedIcon /> Edit
      </PopoverItem>
      <PopoverItem>
        <ShareOutlinedIcon /> Share
      </PopoverItem>
      <PopoverItem onClick={copyToClipboard(id!)}>
        <FileCopyOutlinedIcon /> Copy
      </PopoverItem>
    </PopoverBlock>
  );
};

export default TicketPopover;
