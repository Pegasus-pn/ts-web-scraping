import axios from "axios";
import express from "express";
import { load } from "cheerio";
import { bullet } from "./types/bullet";

const PORT = 3030;
const URL = "https://escapefromtarkov.fandom.com/wiki/Ammunition";

const results: bullet[] = [];
const ignoreList = ["AGS-30", "GL40, M32A1"];

axios(URL).then((html) => {
  const htmlParser = html.data;
  const $ = load(htmlParser);

  $("table.wikitable", htmlParser).each((i, e) => {
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

const app = express();
app.set("view engine", "ejs");
app.listen(PORT);
app.get("/get", (req, res) => {
  console.log(results);
  return res.render("index", { results });
});
