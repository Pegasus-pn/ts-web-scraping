export type bullet = {
  // 薬莢
  cartridge: string;
  // 口径
  caliber: string;
  // 名前
  name: string;
  // ダメージ
  damage: string;
  // 貫通力
  penetrationPower: number;
  // アーマーダメージ
  armorDamage: number;
  // 命中率
  accuracy: number;
  // 反動
  recoil: number;
  // 破砕率
  fragmentationChance: number;
  // 跳弾率
  ricochetChance: number;
  // 軽度出血率
  lightBleedingChance: number;
  // 重度出血率
  heavyBleedingChance: number;
  // 弾速
  projectileSpeed: number;
};
