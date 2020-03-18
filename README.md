Samuel Earl's portfolio site. Please go to [SamuelEarl.github.io](https://samuelearl.github.io/).

---

# Deploy to GitHub Pages

I ran into issues trying to deploy this project to GitHub Pages, but I was able to drag and drop the `dist` folder into my `SamuelEarl.github.io` repo. This is what I did:

1. In GitHub: Delete the `SamuelEarl.github.io` repo. This might be optional, but it might be best to do this in order to avoid merge conflicts if you drag and drop new files into a repo that has those same files already.
2. In GitHub: Recreate a new, clean repo for `SamuelEarl.github.io`.
3. In my project terminal: Run `npm run build` to generate the new `dist` folder that will contain the static files.
4. In GitHub: In the "Code" tab of the repo, when you are given instructions to push your code up to the new repo, there is a line that says this: "Get started by creating a new file or uploading an existing file." Click on the link for "uploading an existing file" to be taken to a page that has a dropzone where you can drag and drop the files that are inside your `dist` folder (do NOT including the `dist` folder itself, though).
5. After dragging and dropping the files, you need to scroll to the bottom of the page and click the "Commit files" button. The files will take a few minutes before they are processed and ready to go. You can visit `https://samuelearl.github.io/` to see your portfolio site.
