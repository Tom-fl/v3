export interface Today {
  confirm: number
  isUpdated: boolean
}

export interface Total {
  provinceLocalConfirm: number
  adcode: string
  confirm: number
  wzz: number
  heal: number
  continueDayZeroLocalConfirmAdd: number
  nowConfirm: number
  dead: number
  mtime: string
  showHeal: boolean
  highRiskAreaNum: number
  continueDayZeroLocalConfirm: number
  showRate: boolean
  mediumRiskAreaNum: number
}

export interface Today {
  dead_add: number
  confirm: number
  confirmCuts: number
  isUpdated: boolean
  tip: string
  wzz_add: number
  local_confirm_add: number
  abroad_confirm_add: number
}

export interface Total {
  provinceLocalConfirm: number
  continueDayZeroLocalConfirmAdd: number
  mtime: string
  dead: number
  mediumRiskAreaNum: number
  highRiskAreaNum: number
  continueDayZeroConfirmAdd: number
  continueDayZeroConfirm: number
  adcode: string
  nowConfirm: number
  confirm: number
  showRate: boolean
  heal: number
  showHeal: boolean
  wzz: number
}

export interface Today {
  local_confirm_add: number
  confirm: number
  confirmCuts: number
  isUpdated: boolean
  wzz_add: number
}

export interface Total {
  continueDayZeroLocalConfirmAdd: number
  confirm: number
  highRiskAreaNum: number
  nowConfirm: number
  provinceLocalConfirm: number
  adcode: string
  showHeal: boolean
  wzz: number
  heal: number
  mediumRiskAreaNum: number
  continueDayZeroLocalConfirm: number
  mtime: string
  dead: number
  showRate: boolean
}

export interface Children {
  today: Today
  total: Total
  name: string
  adcode: string
  date: string
}

export interface Children {
  date: string
  today: Today
  total: Total
  children: Children[]
  name: string
  adcode: string
}

export interface AreaTree {
  name: string
  today: Today
  total: Total
  children: Children[]
}

export interface ChinaTotal {
  suspect: number
  mtime: string
  highRiskAreaNum: number
  localConfirm: number
  heal: number
  showLocalConfirm: number
  mediumRiskAreaNum: number
  localConfirmH5: number
  localConfirmAdd: number
  nowConfirm: number
  mRiskTime: string
  confirm: number
  noInfect: number
  showlocalinfeciton: number
  noInfectH5: number
  localWzzAdd: number
  confirmAdd: number
  nowLocalWzz: number
  deadAdd: number
  dead: number
  nowSevere: number
  importedCase: number
  local_acc_confirm: number
}

export interface ChinaAdd {
  nowSevere: number
  localConfirm: number
  confirm: number
  nowConfirm: number
  suspect: number
  importedCase: number
  noInfect: number
  noInfectH5: number
  localConfirmH5: number
  heal: number
  dead: number
}

export interface ShowAddSwitch {
  importedCase: boolean
  localConfirm: boolean
  all: boolean
  confirm: boolean
  dead: boolean
  nowSevere: boolean
  localinfeciton: boolean
  suspect: boolean
  heal: boolean
  nowConfirm: boolean
  noInfect: boolean
}

export interface Diseaseh5Shelf {
  areaTree: AreaTree[]
  lastUpdateTime: string
  chinaTotal: ChinaTotal
  chinaAdd: ChinaAdd
  isShowAdd: boolean
  showAddSwitch: ShowAddSwitch
}

export interface StatisGradeCityDetail {
  nowConfirm: number
  confirm: number
  dead: number
  heal: number
  date: string
  mtime: string
  sdate: string
  city: string
  syear: number
  confirmAdd: number
  grade: string
  wzz_add: string
  province: string
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf
  statisGradeCityDetail: StatisGradeCityDetail[]
}
