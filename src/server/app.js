// @ts-check
//  <ImportConfiguration>
const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./config");
const dbContext = require("./data/databaseContext");
//  </ImportConfiguration>

//  <DefineNewItem>
const newItem = {
  id: "000005",
  location: "Austrailia",
  duration: "23:15",
  videoId: "3"
};
//  </DefineNewItem>

const process = require('process');

async function main() {
  
  // <CreateClientObjectDatabaseContainer>
  const { endpoint, key, databaseId, containerId } = config;

  const client = new CosmosClient({ endpoint, key });

  const database = client.database(databaseId);
  const container = database.container(containerId);

  // Make sure Tasks database is already setup. If not, create it.
  await dbContext.create(client, databaseId, containerId);
  // </CreateClientObjectDatabaseContainer>
  const args = process.argv.slice(2);
  const arg = args[0];

  try {

    if(arg==='get') {
        // <QueryItems>
        console.log(`Querying container: Items`);

        // query to return all items
        const querySpec = {
        query: "SELECT * from c"
        };

        // read all items in the Items container
        const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();

        items.forEach(item => {
        console.log(`${item.id} - ${item.location}`);
        });
        // </QueryItems>
    } else if (arg==='create') {
        // <CreateItem>
        /** Create new item
         * newItem is defined at the top of this file
         */
        const { resource: createdItem } = await container.items.create(newItem);
        
        console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.location}\r\n`);
        // </CreateItem>
    } else if (arg==='update') {
        // <UpdateItem>
        /** Update item
         * Pull the id and partition key value from the newly created item.
         * Update the isComplete field to true.
         */
        const querySpec = {
            query: `SELECT * from c WHERE c.id = '${newItem.id}'`
        };

        // read all items in the Items container
        const { resources: ItemsToUpdate } = await container.items
        .query(querySpec)
        .fetchAll();
        const ItemToUpdate = ItemsToUpdate[0]

        console.log(`item: ${ItemToUpdate.id} - ${ItemToUpdate.location}`); 
        console.log(`videoId ${ItemToUpdate.videoId}\r\n`);

        const { id, location } = ItemToUpdate;

        ItemToUpdate.videoId = "2";

        const { resource: updatedItem } = await container
        .item(id, location)
        .replace(ItemToUpdate);

        console.log(`Updated item: ${updatedItem.id} - ${updatedItem.location}`); 
        console.log(`Updated videoId to ${updatedItem.videoId}\r\n`);
        // </UpdateItem>
    } else if (arg==='delete') {
        // <DeleteItem>    
        /**
         * Delete item
         * Pass the id and partition key value to delete the item
        */
        const { resource: result } = await container.item(newItem.id, newItem.location).delete();
        console.log(`Deleted item with id: ${newItem.id}`);
        // </DeleteItem> 
    } else {
        console.log("invalid Argument")
    }

  } catch (err) {
    console.log(err.message);
  }
}

main();