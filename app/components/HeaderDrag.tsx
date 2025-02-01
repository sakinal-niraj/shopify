import React from "react";
import { SidebarData } from "../constant/type";
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

function HeaderDrag(props:{sideHead:SidebarData}) {
    const {sideHead} = props;

    const {id,name} = sideHead;

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
      } = useSortable({id});

      const style = {
        transform: CSS.Transform.toString(transform),
        transition,
      };
  return (
    <div ref={setNodeRef} 
    style={style}
    {...attributes}
    {...listeners}
    className="w-full flex justify-between items-center bg-red-300 rounded-md">
      <div className=" p-4 border-b border-gray-100" key={id}>{id}</div>
      <div className=" p-4 border-b border-gray-100">{name}</div>
    </div>
  );
}

export default HeaderDrag;
