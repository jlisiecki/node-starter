/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

fs.writeFileSync(
  ".gitignore",
  `node_modules/
dist/
.DS_Store
*.log
.env
`,
);

const execSyncInherit = (command) => {
  execSync(command, { stdio: "inherit" });
};

execSyncInherit(`rm -Rf ${path.join(process.cwd(), "package.json")}`);
execSyncInherit(`rm -Rf ${path.join(process.cwd(), "package-lock.json")}`);
execSyncInherit(`rm -Rf ${path.join(process.cwd(), "node_modules")}`);
execSyncInherit(`npm init --yes`);
execSyncInherit(
  `npm i -D @ianvs/prettier-plugin-sort-imports @swc/core @total-typescript/ts-reset @tsconfig/node20 @types/eslint @types/express @types/node @types/webpack-node-externals @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-isaacscript eslint-plugin-prettier nodemon prettier swc-loader ts-node tsconfig-paths tsconfig-paths-webpack-plugin typescript webpack webpack-cli webpack-node-externals`,
);
execSyncInherit(`npm i zod dotenv`);

const scripts = {
  dev: "nodemon src/index.ts",
  build: "webpack",
  start: "node .",
};

packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
packageJson.scripts = scripts;
packageJson.main = "dist/index.js";

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2), "utf8");

execSyncInherit(`rm -Rf ${path.join(process.cwd(), ".git")}`);
execSyncInherit(`git init`);
execSyncInherit(`rm -Rf ${path.join(process.cwd(), "install.js")}`);
