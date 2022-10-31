import { bullet } from "../../types/bullet";

export function parse26x75mm(p: string[]): bullet {
  let l = 0;
  if (p[4] === "flare") {
    l = 2;
  }
  return {
    cartridge: p[3],
    caliber: p[4],
    name:
      p[3 - l] +
      " " +
      p[4 - l] +
      " " +
      p[5 - l] +
      " " +
      p[6 - l] +
      " " +
      p[7 - l] +
      " " +
      p[8 - l],
    damage: p[10 - l],
    penetrationPower: Number(p[12 - l]),
    armorDamage: Number(p[14 - l]),
    accuracy: Number(p[16 - l].replace("+", "")),
    recoil: Number(p[18 - l].replace("+", "")),
    fragmentationChance: Number(p[20 - l].replace("%", "")),
    projectileSpeed: Number(
      p[24 - l].replace("%", "") + p[25 - l].replace("%", "")
    ),
    lightBleedingChance: Number(p[22 - l].replace("%", "")),
    heavyBleedingChance: Number(p[24 - l].replace("%", "")),
    ricochetChance: Number(
      p[18 - l].replace("%", "") + p[19 - l].replace("%", "")
    ),
  };
}
