import { Component, OnInit } from '@angular/core';
declare var require: any
const CosmosClient = require("@azure/cosmos").CosmosClient;

@Component({
  selector: 'app-dive',
  templateUrl: './dive.component.html',
  styleUrls: ['./dive.component.scss']
})
export class DiveComponent implements OnInit {
  config: any = {
    endpoint: "https://my-app-db.documents.azure.com:443/",
    key: "",
    databaseId: "Dives",
    containerId: "MyCollection",
    partitionKey: { kind: "Hash", paths: ["/location"] }
  };

  client: any;
  database: any;
  container: any;

  newItem = {
    id: "000005",
    location: "Austrailia",
    duration: "23:15",
    videoId: "3"
  };

  constructor() {}

  async ngOnInit() {
    const endpoint = this.config.endpoint;
    const key = this.config.key;
    this.client = new CosmosClient({endpoint, key });

    this.database = this.client.database(this.config.databaseId);
    this.container = this.database.container(this.config.containerId);

    // Make sure Tasks database is already setup. If not, create it.
    await this.createDB(this.client, this.config.databaseId, this.config.containerId);
  }

  async createDB(client: any, databaseId: any, containerId: any) {
    const partitionKey = this.config.partitionKey;
    const { database } = await client.databases.createIfNotExists({
      id: databaseId
    });
    console.log(`Created database:\n${database.id}\n`);
    const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists(
      { id: containerId, partitionKey },
      { offerThroughput: 400 }
    );

    console.log(`Created container:\n${container.id}\n`);
  }

  async get() {
    // <QueryItems>
    console.log(`Querying container: Items`);

    // query to return all items
    const querySpec = {
    query: "SELECT * from c"
    };

    // read all items in the Items container
    const { resources: items } = await this.container.items
    .query(querySpec)
    .fetchAll();

    items.forEach(item => {
    console.log(`${item.id} - ${item.location}`);
    });
    // </QueryItems>
  }

  async create() {
    // <CreateItem>
    /** Create new item
     * newItem is defined at the top of this file
     */
    const { resource: createdItem } = await this.container.items.create(this.newItem);
    
    console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.location}\r\n`);
    // </CreateItem>
  }

  async update() {
    // <UpdateItem>
    /** Update item
     * Pull the id and partition key value from the newly created item.
     * Update the isComplete field to true.
     */
    const querySpec = {
      query: `SELECT * from c WHERE c.id = '${this.newItem.id}'`
    };

    // read all items in the Items container
    const { resources: ItemsToUpdate } = await this.container.items
    .query(querySpec)
    .fetchAll();
    const ItemToUpdate = ItemsToUpdate[0]

    console.log(`item: ${ItemToUpdate.id} - ${ItemToUpdate.location}`); 
    console.log(`videoId ${ItemToUpdate.videoId}\r\n`);

    const { id, location } = ItemToUpdate;

    ItemToUpdate.videoId = "2";

    const { resource: updatedItem } = await this.container
    .item(id, location)
    .replace(ItemToUpdate);

    console.log(`Updated item: ${updatedItem.id} - ${updatedItem.location}`); 
    console.log(`Updated videoId to ${updatedItem.videoId}\r\n`);
    // </UpdateItem>
  }

  async delete() {
    // <DeleteItem>    
    /**
     * Delete item
     * Pass the id and partition key value to delete the item
    */
    const { resource: result } = await this.container.item(this.newItem.id, this.newItem.location).delete();
    console.log(`Deleted item with id: ${this.newItem.id}`);
    // </DeleteItem> 
  }
}
