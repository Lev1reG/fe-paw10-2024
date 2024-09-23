import { CardWrapper } from "@/components/all-page/card-wrapper";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useFormPopUp } from "@/providers/FormPopUpProvider";

export const FormItems = ({ id }) => {
  const [updatedData, setUpdatedData] = useState({});
  const { setOpen, setDataChanged } = useFormPopUp();

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/items/${id}`, {
          withCredentials: false
        })
        .then((res) => {
          setUpdatedData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const submitData = () => {
    console.log(updatedData);
    if (id) {
      axios
        .put(`http://localhost:5000/items/edit/${id}`, updatedData, {
          withCredentials: false
        })
        .then(() => {
          setDataChanged((prev) => !prev);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else {
      axios
        .post(`http://localhost:5000/items/create`, updatedData, {
          withCredentials: false
        })
        .then(() => {
          setDataChanged((prev) => !prev);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    setOpen(false);
  }

  const cancelButton = () => {
    setOpen(false);
    setUpdatedData({});
  }

  const footerButton = () => {
    return (
      <div className="w-full flex flex-row justify-between">
        <span className="cursor-pointer" onClick={submitData}>
          <Button size="sm" variant="">
            Submit
          </Button>
        </span>
        <span className="cursor-pointer" onClick={cancelButton}>
          <Button size="sm" variant="">
            Cancel
          </Button>
        </span>
      </div>
    );
  }

  return (
    <CardWrapper
      headerLabel="Items Details"
      headerDescription="PAW 10"
      isLarge={false}
      variant="form"
      footer={footerButton()}
    >
      <form>
        <div className="grid w-full gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
        Deren      value={updatedData.nama}
              type="text"
              placeholder="Name of the item"
              onChange={(e) => setUpdatedData({ ...updatedData, nama: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="code">Code</Label>
            <Input
              id="code"
              value={updatedData.kodeBarang}
              type="text"
              placeholder="Code of the item"
              onChange={(e) => setUpdatedData({ ...updatedData, kodeBarang: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Input
              id="stock"
              value={updatedData.deskripsi}
              type="text"
              placeholder="Description of the item"
              onChange={(e) => setUpdatedData({ ...updatedData, deskripsi: e.target.value })}
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              value={updatedData.jumlahStok}
              type="number"
              placeholder="Number stock of the item"
              onChange={(e) => setUpdatedData({ ...updatedData, jumlahStok: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="price">Price</Label>
            <Input
              id="name"
              value={updatedData.harga}
              type="number"
              placeholder="Price for each item"
              onChange={(e) => setUpdatedData({ ...updatedData, harga: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Supplier</Label>
            <Input
              id="name"
              value={updatedData.pemasok}
              type="text"
              placeholder="Supplier of the item"
              onChange={(e) => setUpdatedData({ ...updatedData, pemasok: e.target.value })}
            />
          </div>
        </div>
      </form>
    </CardWrapper>
  )
};


