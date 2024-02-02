"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const link_1 = __importDefault(require("next/link"));
const page = () => {
    return (<div>
     <div className='text-5xl gb bg-blue-400 font-bold text-red-600'>Riaz Ahmad Arrain</div>
         <div className='text-5xl gb bg-green-600 font-bold text-white'>
         <link_1.default href="name\father">Father</link_1.default>
         </div>
        <div className='text-5xl gb bg-red-400 font-bold text-black'>
        <link_1.default href="name\father\child">Child</link_1.default>
        <div className='text-5xl gb bg-yellow-300 font-bold text-blue-600'>
        <link_1.default href="name\father\child\contact-me">Call us</link_1.default>
        </div>
        </div>
        
    </div>);
};
exports.default = page;
