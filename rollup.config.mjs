import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import babel from '@rollup/plugin-babel'
import path from 'path'

import { readFileSync } from 'fs'
const packageJson = JSON.parse(
    readFileSync(new URL('./package.json', import.meta.url))
)

export default {
    input: 'src/index.ts', // Điểm nhập cho thư viện
    output: [
        {
            file: packageJson.main, // Đường dẫn xuất file CJS
            format: 'cjs', // CommonJS format
            sourcemap: true
        },
        {
            file: packageJson.module, // Đường dẫn xuất file ES Module
            format: 'esm', // ES Module format
            sourcemap: true
        }
    ],
    external: ['styled-components', 'react', 'react-dom'],
    plugins: [
        peerDepsExternal(), // Đảm bảo peerDependencies không bị bundle
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'] // Xử lý các file có đuôi này
        }),
        commonjs(), // Chuyển đổi CommonJS sang ES module
        typescript({
            tsconfig: path.resolve('tsconfig.json') // Sử dụng tệp tsconfig.json của bạn
        }),
        babel({
            babelHelpers: 'bundled', // Sử dụng Babel để xử lý JSX/TSX
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            exclude: 'node_modules/**', // Loại trừ thư viện
            presets: ['@babel/preset-react'] // Thêm preset cho React
        })
    ]
}
