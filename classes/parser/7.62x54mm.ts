import { bullet } from "../../types/bullet";

export function parse7_62x54mm(p: string[]): bullet {
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[3] + " " + p[4] + " " + p[5] + " " + p[6],
    damage: p[8],
    penetrationPower: Number(p[10]),
    armorDamage: Number(p[12]),
    accuracy: Number(p[14].replace("+", "") + p[15].replace("+", "")),
    recoil: Number(p[16].replace("+", "") + p[17].replace("+", "")),
    fragmentationChance: Number(
      p[18].replace("%", "") + p[19].replace("%", "")
    ),
    projectileSpeed: Number(p[25].replace("%", "") + p[26].replace("%", "")),
    lightBleedingChance: Number(p[21] + p[22]),
    heavyBleedingChance: Number(p[23] + p[24]),
    ricochetChance: Number(p[19].replace("%", "") + p[20].replace("%", "")),
  };
}
