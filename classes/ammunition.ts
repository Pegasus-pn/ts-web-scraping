import { Scraper } from "./scrape";
import { bullet } from "../types/bullet";
export class AmmunitionScraper extends Scraper {
  async run() {
    const ignoreList = ["AGS-30", "GL40, M32A1"];
    const results: bullet[] = [];
    await this.cli.get(this.url).then((html) => {
      const htmlParser = html.data;
      const $ = this.loader(htmlParser);
      /** @ts-ignore  */
      $("table.wikitable", htmlParser).each((_: any, e: string) => {
        const td = $(e).find("td").text();
        const tds = td.trim().split("\n");
        const weapons = tds.filter((j) => j !== "");
        const res: any[] = [];
        const usedByList = weapons.filter((k) => k.includes(":"));
        const nameList = weapons.filter((k) => !k.includes(":"));

        nameList.forEach((e, i) => {
          if (ignoreList.includes(e)) {
            return;
          }
          res[i] = {
            name: e,
            usedBy: "",
          };
          if (e === "30x29mm") {
            res[i].usedBy = "AGS-30";
          }
          if (e === "40x46mm") {
            res[i].usedBy = "GL40, M32A1";
          }
        });
        usedByList.forEach((e, i) => {
          res[i].usedBy = e;
          results.push(res[i]);
        });
      });
    });
    return results;
  }
}
