import { bullet } from "./bullet";

export type item = {
  cartridge: string;
  "name#damage": string;
  caliber: string;
  name: string;
  damage: string;
  penetrationPower: number;
  armorDamage: number;
  accuracy: number;
  recoil: number;
  fragmentationChance: number;
  ricochetChance: number;
  lightBleedingChance: number;
  heavyBleedingChance: number;
  projectileSpeed: number;
};
