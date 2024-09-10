export type PurchaseItem = {
  date: string
  vendor: string
  weight: number
  amount: number
  woodType: string
  taxType: string
  taxPercent: number
}

export type SalesItem = {
  date: string
  buyer: string
  size: number
  amount: number
  woodType: string
}
