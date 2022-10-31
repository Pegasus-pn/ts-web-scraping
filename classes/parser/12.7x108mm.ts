import { bullet } from "../../types/bullet";

export function parse12_7x108mm(p: string[]): bullet {
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[3] + " " + p[4],
    damage: p[6],
    penetrationPower: Number(p[8]),
    armorDamage: Number(p[10]),
    accuracy: 0,
    recoil: 0,
    fragmentationChance: Number(p[12].replace("%", "")),
    projectileSpeed: Number(p[20].replace("%", "")),
    lightBleedingChance: Number(p[16].replace("%", "")),
    heavyBleedingChance: Number(p[18].replace("%", "")),
    ricochetChance: Number(p[14].replace("%", "")),
  };
}
