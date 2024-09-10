import banksData from "./bankList.json"

export class NigerianBanks {
  public getAllBanks(): INigerianBank[] {
    return banksData
  }

  public getBankByName(name: string): INigerianBank | undefined {
    return banksData.find((bank) => bank.name === name)
  }

  public getBankByNameMatch(name: string): INigerianBank[] {
    return banksData.filter((bank) =>
      bank.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  public getBankByCode(code: string): INigerianBank | undefined {
    return banksData.find((bank) => bank.code === code)
  }
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
