export function perf(label, f) {
    const start = performance.now();
    const result = f();
    const end = performance.now();

    document.body.innerHTML += `${label} Elapsed time: ${end-start} Result: ${result} <br>`;
}