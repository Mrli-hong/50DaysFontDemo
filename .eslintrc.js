module.exports = {
    //表示该配置文件是根，采用级联的eslint配置文件的时候找到该文件会停止想上寻找
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    //扩展会添加默认的规则
    extends: ['eslint:recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
    },
};
