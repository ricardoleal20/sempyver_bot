//import fs from 'fs';
import { Probot } from "probot";

module.exports = (app: Probot) => {
    console.log("Creating Pull Request...");
    app.on("push", async (context:any) => {
      const push = context.payload;

      // Extract relevant information from the push payload
      const { ref, commits } = push;
      const branch = ref.replace('refs/heads/', '');
    
      // Perform actions based on the push event
      console.log(`New push to branch: ${branch}`);
    
      // Loop through the commits and perform actions for each commit
      for (const commit of commits) {
        console.log(`Commit message: ${commit.message}`);
        console.log(`Author: ${commit.author.name}`);
        console.log(`Email: ${commit.author.email}`);
        console.log(`Added: ${commit.added}`);
        console.log(`Modified: ${commit.modified}`);
        console.log(`Removed: ${commit.removed}`);
      }
    }
  )
}