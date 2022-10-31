import { bullet } from "../../types/bullet";

export function parse23x75mm(p: string[]): bullet {
  let l = 0;
  if (p[4] === '"Zvezda"') {
    l = 1;
  }
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[2 + l] + " " + p[3 + l] + " " + p[4 + l] + " " + p[5 + l],
    damage: p[6 + l] + p[7 + l],
    penetrationPower: Number(p[8 + l] + p[9 + l]),
    armorDamage: Number(p[10 + l] + p[11 + l]),
    accuracy: Number(p[12 + l].replace("+", "") + p[13 + l].replace("+", "")),
    recoil: Number(p[14 + l].replace("+", "") + p[15 + l].replace("+", "")),
    fragmentationChance: Number(
      p[16 + l].replace("%", "") + p[17 + l].replace("%", "")
    ),
    projectileSpeed: Number(
      p[24 + l].replace("%", "") + p[25 + l].replace("%", "")
    ),
    lightBleedingChance: Number(
      p[20 + l].replace("%", "") + p[21 + l].replace("%", "")
    ),
    heavyBleedingChance: Number(
      p[22 + l].replace("%", "") + p[23 + l].replace("%", "")
    ),
    ricochetChance: Number(
      p[18 + l].replace("%", "") + p[19 + l].replace("%", "")
    ),
  };
}
