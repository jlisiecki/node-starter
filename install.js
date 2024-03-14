/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

execSync(`rm -Rf ${path.join(process.cwd(), "package.json")}`, {
  stdio: "inherit",
});
execSync(`rm -Rf ${path.join(process.cwd(), "package-lock.json")}`, {
  stdio: "inherit",
});
execSync(`rm -Rf ${path.join(process.cwd(), "node_modules")}`, {
  stdio: "inherit",
});
execSync(`npm init --yes`, { stdio: "inherit" });

execSync(
  `npm i -D @ianvs/prettier-plugin-sort-imports @swc/core @total-typescript/ts-reset @tsconfig/node18 @types/eslint @types/express @types/node @types/webpack-node-externals @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import eslint-plugin-isaacscript eslint-plugin-prettier nodemon prettier swc-loader ts-node tsconfig-paths tsconfig-paths-webpack-plugin typescript webpack webpack-cli webpack-node-externals`,
  { stdio: "inherit" },
);
execSync(`npm i zod dotenv`, { stdio: "inherit" });

const scripts = {
  dev: "nodemon src/index.ts",
  build: "webpack",
  start: "node .",
};

packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));

packageJson.scripts = scripts;

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2), "utf8");

execSync(`rm -Rf ${path.join(process.cwd(), ".git")}`, { stdio: "inherit" });

fs.writeFileSync(
  ".gitignore",
  `node_modules/
dist/
.DS_Store
*.log
.env
`,
);

execSync(`git init`, { stdio: "inherit" });

execSync(`rm -Rf ${path.join(process.cwd(), "install.js")}`,{stdio: 'inherit'});
