import AWS from "aws-sdk";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { bullet } from "../types/bullet";

// Set the region
AWS.config.update({ region: "ap-northeast-1" });

// Create the DynamoDB service object
const ddb = new DynamoDB({ apiVersion: "2012-08-10" });

ddb.listTables({}).then((e) => {
  if (e.TableNames?.indexOf("tarkov-bullet") !== -1) {
    return;
  }
  // Call DynamoDB to create the table
  ddb.createTable(
    {
      AttributeDefinitions: [
        {
          AttributeName: "cartridge",
          AttributeType: "S",
        },
        {
          AttributeName: "name#damage",
          AttributeType: "S",
        },
      ],
      KeySchema: [
        {
          AttributeName: "cartridge",
          KeyType: "HASH",
        },
        {
          AttributeName: "name#damage",
          KeyType: "RANGE",
        },
      ],
      BillingMode: "PAY_PER_REQUEST",
      TableName: "tarkov-bullet",
      StreamSpecification: {
        StreamEnabled: false,
      },
    },
    function (err: any, data: any) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Table Created", data);
      }
    }
  );
});

export class Client {
  cli: DynamoDB;
  tableName: string;
  ddd: DynamoDBDocument;

  constructor(
    cli: DynamoDB = ddb,
    tableName: string = "tarkov-bullet",
    ddd: DynamoDBDocument = DynamoDBDocument.from(
      new DynamoDB({ region: "ap-northeast-1" })
    )
  ) {
    this.cli = cli;
    this.tableName = tableName;
    this.ddd = ddd;
  }

  parse(i: bullet): any {
    const item = {
      cartridge: i.cartridge.trim(),
      "name#damage": i.name.trim() + "#" + i.damage.trim(),
      caliber: i.caliber.trim(),
      name: i.name.trim(),
      damage: i.damage.trim(),
      penetrationPower: String(i.penetrationPower).trim(),
      armorDamage: String(i.armorDamage).trim(),
      accuracy: String(i.accuracy).trim(),
      recoil: String(i.recoil).trim(),
      fragmentationChance: String(i.fragmentationChance).trim(),
      ricochetChance: String(i.ricochetChance).trim(),
      lightBleedingChance: String(i.lightBleedingChance).trim(),
      heavyBleedingChance: String(i.heavyBleedingChance).trim(),
      projectileSpeed: String(i.projectileSpeed).trim(),
    };
    return item;
  }

  put(items: any[]) {
    const inputs: any[] = items.map((e) => {
      return this.parse(e);
    });

    this.ddd.batchWrite({
      RequestItems: {
        "tarkov-bullet": inputs.map((item) => ({
          PutRequest: {
            Item: item,
          },
        })),
      },
    });
  }
}
