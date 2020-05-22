module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // allow async-await
    "generator-star-spacing": "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false
      }
    ],
    "no-undef": "off",
    camelcase: "off",
    semi: [2, "always"],
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        named: "never"
      }
    ],
    quotes: [2, "single"],
    "use-isnan": 2,
    indent: ["error", 2, { SwitchCase: 1 }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/camelcase": 0
  }
};
