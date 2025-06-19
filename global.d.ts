
// import 'process';

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.json';
declare module '*.sass';
declare module '*.scss';


// declare global {
//     const PLATFORM_ENV: 'development' | 'sandbox' | 'production';

//     interface Window {
//         // 以下两个是console那边通过frame注入的信息，没有类型
//         CONSOLE_BCE_INFO: any;
//         ISXSCONSOLE: boolean;
//         // header是否加载完成
//         isHeaderLoadingOver: boolean;
//         framework: any;
//         // bizType: BizType;
//         // TODO 对外提供的入口文件挂载方法，这个console framework架构太low，后续看是否可推动改进
//         mount(): void;
//     }

//     namespace NodeJS {
//         interface ProcessEnv {
//             [key: string]: string | undefined;
//             NODE_ENV: 'development' | 'production';
//             PLATFORM_ENV: 'development' | 'sandbox' | 'production';
//             // BIZ_TYPE: BizType;
//         }
//     }
// }
