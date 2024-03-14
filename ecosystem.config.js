module.exports = [
  {
    script: "dist/index.js",
    name: "api",
    exec_mode: "cluster",
    instances: 4,
  },
];
