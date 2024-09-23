import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import { EditItems } from "@/components/main-page/edit-items"

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const TableItems = ({ columnLabel, items }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columnLabel.map((label) => (
            <TableHead className={cn("text-center font-semibold", font.className)}>{label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow className={cn("font-normal", font.className)}>
            <TableCell>{item.nama}</TableCell>
            <TableCell>{item.kodeBarang}</TableCell>
            <TableCell>{item.deskripsi}</TableCell>
            <TableCell>{item.jumlahStok}</TableCell>
            <TableCell>{item.harga}</TableCell>
            <TableCell>{item.pemasok}</TableCell>
            <TableCell>{item.lastUpdated}</TableCell>
            <TableCell><EditItems id={item._id} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
