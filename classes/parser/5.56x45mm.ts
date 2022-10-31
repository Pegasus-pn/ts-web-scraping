import { bullet } from "../../types/bullet";

export function parse5_56x45mm(p: string[]): bullet {
  let n = p[3] + " " + p[4] + " " + p[5];
  let damage = p[6] + p[7];
  let penetrationPower = Number(p[8] + p[9]);
  let armorDamage = Number(p[10] + p[11]);
  let accuracy = Number(p[12].replace("+", "") + p[13].replace("+", ""));
  let recoil = Number(p[14].replace("+", "") + p[15].replace("+", ""));
  let fragmentationChance = Number(
    p[16].replace("%", "") + p[17].replace("%", "")
  );
  let ricochetChance = Number(p[18].replace("%", "") + p[19].replace("%", ""));
  let projectileSpeed = Number(p[24].replace("%", "") + p[25].replace("%", ""));
  let lightBleedingChance = Number(p[20]);
  let heavyBleedingChance = Number(p[22]);
  if (p[8].includes("(")) {
    n = p[3] + " " + p[4] + " " + p[5] + " " + p[6] + " " + p[7] + " " + p[8];
    damage = p[10];
    penetrationPower = Number(p[12]);
    armorDamage = Number(p[14]);
    accuracy = Number(p[16].replace("+", ""));
    recoil = Number(p[18].replace("+", ""));
    fragmentationChance = Number(p[20].replace("%", ""));
    ricochetChance = Number(p[22].replace("%", ""));
    projectileSpeed = Number(p[28].replace("%", ""));
    lightBleedingChance = Number(p[24]);
    heavyBleedingChance = Number(p[26]);
  }
  return {
    cartridge: p[3],
    caliber: p[4],
    name: n,
    damage,
    penetrationPower,
    armorDamage,
    accuracy,
    recoil,
    fragmentationChance,
    projectileSpeed,
    lightBleedingChance,
    heavyBleedingChance,
    ricochetChance,
  };
}
