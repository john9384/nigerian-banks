import banksData from "./bankList.json"

class NigerianBanks {
  static getAllBanks(): INigerianBank[] {
    return banksData
  }

  static getBankByName(name: string): INigerianBank | undefined {
    return banksData.find((bank) => bank.name === name)
  }

  static getBankByNameMatch(name: string): INigerianBank[] {
    return banksData.filter((bank) =>
      bank.name.toLowerCase().includes(name.toLowerCase())
    )
  }

  static getBankByCode(code: string): INigerianBank | undefined {
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
