import React, { useState } from "react"
import { PurchaseItem, SalesItem } from "../../../type"

const AddInventory = () => {
  const [isPurchase, setIsPurchase] = useState(true)
  const [purchaseData, setPurchaseData] = useState<PurchaseItem>({
    date: "",
    vendor: "",
    weight: 0,
    amount: 0,
    woodType: "",
    taxType: "",
    taxPercent: 0,
  })
  const [salesData, setSalesData] = useState<SalesItem>({
    date: "",
    buyer: "",
    size: 0,
    amount: 0,
    woodType: "",
  })

  const [active, setActive] = useState<any>()

  const handleClick = (name: string) => {
    setActive(name)
  }

  const purchaseInputDataSet = [
    {
      type: "date",
      name: "date",
      placeholder: "Date",
      value: purchaseData.date,
    },
    {
      type: "text",
      name: "vendor",
      placeholder: "Name of Vendor",
      value: purchaseData.vendor,
    },
    {
      type: "number",
      name: "weight",
      placeholder: "Weight of Wood",
      value: purchaseData.weight,
    },
    {
      type: "number",
      name: "amount",
      placeholder: "Amount",
      value: purchaseData.amount,
    },
    {
      type: "text",
      name: "woodType",
      placeholder: "Type of Wood",
      value: purchaseData.woodType,
    },
    {
      type: "number",
      name: "taxPercent",
      placeholder: "Tax %",
      value: purchaseData.taxPercent,
    },
  ]

  const salesInputDataSet = [
    { type: "date", name: "date", placeholder: "Date", value: salesData.date },
    {
      type: "text",
      name: "buyer",
      placeholder: "Name of Buyer",
      value: salesData.buyer,
    },
    {
      type: "number",
      name: "size",
      placeholder: "Weight or Size of Wood",
      value: salesData.size,
    },
    {
      type: "number",
      name: "amount",
      placeholder: "Amount",
      value: salesData.amount,
    },
    {
      type: "text",
      name: "woodType",
      placeholder: "Type of Wood",
      value: salesData.woodType,
    },
  ]

  const handleInputChange = (name: string, value: string | number) => {
    if (isPurchase) {
      setPurchaseData((prev) => {
        return { ...prev, [name]: value }
      })
      console.log(purchaseData)
    } else {
      setSalesData((prev) => {
        return { ...prev, [name]: value }
      })
      console.log(salesData)
    }
  }

  return (
    <div className="flex justify-center items-center gap-4 flex-col h-screen bg-[#dfe1e6]">
      <p className="font-bold text-4xl">Add to Inventory</p>
      <div>
        <button
          onClick={() => setIsPurchase(true)}
          className=" rounded-md text-lg mr-3 bg-gradient-to-tr from-[#738bdc] to-[#48c3eb] font-medium w-[120px] py-2"
        >
          Purchase
        </button>
        <button
          onClick={() => setIsPurchase(false)}
          className=" rounded-md text-lg bg-gradient-to-tr from-[#738bdc] to-[#48c3eb] font-medium w-[120px] py-2"
        >
          Sales
        </button>
      </div>

      <div className="bg-white px-7 py-4 rounded-md shadow-md">
        {isPurchase ? (
          <div className="flex flex-col justify-center gap-[10px]">
            <p className="text-xl font-bold text-center">Purchase Form</p>
            {purchaseInputDataSet.map((inputData) => (
              <div
                key={inputData.name}
                className="flex justify-start flex-col items-start"
              >
                <label htmlFor={inputData.name} className="font-md">
                  {inputData.placeholder}
                </label>
                <input
                  id={inputData.name}
                  type={inputData.type}
                  name={inputData.name}
                  placeholder={inputData.placeholder}
                  value={inputData.value}
                  onChange={(e) =>
                    handleInputChange(inputData.name, e.target.value)
                  }
                  onClick={() => handleClick(inputData.name)}
                  className={`w-[500px] text-lg rounded-md px-3 py-1 outline-none bg-[#dfe1e6] ${
                    inputData.name === active ? "border-2 border-blue-500" : "border-2"
                  }`}
                />
              </div>
            ))}
            <select
              name="taxType"
              value={purchaseData.taxType}
              onChange={(e) => handleInputChange("taxType", e.target.value)}
              className={`w-[500px] text-lg rounded-md px-3 py-1 my-2 outline-none bg-[#dfe1e6] ${
                "taxType" === active ? "border-2 border-blue-500" : "border-2"
              }`}
            >
              <option value="IGST">IGST</option>
              <option value="CGST-SGST">CGST and SGST</option>
            </select>
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-[10px]">
            <p className="text-xl font-bold text-center">Sales Form</p>
            {salesInputDataSet.map((inputData) => (
              <div
                key={inputData.name}
                className="flex justify-start flex-col items-start"
              >
                <label htmlFor={inputData.name} className="font-md">{inputData.placeholder}</label>
                <input
                  id={inputData.name}
                  type={inputData.type}
                  name={inputData.name}
                  placeholder={inputData.placeholder}
                  value={inputData.value}
                  onChange={(e) =>
                    handleInputChange(inputData.name, e.target.value)
                  }
                  onClick={() => handleClick(inputData.name)}
                  className={`w-[500px] text-lg rounded-md px-3 py-1 outline-none  bg-[#dfe1e6] ${
                    inputData.name === active ? "border-2 border-blue-500" : "border-2"
                  }`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => console.log(isPurchase ? purchaseData : salesData)}
        className=" rounded-md text-lg bg-gradient-to-tr from-[#738bdc] to-[#48c3eb] font-medium w-[120px] py-2"
      >
        Add
      </button>
    </div>
  )
}

export default AddInventory
