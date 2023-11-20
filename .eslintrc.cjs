
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended"
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],
      rules: {
        "react/prop-types": 0
      }
    }
  };
  


// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//     }
// }
