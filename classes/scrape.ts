import axios, { Axios } from "axios";
import { load } from "cheerio";

export class Scraper {
  cli: Axios;
  url: string;
  loader: typeof load;

  constructor(url: string, cli: Axios = axios, loader: Function) {
    this.cli = cli;
    this.url = url;
    this.loader = load;
  }

  run() {}
}
