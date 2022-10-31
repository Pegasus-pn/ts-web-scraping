import { Scraper } from "./scrape";
import { bullet } from "../types/bullet";
import { parse7_26x26mm } from "./parser/7.62x25mm";
import { parse9x18mm } from "./parser/9x18mm";
import { parse9x19mm } from "./parser/9x19mm";
import { parse357and45 } from "./parser/357";
import { parse5_45x39mm } from "./parser/5.45x39mm";
import { parse5_56x45mm } from "./parser/5.56x45mm";
import { parse300 } from "./parser/300";
import { parse7_62x54mm } from "./parser/7.62x54mm";
import { parse338 } from "./parser/338";
import { parse12_7x108mm } from "./parser/12.7x108mm";
import { parse12x70 } from "./parser/12x70";
import { parse26x75mm } from "./parser/26x75mm";
import { parse23x75mm } from "./parser/23x75mm";

export class BulletScraper extends Scraper {
  async run() {
    const results: bullet[] = [];
    await this.cli.get(this.url).then((html) => {
      const htmlParser = html.data;
      const $ = this.loader(htmlParser);
      /** @ts-ignore */
      $("table.wikitable", htmlParser).each((_, e) => {
        /** @ts-ignore */
        $(e)
          .find("tbody")
          .first()
          .find("tr")
          .each(function (j, k) {
            if (j === 0) return;
            const t = $(this).text().replace(/\r?\n/g, " ");
            const p = t.split(" ");
            switch (p[3]) {
              case "7.62x25mm":
                results[j] = parse7_26x26mm(p);
                break;
              case "9x18mm":
                results[j] = parse9x18mm(p);
                break;
              case "9x19mm":
                results[j] = parse9x19mm(p);
                break;
              case ".357":
                results[j] = parse357and45(p);
                break;
              case ".45":
                results[j] = parse357and45(p);
                break;
              case "5.45x39mm":
                results[j] = parse5_45x39mm(p);
                break;
              case "5.56x45mm":
                results[j] = parse5_56x45mm(p);
                break;
              case ".300":
                results[j] = parse300(p);
                break;
              case "7.62x54mm":
                results[j] = parse7_62x54mm(p);
                break;
              case ".338":
                results[j] = parse338(p);
                break;
              case "12.7x108mm":
                results[j] = parse12_7x108mm(p);
                break;
              case "12/70":
                results[j] = parse12x70(p);
                break;
              case "23x75mm":
                results[j] = parse23x75mm(p);
                break;
              case "26x75mm":
                results[j] = parse26x75mm(p);
                break;
              default:
                results[j] = parse9x19mm(p);
                break;
            }
          });
        // return results;
      });
    });
    return results;
  }
}
