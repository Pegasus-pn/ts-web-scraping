import { bullet } from "../../types/bullet";

export function parse357and45(p: string[]): bullet {
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[3] + " " + p[4] + " " + p[5] + " " + p[6],
    damage: p[7] + p[8],
    penetrationPower: Number(p[9] + p[10]),
    armorDamage: Number(p[11] + p[12]),
    accuracy: Number(p[13] + p[14]),
    recoil: Number(p[15] + p[16]),
    fragmentationChance: Number(
      p[17].replace("%", "") + p[18].replace("%", "")
    ),
    projectileSpeed: Number(p[25].replace("%", "") + p[26].replace("%", "")),
    lightBleedingChance: Number(p[21] + p[22]),
    heavyBleedingChance: Number(p[23] + p[24]),
    ricochetChance: Number(p[19].replace("%", "") + p[20].replace("%", "")),
  };
}
