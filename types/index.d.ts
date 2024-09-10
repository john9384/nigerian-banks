declare module "nigerian-banks" {
  export class NigerianBanks {
    getAllBanks(): INigerianBank[]
    getBankByName(name: string): INigerianBank | undefined
    getBankByNameMatch(name: string): INigerianBank[]
    getBankByCode(code: string): INigerianBank | undefined
  }

  export type INigerianBank = {
    name: string
    code: string
    slug: string
    longcode: string
    country: string
    currency: string
    type: string
    logo?: string
  }
}
