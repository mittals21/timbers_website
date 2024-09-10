import React, { useState } from "react"

const AddInventory = () => {
  const [isPurchase, setIsPurchase] = useState()

  return (
    <div>
      <div>
        <p>Add to Inventory</p>
        <div>
          <button>Purchase</button>
          <button>Sales</button>
        </div>

        {isPurchase ? (
          <div className="flex flex-col justify-center">
            <p>Purchase Form</p>
            <input type="date" name="date" placeholder="Date" />
            <input type="text" name="vendor" placeholder="Name of Vendor" />
            <input type="number" name="weight" placeholder="Weight of Wood" />
            <input type="number" name="amount" placeholder="Amount" />
            <input type="text" name="woodType" placeholder="Type of Wood" />
            <select name="taxType">
              <option value="IGST">IGST</option>
              <option value="CGST-SGST">CGST and SGST</option>
            </select>
            <input type="number" name="taxPercent" placeholder="Tax %" />
          </div>
        ) : (
          <div className="">
            <p>Sales Form</p>
            <input type="date" name="date" placeholder="Date" />
            <input type="text" name="buyer" placeholder="Name of Buyer" />
            <input
              type="number"
              name="size"
              placeholder="Weight or Size of Wood"
            />
            <input type="number" name="amount" placeholder="Amount" />
            <input type="text" name="woodType" placeholder="Type of Wood" />
          </div>
        )}
        <button>Add</button>
      </div>
    </div>
  )
}

export default AddInventory
