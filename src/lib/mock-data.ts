// Mock data shaped after the Lantaw RN app entities.
export type UserStatus = "active" | "suspended" | "pending";
export type AdStatus = "draft" | "pending" | "active" | "paused" | "rejected";
export type RedemptionStatus = "pending" | "fulfilled" | "cancelled";
export type TxnType = "earn" | "redeem" | "payout" | "topup";

export interface AppUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  points: number;
  joinedAt: string;
  status: UserStatus;
  referrals: number;
}

export interface Advertiser {
  id: string;
  name: string;
  initial: string;
  category: string;
  activeAds: number;
  spend: number;
  status: "verified" | "pending" | "blocked";
}

export interface Ad {
  id: string;
  title: string;
  advertiser: string;
  image: string;
  plan: "Basic" | "Pro" | "Premium";
  budget: number;
  pointsPerView: number;
  views: number;
  status: AdStatus;
  createdAt: string;
}

export interface Reward {
  id: string;
  title: string;
  subtitle: string;
  brand: string;
  image: string;
  points: number;
  stock: number;
  active: boolean;
}

export interface Redemption {
  id: string;
  userId: string;
  userName: string;
  rewardId: string;
  rewardTitle: string;
  points: number;
  status: RedemptionStatus;
  requestedAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  type: TxnType;
  amount: number;
  note: string;
  createdAt: string;
}

export const users: AppUser[] = [
  { id: "u_001", name: "Mariel Santos", email: "mariel@lantaw.app", avatar: "https://i.pravatar.cc/80?img=47", points: 143431, joinedAt: "2024-02-11", status: "active", referrals: 12 },
  { id: "u_002", name: "Jonas Reyes", email: "jonas@lantaw.app", avatar: "https://i.pravatar.cc/80?img=12", points: 86200, joinedAt: "2024-03-04", status: "active", referrals: 4 },
  { id: "u_003", name: "Aira Cruz", email: "aira@lantaw.app", avatar: "https://i.pravatar.cc/80?img=32", points: 22400, joinedAt: "2024-04-20", status: "pending", referrals: 0 },
  { id: "u_004", name: "Kenji Tan", email: "kenji@lantaw.app", avatar: "https://i.pravatar.cc/80?img=15", points: 51890, joinedAt: "2024-01-09", status: "active", referrals: 7 },
  { id: "u_005", name: "Liza Ong", email: "liza@lantaw.app", avatar: "https://i.pravatar.cc/80?img=44", points: 980, joinedAt: "2024-05-22", status: "suspended", referrals: 1 },
  { id: "u_006", name: "Paolo Garcia", email: "paolo@lantaw.app", avatar: "https://i.pravatar.cc/80?img=8", points: 12030, joinedAt: "2024-05-30", status: "active", referrals: 3 },
];

export const advertisers: Advertiser[] = [
  { id: "ad_brewed", name: "Brewed Bliss", initial: "B", category: "Food & Beverage", activeAds: 3, spend: 4200, status: "verified" },
  { id: "ad_stride", name: "Stride Sports", initial: "S", category: "Sportswear", activeAds: 2, spend: 6800, status: "verified" },
  { id: "ad_zenith", name: "Zenith Audio", initial: "Z", category: "Electronics", activeAds: 1, spend: 1500, status: "pending" },
  { id: "ad_lumio", name: "Lumio Home", initial: "L", category: "Home", activeAds: 0, spend: 0, status: "blocked" },
];

export const ads: Ad[] = [
  { id: "1", title: "Sip Pure Perfection", advertiser: "Brewed Bliss", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600", plan: "Pro", budget: 1200, pointsPerView: 50, views: 18400, status: "active", createdAt: "2024-05-01" },
  { id: "2", title: "Run Further, Run Faster", advertiser: "Stride Sports", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", plan: "Premium", budget: 3500, pointsPerView: 75, views: 42100, status: "active", createdAt: "2024-04-12" },
  { id: "3", title: "Sound that Moves You", advertiser: "Zenith Audio", image: "https://images.unsplash.com/photo-1518443895914-2faa354a32e7?w=600", plan: "Basic", budget: 400, pointsPerView: 25, views: 320, status: "pending", createdAt: "2024-05-28" },
  { id: "4", title: "Warm Up Your Home", advertiser: "Lumio Home", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600", plan: "Basic", budget: 250, pointsPerView: 20, views: 0, status: "rejected", createdAt: "2024-05-30" },
  { id: "5", title: "Cold Brew Season", advertiser: "Brewed Bliss", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600", plan: "Pro", budget: 1500, pointsPerView: 60, views: 9800, status: "paused", createdAt: "2024-05-18" },
];

export const rewards: Reward[] = [
  { id: "speaker", title: "Bluetooth Speaker", subtitle: "Portable, high-quality sound", brand: "JBL", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", points: 100000, stock: 24, active: true },
  { id: "fitness", title: "Fitness Tracker", subtitle: "Heart rate and steps", brand: "fitbit", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400", points: 100000, stock: 12, active: true },
  { id: "kindle", title: "Kindle E-book Reader", subtitle: "8GB glare-free display", brand: "amazon", image: "https://images.unsplash.com/photo-1592434134753-a70baf7979d5?w=400", points: 100000, stock: 6, active: true },
  { id: "earbuds", title: "Wireless Earbuds", subtitle: "Active noise cancelling", brand: "Sony", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400", points: 75000, stock: 0, active: false },
];

export const redemptions: Redemption[] = [
  { id: "r_001", userId: "u_001", userName: "Mariel Santos", rewardId: "speaker", rewardTitle: "Bluetooth Speaker", points: 100000, status: "pending", requestedAt: "2024-05-30" },
  { id: "r_002", userId: "u_002", userName: "Jonas Reyes", rewardId: "fitness", rewardTitle: "Fitness Tracker", points: 100000, status: "fulfilled", requestedAt: "2024-05-22" },
  { id: "r_003", userId: "u_004", userName: "Kenji Tan", rewardId: "kindle", rewardTitle: "Kindle E-book Reader", points: 100000, status: "pending", requestedAt: "2024-05-29" },
  { id: "r_004", userId: "u_005", userName: "Liza Ong", rewardId: "earbuds", rewardTitle: "Wireless Earbuds", points: 75000, status: "cancelled", requestedAt: "2024-05-18" },
];

export const transactions: Transaction[] = [
  { id: "t_001", userId: "u_001", userName: "Mariel Santos", type: "earn", amount: 50, note: "Viewed: Sip Pure Perfection", createdAt: "2024-05-31" },
  { id: "t_002", userId: "u_002", userName: "Jonas Reyes", type: "redeem", amount: -100000, note: "Redeemed Fitness Tracker", createdAt: "2024-05-22" },
  { id: "t_003", userId: "u_004", userName: "Kenji Tan", type: "earn", amount: 75, note: "Viewed: Run Further, Run Faster", createdAt: "2024-05-30" },
  { id: "t_004", userId: "u_001", userName: "Mariel Santos", type: "payout", amount: -2500, note: "Affiliate payout", createdAt: "2024-05-15" },
  { id: "t_005", userId: "u_006", userName: "Paolo Garcia", type: "topup", amount: 5000, note: "Card top-up", createdAt: "2024-05-12" },
];

// KPI series
export const revenueSeries = [
  { day: "Mon", revenue: 1200, views: 8200 },
  { day: "Tue", revenue: 1850, views: 9400 },
  { day: "Wed", revenue: 1600, views: 11200 },
  { day: "Thu", revenue: 2200, views: 13800 },
  { day: "Fri", revenue: 2800, views: 15200 },
  { day: "Sat", revenue: 3100, views: 17600 },
  { day: "Sun", revenue: 2600, views: 14900 },
];

export const planSplit = [
  { name: "Basic", value: 32 },
  { name: "Pro", value: 48 },
  { name: "Premium", value: 20 },
];
