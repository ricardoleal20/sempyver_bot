//import fs from 'fs';
import { Probot } from "probot";

module.exports = (app: Probot) => {
    console.log("Creating Pull Request...");
    app.on("push", async (context:any) => {
      const pr = context.payload.pull_request;
      // Check, if the PRs was reopened to send a message to the user...
      const isReopened = pr.state === 'open' && pr.merged === false && pr.closed_at === null;
  
      if (isReopened) {
        // Send a message to the reopened pull request
        const message = 'The pull request has been reopened!';
        await context.octokit.issues.createComment({
          ...context.issue(),
          body: message,
        });
      }
    }
  )
  // XD
    app.on("pull_request", async (context:any) => {
      console.log('XD')
      // From the context, check if a PR was opened.
      //const markdownText = fs.readFileSync('path/to/file.md', 'utf-8');
      // From the context, obtain the owner, the repo and the head
      const { owner, repo, head } = context.payload.pull_request;
      console.log(owner, repo, head);
      // Create the Pull Request
      await context.octokit.pulls.create({
        owner: owner,
        repo: repo,
        title: context.payload.pull_request.title + "XD",
        body: context.payload.pull_request.body,
        head: head
      })
    //console.log(markdownText);
    }
  )
}

