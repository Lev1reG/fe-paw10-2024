"use client";

import axios from "axios";
import { CardWrapper } from "../all-page/card-wrapper";
import { TableItems } from "./table-items";
import { useState, useEffect } from "react";
import { FormItems } from "./form-items";
import { useFormPopUp } from "@/providers/FormPopUpProvider";
import { Button } from "../ui/button";

export const MainPage = () => {
  const tableHeader = ['Name', 'Code', 'Description', 'Stock', 'Price', 'Supplier', 'lastUpdated', 'Action']
  const [data, setData] = useState([]);

  const { open, setOpen, id, setId, dataChanged } = useFormPopUp();

  const fetchData = () => {
    axios
      .get('http://localhost:5000/items', {
        withCredentials: false,
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData();
  }, [dataChanged])

  const FooterButton = () => {
    const onClick = () => {
      setOpen(true);
      setId(null);
    }

    return (
      <span>
        <Button
          size="sm"
          variant=""
          onClick={onClick}
        >
          Add Items
        </Button>
      </span>
    )
  }

  return (
    <div className="relative flex justify-center items-center space-y-6 text-center">
      <CardWrapper
        headerLabel="Items Management System"
        headerDescription="PAW 10"
        isLarge={true}
        footer={FooterButton()}
      >
        <div className="max-h-96 overflow-scroll">
          <TableItems columnLabel={tableHeader} items={data} />
        </div>
      </CardWrapper>
      {open && <FormItems id={id} />}
    </div>
  );
}
