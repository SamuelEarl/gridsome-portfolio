Samuel Earl's portfolio site. Please go to [SamuelEarl.github.io](https://samuelearl.github.io/).

---

# Deploy to GitHub Pages

I ran into issues trying to deploy this project to GitHub Pages, but I was able to drag and drop the `dist` folder into my `SamuelEarl.github.io` repo. This is what I did:

1. In a terminal: Navigate to the root directory and run `npm run build` to generate the new `dist` folder that will contain the static files.
2. In GitHub: On the "Code" tab, there is a button that says "Upload files". Click that button and then drag and drop the files that are inside your `dist` folder, but not the `dist` folder itself.
    a. NOTE: If you run into merge conflicts, then you can delete the `SamuelEarl.github.io` repo and recreate a new, clean repo for `SamuelEarl.github.io`. Then in the "Code" tab of the repo, when you are given instructions to push your code up to the new repo, there is a line that says, "Get started by creating a new file or uploading an existing file." Click on the link for "uploading an existing file" to be taken to a page that has a dropzone where you can drag and drop the files that are inside your `dist` folder (do NOT including the `dist` folder itself, though).
5. After dragging and dropping the files, you need to scroll to the bottom of the page and click the "Commit files" button. The files will take a few minutes to process. When they are ready to go, then you can visit `https://samuelearl.github.io/` to see your portfolio site.
