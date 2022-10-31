import { bullet } from "../../types/bullet";

export function parse9x18mm(p: string[]): bullet {
  let l = 0;
  let o = 0;
  if (p[7] === "PPO") {
    l = 1;
  }
  if (p[5] === "PSV") {
    o = 1;
  }
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[3] + " " + p[4] + " " + p[5] + " " + p[6] + " " + p[7 - o],
    damage: p[8 + l - o],
    penetrationPower: Number(p[9 + l - o] + p[10 + l - o]),
    armorDamage: Number(p[11 + l - o] + p[12 + l - o]),
    accuracy: Number(p[13 + l - o] + p[14 + l - o]),
    recoil: Number(p[15 + l - o] + p[16 + l - o]),
    fragmentationChance: Number(
      p[17 + l - o].replace("%", "") + p[18 + l - o].replace("%", "")
    ),
    projectileSpeed: Number(
      p[25 + l - o].replace("%", "") + p[26 + l - o].replace("%", "")
    ),
    lightBleedingChance: Number(p[21 + l - o] + p[22 + l - o]),
    heavyBleedingChance: Number(p[23 + l - o] + p[24 + l - o]),
    ricochetChance: Number(
      p[19 + l - o].replace("%", "") + p[20 + l - o].replace("%", "")
    ),
  };
}
