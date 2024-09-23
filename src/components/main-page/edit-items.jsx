"use client";

import axios from "axios";
import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useFormPopUp } from "@/providers/FormPopUpProvider";

export const EditItems = ({ id }) => {
  const { setOpen, setId, setDataChanged } = useFormPopUp();

  const deleteItem = () => {
    axios
      .delete(`http://localhost:5000/items/delete/${id}`, {
        withCredentials: false
      })
      .then(() => {
        setDataChanged((prev) => !prev);

      })
      .catch((err) => {
        console.log(err);
      })
  }

  const editItem = () => {
    setOpen(true);
    setId(id);
  }

  return (
    <>
      <div classname="flex flex-col">
        <span className="cursor-pointer" onClick={editItem}>
          <Button
            size="sm"
            variant="outline"
          >
            <FaRegEdit className="w-3 h-3" />
          </Button>
        </span>
        <span className="cursor-pointer" onClick={deleteItem}>
          <Button
            size="sm"
            variant="outline"
          >
            <MdOutlineDeleteOutline className="w-3 h-3" />
          </Button>
        </span>
      </div>
    </>
  );
}
