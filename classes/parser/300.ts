import { bullet } from "../../types/bullet";

export function parse300(p: string[]): bullet {
  let l = 0;
  if (p[4] === "Whisper") {
    l = 1;
  }
  return {
    cartridge: p[3],
    caliber: p[4],
    name: p[3] + " " + p[4] + " " + p[5] + " " + p[6 - l],
    damage: p[7 - l] + p[8 - l],
    penetrationPower: Number(p[9 - l] + p[10 - l]),
    armorDamage: Number(p[11 - l] + p[12 - l]),
    accuracy: Number(p[13 - l].replace("+", "") + p[14 - l].replace("+", "")),
    recoil: Number(p[15 - l].replace("+", "") + p[16 - l].replace("+", "")),
    fragmentationChance: Number(
      p[17 - l].replace("%", "") + p[18 - l].replace("%", "")
    ),
    projectileSpeed: Number(
      p[25 - l].replace("%", "") + p[26 - l].replace("%", "")
    ),
    lightBleedingChance: Number(p[21 - l] + p[22 - l]),
    heavyBleedingChance: Number(p[23 - l] + p[24 - l]),
    ricochetChance: Number(
      p[19 - l].replace("%", "") + p[20 - l].replace("%", "")
    ),
  };
}
