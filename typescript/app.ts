function main(): void {
    runEjemplo1();
}

function runEjemplo1(): void {
    // Expresion regular
    // inicia -> /^
    // -> $
    const pattron = /^ab*$/;

    const palabras: string[] = ["a", "ab", "abbb", "abab", "b", ""];

    for (const p of palabras) {
        console.log(`${p} -> ${pattron.test(p)}`);
    }
}
function ejemplo2(): void {
    const regex = /^[TO][0-9]{3}$/;
    const list: string[] =
        ["T001", "0120", "T01", "X001", "T0001"];
    for (const p of list) {
        console.log(`${p} -> ${regex.test(p)}`);
    }
}

function ejemplo3(): void {
    const texto = "Sensores: T001 reporta 23.5 C; O001 reporta 12 PERSONAS: T002 reporta -2 C.";
    const regex = /^[TO][0-9]{3}/g;

    for (const matcher of texto.matchAll(regex)) {
        console.log(`Encontrado" ${matcher[0]}, posicion: ${matcher.index})`);
    }
}

main();