import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
    ...baseConfig,
    ...nx.configs['flat/react'],
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
        // Override or add rules here
        rules: {},
        parserOptions: {
            project: ['./tsconfig.lib.json'],
        },
        settings: {
            'import/resolver': {
                // 配置 TypeScript 解析器
                typescript: {
                    project: ['./tsconfig.lib.json'],
                },
                // 配置别名解析器
                alias: {
                    map: [
                        // 映射您的图标路径
                        ['icons', path.resolve(__dirname, 'src/icons')],
                    ],
                    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg']
                }
            }
        }
    },
];
