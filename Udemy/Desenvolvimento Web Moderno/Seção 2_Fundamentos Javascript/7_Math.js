// Usando o Math

const raio = 5.6
const area = Math.PI * Math.pow(raio,2)

console.log(area.toFixed(2))

/**
 * Métodos

	Note que as funções trigonométricas (sin(), cos(), tan(), asin(), acos(), atan(), atan2()) recebem ou retornam ângulos em radianos. Divida por (Math.PI/180) para converter radianos em graus, ou multiplique por esse valor para fazer a conversão inversa.

Math.abs(x)
	Retorna o módulo, ou valor absoluto, de um número (|x|).

Math.cbrt(x) 
	Retorna a raiz cúbica de um número (\root{3}{x}).

Math.ceil(x)
	Retorna o menor inteiro que é maior ou igual a um número.

Math.cos(x)
	Retorna o coseno de um número (\cos{x}).

Math.cosh(x) 
	Retorna o coseno hiperbólico de um número .

Math.exp(x)
	Retorna e^x, onde x é o argumento, e e é a constante de Euler (2.718...), a base do logaritmo natural.

Math.expm1(x) 
	Retorna e^x-1.

Math.floor(x)
	Retorna o maior inteiro que é menor ou igual a um número.

Math.fround(x) (en-US) 
	Retorna a mais próxima representação de ponto flutuante de precisão-única de um número.

Math.hypot([x[,y[,…]]]) 
	Retorna a raiz quadrada da soma dos quadrados dos argumentos (\sqrt{x^2 + y^2 + \dots}).

Math.imul(x) (en-US) 
	Retorna o resultado de uma multiplicação de inteiro de 32-bit.

Math.log(x)
	Retorna o logaritmo natural (\log_ex ou \ln{x}) de um número.

Math.log1p(x) 
	Retorna o logaritmo natural de 1 + x (\log_e(1+x) ou \ln(1+x)) de um número.

Math.log10(x) 
	Retorna o logaritmo de x na base 10 (\log_{10}x).

Math.log2(x) 
	Retorna o logaritmo de x na base 2 (\log_2 x).

Math.max([x[,y[,…]]])
	Retorna o maior dentre os parâmetros recebidos.

Math.min([x[,y[,…]]])
	Retorna o menor dentre os parâmetros recebidos.

Math.pow(x,y)
	Retorna a base x elevada à potência y do expoente, ou seja, x^y.

Math.random()
	Retorna um número pseudo-aleatório entre 0 e 1.

Math.round(x)
	Retorna o valor arrendodado de x, para o valor inteiro mais próximo.

Math.sign(x) 
	Retorna o sinal de x, indicando se é positivo, negativo ou zero.

Math.sin(x)
	Retorna o seno de um número (\sin x).

Math.sinh(x) 
	Retorna o seno hiperbólico de um número (\sinh x).

Math.sqrt(x)
	Retorna a raiz quadrada positiva de um número (\sqrt x).

Math.tan(x)
	Retorna a tangente de um número (\tan x).

Math.tanh(x) 
	Retorna a tangente hiperbólica de um número (\tanh x).

Math.toSource() 
	Retorna a string "Math".

Math.trunc(x) 
	Retorna a parte inteira de x, removendo quaisquer dígitos fracionários.
 * 
 * 
 * 
 */