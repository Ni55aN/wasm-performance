import { perf } from '../perf';
import wasm from "./fib.cpp";
import { fib } from './fib';

export default async function (n) {
    const module = await wasm.init();

    perf('CPP', () => module.exports.fib(n))
    perf('JS', () => fib(n));
}