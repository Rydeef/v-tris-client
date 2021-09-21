import React from "react";
import { ContentContainer } from "../../styles/utils";
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

export const WorkspaceColumns: React.FC = () => {
  return (
    <ColumnsWrapper>
      <Column>
        <ColumnTitle outline="todo">
          <ColumnTitleContent>
            <ColumnTitleText>To do</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>
      <Column>
        <ColumnTitle outline="inprogress">
          <ColumnTitleContent>
            <ColumnTitleText>In progress</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>
      <Column>
        <ColumnTitle outline="review">
          <ColumnTitleContent>
            <ColumnTitleText>Review</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>
      <Column>
        <ColumnTitle outline="complete">
          <ColumnTitleContent>
            <ColumnTitleText>Complete</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>{" "}
      <Column>
        <ColumnTitle outline="complete">
          <ColumnTitleContent>
            <ColumnTitleText>Complete</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>{" "}
      <Column>
        <ColumnTitle outline="complete">
          <ColumnTitleContent>
            <ColumnTitleText>Complete</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>{" "}
      <Column>
        <ColumnTitle outline="complete">
          <ColumnTitleContent>
            <ColumnTitleText>Complete</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>{" "}
      <Column>
        <ColumnTitle outline="complete">
          <ColumnTitleContent>
            <ColumnTitleText>Complete</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>{" "}
      <Column>
        <ColumnTitle outline="complete">
          <ColumnTitleContent>
            <ColumnTitleText>Complete</ColumnTitleText>
            <ColumnTitleCount>4</ColumnTitleCount>
          </ColumnTitleContent>
          <ColumnTitleEdit src={dotsImg} alt="" />
        </ColumnTitle>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <ColumnItem>
          <ColumnItemTitle>Data model</ColumnItemTitle>
          <ColumnItemInfo>
            <ColumnTitleEdit src={dotsImg} alt="" />
            <ColumnItemAvatar />
          </ColumnItemInfo>
        </ColumnItem>
        <NewTask>+New Task</NewTask>
      </Column>
    </ColumnsWrapper>
  );
};

export default WorkspaceColumns;
