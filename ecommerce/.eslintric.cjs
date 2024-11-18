const { version } = require("react");

module.exports = {
    root:true,
    env:{browser:true,es2020:true},
    extends: [
        'eslint:recommended' ,
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns:['dist','.eslintrc.cjs'],
    parseoptions:{ecmaVersion:'latest',sourceType:'module'},
    settings:{react:{version:'18.2'} },
    plugins:['reac-refresh'],
    rules: {
        'react/jsx-no-target-blank':'off' ,
        'react-refresh/only-export-components':[
            'warm',
            {allowConstantExport:true},
        ],
    },
}