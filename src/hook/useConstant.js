import { IMAGE } from "@/assets"

const useConstant = () => {

  const STATUSRECORD = {
    pulling: "Pull down to refresh",
    canRelease: "Release immediately refresh",
    refreshing: "Loading...",
    complete: "Refresh successfully",
  }

  const TABS = [{
    key: "/home",
    value: "Home",
    icon: IMAGE.tabbar_home,
    selicon: IMAGE.tabbar_home_sel
  }, {
    key: "/wallet",
    value: "Wallet",
    icon: IMAGE.tabbar_wallet,
    selicon: IMAGE.tabbar_wallet_sel
  }, {
    key: "/rewards",
    value: "Rewards",
    icon: IMAGE.tabbar_rewards,
    selicon: IMAGE.tabbar_rewards_sel
  }, {
    key: "/profile",
    value: "Profile",
    icon: IMAGE.tabbar_profile,
    selicon: IMAGE.tabbar_profile_sel
  }]

  const NAVBARTYPE = {
    "light": 0,
    "dark": 1
  }

  const ITEMTYPE = {
    "menu": 0,
    "info": 1,
  }

  const NETWORKS = [{
    label: "TRON",
    name: "TRC20",
    color: "#EE689D"
  }, {
    label: "BSC",
    name: "BEP20",
    color: "#F6BB42"
  }, {
    label: "Polygon",
    name: "Polygon",
    color: "#967ADC"
  }, {
    label: "ETH",
    name: "ERC20",
    color: "#3BAFDA"
  }]

  const WALLETS = [{
    name: "USDT",
    icon: IMAGE.usdt
  }, {
    name: "Credit",
    icon: IMAGE.credit
  }, {
    name: "Coupon",
    icon: IMAGE.coupon
  }]
  
  const REWARDS = [{
    name: "Extra Creadits",
    content: "Reward 6% of the smaller of the static total earnings between the invitee (all direct referrals within 2 levels) and oneself. The reward is distributed based on the number of individuals within the direct referral network, up to 2 levels.",
    key: "extra",
  }, {
    name: "Referral Bonus",
    content: "Reward 6% of the smaller of the static total earnings between the invitee (all direct referrals within 2 levels) and oneself. The reward is distributed based on the number of individuals within the direct referral network, up to 2 levels.",
    key: "referral",
  }, {
    name: "Binary Bonus",
    content: "The larger branch, determined by cumulative effective performance (based on bandwidth), is referred to as the “big zone,” while the smaller branch is called the “small zone.” A 6% reward is granted for the daily new performance in the small zone.",
    key: "binary",
  }, {
    name: "Vortex Bonus",
    content: "Assessment criteria: Within the direct referral network, at least 8 valid accounts are required among the 1st level accounts. \n Reward amount: In the dual-track network, down to 8 levels encompassing a maximum of 510 accounts; a reward of 6% is granted based on the total fork bonus of these accounts",
    key: "vortex",
  }, {
    name: "Symmetry Bonus",
    content: "Assessment criteria: 1. Small zone must have a minimum of 7 valid accounts added. 2. Weekly new performance in the small zone must be no less than 50000 USDT. \n Reward amount: 6% of the total static earnings in the small zone.",
    key: "symmetry",
  }, {
    name: "Elite Bonus",
    content: "Assessment criteria: 1. Small zone must have a total bandwidth exceeding 1 Tb. 2. Approval from the headquarters is required. \n Reward amount: 6% of the daily new performance in the small zone.",
    key: "elite",
  }]

  return {
    STATUSRECORD,
    TABS,
    NAVBARTYPE,
    ITEMTYPE,
    NETWORKS,
    WALLETS,
    REWARDS
  }
}

export default useConstant