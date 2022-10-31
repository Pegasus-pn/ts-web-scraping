import { bullet } from "../../types/bullet";

export function parse12x70(p: string[]): bullet {
  let l = 0;
  let o = 0;
  if (p[4] === "flechette" || p[4] === "RIP") {
    l = 1;
  }
  if (p[4] === "Copper" || p[4] === "makeshift" || p[4] === "FTX") {
    o = 2;
  }
  return {
    cartridge: p[3],
    caliber: p[4],
    name:
      p[1 - l + o] +
      " " +
      p[2 - l + o] +
      " " +
      p[3 - l + o] +
      " " +
      p[4 - l + o] +
      " " +
      p[5 - l + o] +
      " " +
      p[6 - l + o],
    damage: p[7 - l + o] + p[8 - l + o],
    penetrationPower: Number(p[9 - l + o] + p[10 - l + o]),
    armorDamage: Number(p[11 - l + o] + p[12 - l + o]),
    accuracy: Number(
      p[13 - l + o].replace("+", "") + p[14 - l + o].replace("+", "")
    ),
    recoil: Number(
      p[15 - l + o].replace("+", "") + p[16 - l + o].replace("+", "")
    ),
    fragmentationChance: Number(
      p[17 - l + o].replace("%", "") + p[18 - l + o].replace("%", "")
    ),
    projectileSpeed: Number(
      p[25 - l + o].replace("%", "") + p[26 - l + o].replace("%", "")
    ),
    lightBleedingChance: Number(
      p[21 - l + o].replace("%", "") + p[22 - l + o].replace("%", "")
    ),
    heavyBleedingChance: Number(
      p[23 - l + o].replace("%", "") + p[24 - l + o].replace("%", "")
    ),
    ricochetChance: Number(
      p[19 - l + o].replace("%", "") + p[20 - l + o].replace("%", "")
    ),
  };
}
