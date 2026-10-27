const extensionId = "harshchalwadi.harshchalwadi"

export const site = {
  name: "Starter's Snippets",
  tagline: "Your next project, started faster.",
  description:
    "Starter's Snippets generates starter files and boilerplate for your projects, so you can skip the repetitive setup and get straight to building.",
  github: "https://github.com/harssshh03/starters",
  author: "@harssshh03",
  marketplace: `https://marketplace.visualstudio.com/items?itemName=${extensionId}`,
  extensionId,
  install: {
    terminal: `code --install-extension ${extensionId}`,
    quickOpen: `ext install ${extensionId}`,
  },
} as const
