import axios from "axios";
import { load } from "cheerio";
import { AmmunitionScraper } from "../classes/ammunition";
import { BulletScraper } from "../classes/bullet";
import { Client } from "../client/dynamodb";

const BASEURL = "https://escapefromtarkov.fandom.com/wiki";
const AMMULATION = "Ammunition";

const ammunitionScraper = new AmmunitionScraper(
  BASEURL + "/" + AMMULATION,
  axios,
  load
);

const cli = new Client();

async function start() {
  const bullets = await ammunitionScraper.run().then((e) => e);
  bullets.forEach((e, i) => {
    const segment = e.name.replace(" ", "_");
    if (i === 0) {
      return;
    }
    const bulletScraper = new BulletScraper(
      BASEURL + "/" + segment,
      axios,
      load
    );
    bulletScraper.run().then((e) => {
      cli.put(e);
    });
  });
}

start();
