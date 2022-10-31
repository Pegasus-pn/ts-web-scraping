import { bullet } from "../../types/bullet";

export function parse9x19mm(p: string[]): bullet {
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[3] + " " + p[4] + " " + p[5],
    damage: p[6] + p[7],
    penetrationPower: Number(p[8] + p[9]),
    armorDamage: Number(p[10] + p[11]),
    accuracy: Number(p[12].replace("+", "") + p[13].replace("+", "")),
    recoil: Number(p[14].replace("+", "") + p[15].replace("+", "")),
    fragmentationChance: Number(
      p[16].replace("%", "") + p[17].replace("%", "")
    ),
    projectileSpeed: Number(p[24].replace("%", "") + p[25].replace("%", "")),
    lightBleedingChance: Number(
      p[20].replace("%", "") + p[21].replace("%", "")
    ),
    heavyBleedingChance: Number(
      p[22].replace("%", "") + p[23].replace("%", "")
    ),
    ricochetChance: Number(p[18].replace("%", "") + p[19].replace("%", "")),
  };
}
