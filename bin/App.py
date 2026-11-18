import re

def main():
    runEjemplo1()
    runEjemplo2()
    runEjemplo3()


def runEjemplo1():
    pattern = r"ab*"
    palabras = ["a", "ab", "abbb", "abab", "b", ""]

    for p in palabras:
        res = re.fullmatch(pattern, p)
        print(f"{p} => {res}")


def runEjemplo2():
    regex = r"[TO][0-9]{3}"
    lista = ["T001", "0120", "T01", "X001", "T0001"]

    for codigo in lista:
        res = re.fullmatch(regex, codigo)
        print(f"{codigo} => {res}")


def runEjemplo3():
    texto = "Sensores: T001 reporta 23.5 C; O001 reporta 12 PERSONAS: T002 reporta -2 C."

    patron = re.compile(r"[TO][0-9]{3}")
    matcher = patron.finditer(texto)

    for m in matcher:
        print(f"Encontrado: {m.group()}, posicion: {m.start()}")


if __name__ == "__main__":
    main()