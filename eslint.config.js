export default [
    {
        ignores: [
            'node_modules/**'
        ]
    },
    {
        files: [
            '**/*.js'
        ],
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 10
        },
        rules: {
            indent: [
                'error',
                2,
                {
                    VariableDeclarator: {
                        var: 2,
                        let: 2,
                        const: 3
                    },
                    SwitchCase: 1
                }
            ],
            'linebreak-style': [
                'error',
                'unix'
            ],
            quotes: [
                'error',
                'single'
            ],
            semi: [
                'error',
                'never'
            ],
            'no-console': 0
        }
    },
    {
        files: [
            'tests/**/*.js'
        ],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                after: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly'
            }
        }
    }
]
