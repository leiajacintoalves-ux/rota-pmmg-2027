"use strict";

window.PMMG_LESSONS = window.PMMG_LESSONS || {};

Object.assign(window.PMMG_LESSONS, {
  "Matemática e Raciocínio Lógico::Operações e frações": {
    "access": "free",
    "objective": "Revisar as operações fundamentais, a ordem de resolução, números inteiros, frações, decimais, potências, raízes, MMC e MDC.",
    "sections": [
      {
        "title": "➕ Operações e ordem de resolução",
        "html": "<p>As quatro operações fundamentais são adição, subtração, multiplicação e divisão.</p>\n<p>Quando uma expressão possui várias operações, siga esta ordem:</p>\n<ol>\n  <li>parênteses, colchetes e chaves;</li>\n  <li>potências e raízes;</li>\n  <li>multiplicações e divisões, da esquerda para a direita;</li>\n  <li>adições e subtrações, da esquerda para a direita.</li>\n</ol>\n<p><strong>Exemplo:</strong> 18 - 3 × 4 + 2 = 18 - 12 + 2 = 8.</p>"
      },
      {
        "title": "➖ Números positivos e negativos",
        "html": "<p>Na adição de números com sinais iguais, somam-se os módulos e conserva-se o sinal.</p>\n<p>Com sinais diferentes, subtraem-se os módulos e conserva-se o sinal do número de maior módulo.</p>\n<p>Na multiplicação e na divisão:</p>\n<ul>\n  <li>sinais iguais produzem resultado positivo;</li>\n  <li>sinais diferentes produzem resultado negativo.</li>\n</ul>"
      },
      {
        "title": "🍕 Operações com frações",
        "html": "<p>Para somar ou subtrair frações, transforme-as em frações com o mesmo denominador, normalmente usando o MMC.</p>\n<p>Na multiplicação, multiplique numerador por numerador e denominador por denominador.</p>\n<p>Na divisão, mantenha a primeira fração e multiplique pelo inverso da segunda.</p>\n<p><strong>Exemplo:</strong> 3/4 + 1/6 = 9/12 + 2/12 = 11/12.</p>"
      },
      {
        "title": "🔢 Frações e números decimais",
        "html": "<p>Uma fração representa uma divisão. Para transformá-la em decimal, divida o numerador pelo denominador.</p>\n<p>Para transformar um decimal finito em fração, escreva o número sem vírgula sobre uma potência de dez e simplifique.</p>\n<p><strong>Exemplo:</strong> 0,375 = 375/1000 = 3/8.</p>"
      },
      {
        "title": "⚡ Potências, raízes, MMC e MDC",
        "html": "<p>Potenciação representa multiplicações repetidas. Em aⁿ, a é a base e n é o expoente.</p>\n<p>A raiz quadrada de um número é o valor que, multiplicado por si mesmo, produz esse número.</p>\n<p>O <strong>MMC</strong> é útil para denominadores e eventos periódicos. O <strong>MDC</strong> é útil para dividir quantidades no maior número possível de grupos iguais.</p>\n<p>Atenção: (-2)⁴ = 16, enquanto -2⁴ = -16, pois os parênteses alteram a base.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "Qual é a ordem das operações?",
        "answer": "Agrupamentos; potências e raízes; multiplicações e divisões; adições e subtrações."
      },
      {
        "question": "Como somar frações com denominadores diferentes?",
        "answer": "Encontre um denominador comum, converta as frações e some os numeradores."
      },
      {
        "question": "Como dividir duas frações?",
        "answer": "Multiplique a primeira pelo inverso da segunda."
      },
      {
        "question": "Quanto vale 0,25 em forma de fração simplificada?",
        "answer": "1/4."
      },
      {
        "question": "Para que serve o MDC?",
        "answer": "Para encontrar o maior divisor comum, útil na formação do maior número possível de grupos iguais."
      }
    ],
    "questions": [
      {
        "prompt": "Qual é o valor de 18 - 3 × 4 + 2?",
        "options": [
          "5",
          "8",
          "14",
          "62"
        ],
        "correct": 1,
        "explanation": "Primeiro faça 3 × 4 = 12. Depois: 18 - 12 + 2 = 8."
      },
      {
        "prompt": "O resultado de 3/4 + 1/6 é:",
        "options": [
          "4/10",
          "5/12",
          "11/12",
          "7/8"
        ],
        "correct": 2,
        "explanation": "O MMC de 4 e 6 é 12: 3/4 = 9/12 e 1/6 = 2/12. A soma é 11/12."
      },
      {
        "prompt": "O resultado de 5/8 ÷ 15/16 é:",
        "options": [
          "2/3",
          "3/2",
          "75/128",
          "1/6"
        ],
        "correct": 0,
        "explanation": "Multiplique 5/8 pelo inverso de 15/16: 5/8 × 16/15 = 2/3."
      },
      {
        "prompt": "Quanto vale (-2)⁴?",
        "options": [
          "-16",
          "-8",
          "8",
          "16"
        ],
        "correct": 3,
        "explanation": "Como a base negativa está entre parênteses e o expoente é par, o resultado é positivo: 16."
      },
      {
        "prompt": "A forma fracionária simplificada de 0,375 é:",
        "options": [
          "3/8",
          "37/50",
          "375/10",
          "5/16"
        ],
        "correct": 0,
        "explanation": "0,375 = 375/1000. Simplificando por 125, obtemos 3/8."
      },
      {
        "prompt": "O MDC de 48 e 60 é:",
        "options": [
          "4",
          "6",
          "12",
          "24"
        ],
        "correct": 2,
        "explanation": "Os divisores comuns incluem 1, 2, 3, 4, 6 e 12. O maior deles é 12."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Porcentagem": {
    "access": "free",
    "objective": "Calcular porcentagens, aumentos, descontos, variação percentual, taxas sucessivas e porcentagem de acertos.",
    "sections": [
      {
        "title": "💯 Conceito de porcentagem",
        "html": "<p>Porcentagem é uma razão com denominador 100. Assim, 25% significa 25/100, que também corresponde a 0,25.</p>\n<p>Para calcular p% de um valor V, transforme p% em decimal e multiplique por V.</p>\n<p><strong>Exemplo:</strong> 25% de 240 = 0,25 × 240 = 60.</p>"
      },
      {
        "title": "📈 Aumento percentual",
        "html": "<p>Um aumento de p% pode ser calculado somando a porcentagem ao valor original ou multiplicando pelo fator 1 + p/100.</p>\n<p><strong>Exemplo:</strong> aumentar 80 em 15%:</p>\n<p>80 × 1,15 = 92.</p>"
      },
      {
        "title": "📉 Desconto percentual",
        "html": "<p>Um desconto de p% corresponde ao fator 1 - p/100.</p>\n<p><strong>Exemplo:</strong> reduzir 500 em 20%:</p>\n<p>500 × 0,80 = 400.</p>"
      },
      {
        "title": "🔁 Alterações sucessivas",
        "html": "<p>Porcentagens sucessivas devem ser aplicadas uma depois da outra. Não se deve simplesmente somá-las quando as bases mudam.</p>\n<p><strong>Exemplo:</strong> aumentar 100 em 10% e depois reduzir o resultado em 10%:</p>\n<p>100 × 1,10 × 0,90 = 99. Portanto, houve redução total de 1%.</p>"
      },
      {
        "title": "📊 Variação e pontos percentuais",
        "html": "<p>A variação percentual é calculada por:</p>\n<p><strong>(valor novo - valor antigo) ÷ valor antigo × 100%</strong>.</p>\n<p>Pontos percentuais medem a diferença direta entre duas taxas. Uma taxa que passa de 40% para 50% aumenta 10 pontos percentuais, mas cresce 25% em relação à taxa anterior.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "O que significa 30%?",
        "answer": "30/100, equivalente a 0,30."
      },
      {
        "question": "Qual fator representa um aumento de 12%?",
        "answer": "1,12."
      },
      {
        "question": "Qual fator representa um desconto de 12%?",
        "answer": "0,88."
      },
      {
        "question": "Aumentar 10% e diminuir 10% devolve ao valor inicial?",
        "answer": "Não. O resultado final é 99% do valor inicial."
      },
      {
        "question": "Qual é a diferença entre percentual e ponto percentual?",
        "answer": "Percentual mede variação relativa; ponto percentual é a diferença direta entre taxas."
      }
    ],
    "questions": [
      {
        "prompt": "Quanto é 25% de 240?",
        "options": [
          "40",
          "50",
          "60",
          "75"
        ],
        "correct": 2,
        "explanation": "25% = 0,25. Multiplicando 0,25 por 240, obtemos 60."
      },
      {
        "prompt": "Um valor de R$ 80 recebe aumento de 15%. O novo valor é:",
        "options": [
          "R$ 88",
          "R$ 90",
          "R$ 92",
          "R$ 95"
        ],
        "correct": 2,
        "explanation": "80 × 1,15 = 92."
      },
      {
        "prompt": "Após desconto de 20% sobre R$ 500, o preço passa a ser:",
        "options": [
          "R$ 380",
          "R$ 400",
          "R$ 420",
          "R$ 480"
        ],
        "correct": 1,
        "explanation": "500 × 0,80 = 400."
      },
      {
        "prompt": "Um valor de 100 aumenta 10% e depois diminui 10%. O resultado é:",
        "options": [
          "90",
          "99",
          "100",
          "101"
        ],
        "correct": 1,
        "explanation": "100 × 1,10 = 110 e 110 × 0,90 = 99."
      },
      {
        "prompt": "Um número passa de 40 para 50. O aumento percentual foi de:",
        "options": [
          "10%",
          "20%",
          "25%",
          "40%"
        ],
        "correct": 2,
        "explanation": "O aumento foi 10 sobre uma base inicial de 40: 10/40 = 0,25 = 25%."
      },
      {
        "prompt": "Uma pessoa acertou 12 de 15 questões. Sua taxa de acertos foi:",
        "options": [
          "75%",
          "80%",
          "85%",
          "90%"
        ],
        "correct": 1,
        "explanation": "12/15 = 0,8, equivalente a 80%."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Razão e proporção": {
    "access": "free",
    "objective": "Compreender razões, proporções, grandezas diretamente e inversamente proporcionais, escalas e divisões proporcionais.",
    "sections": [
      {
        "title": "⚖️ Razão",
        "html": "<p>Razão é a comparação entre duas grandezas por meio de uma divisão.</p>\n<p>A razão entre a e b pode ser escrita como a:b ou a/b, com b diferente de zero.</p>\n<p><strong>Exemplo:</strong> a razão entre 12 e 18 é 12/18 = 2/3.</p>"
      },
      {
        "title": "🔗 Proporção",
        "html": "<p>Proporção é uma igualdade entre duas razões:</p>\n<p><strong>a/b = c/d</strong>.</p>\n<p>Numa proporção, o produto dos extremos é igual ao produto dos meios: a × d = b × c.</p>"
      },
      {
        "title": "📈 Grandezas diretamente proporcionais",
        "html": "<p>Duas grandezas são diretamente proporcionais quando aumentam ou diminuem na mesma razão.</p>\n<p>Se uma quantidade dobra e a outra também dobra, há relação direta.</p>\n<p>O quociente entre os valores correspondentes permanece constante.</p>"
      },
      {
        "title": "📉 Grandezas inversamente proporcionais",
        "html": "<p>Duas grandezas são inversamente proporcionais quando o aumento de uma provoca redução proporcional da outra.</p>\n<p>Se o número de trabalhadores aumenta e o serviço permanece o mesmo, o tempo necessário tende a diminuir.</p>\n<p>O produto dos valores correspondentes permanece constante.</p>"
      },
      {
        "title": "🗺️ Escala e divisão proporcional",
        "html": "<p>Escala é a razão entre a medida representada e a medida real, sempre usando unidades compatíveis.</p>\n<p>Na divisão proporcional, uma quantidade é repartida de acordo com pesos definidos.</p>\n<p><strong>Exemplo:</strong> dividir 840 na razão 3:4. Há 7 partes; cada parte vale 120. Os valores são 360 e 480.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "O que é razão?",
        "answer": "É a comparação entre duas grandezas por meio de uma divisão."
      },
      {
        "question": "Qual propriedade fundamental vale numa proporção?",
        "answer": "O produto dos extremos é igual ao produto dos meios."
      },
      {
        "question": "Como identificar grandezas diretamente proporcionais?",
        "answer": "Elas variam no mesmo sentido e mantêm constante a razão entre valores correspondentes."
      },
      {
        "question": "Como identificar grandezas inversamente proporcionais?",
        "answer": "Elas variam em sentidos opostos e mantêm constante o produto dos valores correspondentes."
      },
      {
        "question": "O que significa escala 1:50.000?",
        "answer": "Uma unidade no mapa representa 50.000 unidades reais."
      }
    ],
    "questions": [
      {
        "prompt": "A razão 12:18, na forma simplificada, é:",
        "options": [
          "2:3",
          "3:2",
          "6:9",
          "4:5"
        ],
        "correct": 0,
        "explanation": "Dividindo os dois termos por 6, obtemos 2:3."
      },
      {
        "prompt": "Se x/15 = 4/5, então x vale:",
        "options": [
          "10",
          "12",
          "15",
          "20"
        ],
        "correct": 1,
        "explanation": "Pela multiplicação cruzada: 5x = 60, então x = 12."
      },
      {
        "prompt": "Se 6 máquinas produzem 900 peças no mesmo período, 10 máquinas iguais produzem:",
        "options": [
          "1.200",
          "1.350",
          "1.500",
          "1.800"
        ],
        "correct": 2,
        "explanation": "A relação é direta: 900 × 10/6 = 1.500."
      },
      {
        "prompt": "Quatro trabalhadores fazem um serviço em 15 dias. Seis trabalhadores, com o mesmo ritmo, farão em:",
        "options": [
          "8 dias",
          "10 dias",
          "12 dias",
          "22,5 dias"
        ],
        "correct": 1,
        "explanation": "A relação é inversa: 4 × 15 = 6 × x. Logo, x = 10."
      },
      {
        "prompt": "Em uma escala 1:50.000, 3 cm no mapa representam:",
        "options": [
          "150 m",
          "500 m",
          "1,5 km",
          "15 km"
        ],
        "correct": 2,
        "explanation": "3 × 50.000 = 150.000 cm = 1.500 m = 1,5 km."
      },
      {
        "prompt": "A divisão de 840 na razão 3:4 resulta em:",
        "options": [
          "320 e 520",
          "340 e 500",
          "360 e 480",
          "420 e 420"
        ],
        "correct": 2,
        "explanation": "São 7 partes. Cada parte vale 840/7 = 120. Logo: 3 × 120 = 360 e 4 × 120 = 480."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Regra de três": {
    "access": "free",
    "objective": "Resolver problemas de regra de três simples e composta, identificando relações diretas e inversas e mantendo as unidades compatíveis.",
    "sections": [
      {
        "title": "📐 Regra de três simples",
        "html": "<p>A regra de três simples relaciona duas grandezas com dois valores conhecidos e um valor desconhecido.</p>\n<p>Organize os valores correspondentes em colunas, identifique se a relação é direta ou inversa e monte a proporção.</p>"
      },
      {
        "title": "⬆️ Relação direta",
        "html": "<p>Na relação direta, aumentar uma grandeza aumenta a outra na mesma proporção.</p>\n<p><strong>Exemplo:</strong> 5 cadernos custam R$ 45. Oito custam x.</p>\n<p>5/8 = 45/x, então 5x = 360 e x = 72.</p>"
      },
      {
        "title": "↕️ Relação inversa",
        "html": "<p>Na relação inversa, aumentar uma grandeza reduz a outra.</p>\n<p><strong>Exemplo:</strong> 12 trabalhadores concluem uma obra em 10 dias. Oito trabalhadores levam x dias.</p>\n<p>12 × 10 = 8 × x, então x = 15.</p>"
      },
      {
        "title": "🧮 Regra de três composta",
        "html": "<p>A regra de três composta envolve três ou mais grandezas.</p>\n<p>Compare cada grandeza com aquela que contém a incógnita. Marque quais relações são diretas e quais são inversas antes de montar o cálculo.</p>"
      },
      {
        "title": "📏 Unidades e conferência",
        "html": "<p>Antes de calcular, converta medidas para unidades compatíveis: horas com horas, metros com metros, litros com litros.</p>\n<p>Depois, confira se o resultado faz sentido. Por exemplo, mais trabalhadores devem reduzir o tempo de uma mesma tarefa.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "Quando usar regra de três simples?",
        "answer": "Quando o problema relaciona duas grandezas e há um valor desconhecido."
      },
      {
        "question": "Qual é o primeiro passo?",
        "answer": "Organizar os valores correspondentes e identificar se a relação é direta ou inversa."
      },
      {
        "question": "Mais trabalhadores e menos tempo representam qual relação?",
        "answer": "Relação inversamente proporcional."
      },
      {
        "question": "Mais produtos e maior preço, com preço unitário constante, representam qual relação?",
        "answer": "Relação diretamente proporcional."
      },
      {
        "question": "Por que conferir as unidades?",
        "answer": "Porque a proporção deve comparar grandezas expressas em unidades compatíveis."
      }
    ],
    "questions": [
      {
        "prompt": "Se 5 cadernos custam R$ 45, oito cadernos custam:",
        "options": [
          "R$ 64",
          "R$ 68",
          "R$ 72",
          "R$ 75"
        ],
        "correct": 2,
        "explanation": "A relação é direta: 45 × 8/5 = 72."
      },
      {
        "prompt": "Um carro percorre 240 km em 3 horas. Mantendo a velocidade, em 5 horas percorrerá:",
        "options": [
          "320 km",
          "360 km",
          "400 km",
          "480 km"
        ],
        "correct": 2,
        "explanation": "A relação é direta: 240/3 = 80 km por hora. Em 5 horas: 400 km."
      },
      {
        "prompt": "Doze trabalhadores fazem uma obra em 10 dias. Oito trabalhadores farão em:",
        "options": [
          "6 dias",
          "12 dias",
          "15 dias",
          "18 dias"
        ],
        "correct": 2,
        "explanation": "A relação é inversa: 12 × 10 = 8 × x. Assim, x = 15."
      },
      {
        "prompt": "Três impressoras iguais produzem 600 páginas em 20 minutos. Cinco impressoras produzirão, no mesmo tempo:",
        "options": [
          "800",
          "900",
          "1.000",
          "1.200"
        ],
        "correct": 2,
        "explanation": "A produção é diretamente proporcional ao número de impressoras: 600 × 5/3 = 1.000."
      },
      {
        "prompt": "Quatro torneiras iguais enchem um reservatório em 6 horas. Três torneiras levarão:",
        "options": [
          "4,5 horas",
          "6 horas",
          "8 horas",
          "9 horas"
        ],
        "correct": 2,
        "explanation": "A relação é inversa: 4 × 6 = 3 × x. Logo, x = 8 horas."
      },
      {
        "prompt": "Uma receita para 6 pessoas usa 450 g de alimento. Para 10 pessoas serão necessários:",
        "options": [
          "600 g",
          "675 g",
          "720 g",
          "750 g"
        ],
        "correct": 3,
        "explanation": "A relação é direta: 450 × 10/6 = 750 g."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Equações": {
    "access": "free",
    "objective": "Resolver equações do primeiro grau, problemas algébricos, sistemas lineares e equações quadráticas básicas.",
    "sections": [
      {
        "title": "🔤 Conceito de equação",
        "html": "<p>Equação é uma igualdade que contém uma ou mais incógnitas.</p>\n<p>Resolver uma equação significa encontrar os valores que tornam a igualdade verdadeira.</p>\n<p>As operações realizadas em um membro devem ser realizadas também no outro, preservando a igualdade.</p>"
      },
      {
        "title": "1️⃣ Equação do primeiro grau",
        "html": "<p>A forma geral é ax + b = 0, com a diferente de zero.</p>\n<p><strong>Exemplo:</strong> 3x + 5 = 20.</p>\n<p>3x = 15, portanto x = 5.</p>"
      },
      {
        "title": "📦 Parênteses e frações",
        "html": "<p>Use a propriedade distributiva para eliminar parênteses: a(b + c) = ab + ac.</p>\n<p>Quando houver denominadores, multiplique todos os termos pelo MMC para eliminar as frações.</p>"
      },
      {
        "title": "🔗 Sistemas lineares",
        "html": "<p>Um sistema reúne duas ou mais equações que devem ser satisfeitas ao mesmo tempo.</p>\n<p>Os métodos mais comuns são substituição e adição.</p>\n<p><strong>Exemplo:</strong> x + y = 12 e x - y = 4. Somando as equações: 2x = 16, então x = 8 e y = 4.</p>"
      },
      {
        "title": "2️⃣ Equação do segundo grau",
        "html": "<p>A forma geral é ax² + bx + c = 0, com a diferente de zero.</p>\n<p>Pode ser resolvida por fatoração ou pela fórmula de Bhaskara:</p>\n<p><strong>Δ = b² - 4ac</strong> e <strong>x = (-b ± √Δ)/(2a)</strong>.</p>\n<p>Se Δ for positivo, há duas raízes reais distintas; se for zero, há uma raiz real dupla; se for negativo, não há raízes reais.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "O que é resolver uma equação?",
        "answer": "Encontrar o valor da incógnita que torna a igualdade verdadeira."
      },
      {
        "question": "Qual é a forma geral da equação do primeiro grau?",
        "answer": "ax + b = 0, com a diferente de zero."
      },
      {
        "question": "Qual propriedade elimina parênteses?",
        "answer": "A propriedade distributiva."
      },
      {
        "question": "Quais métodos podem resolver sistemas lineares?",
        "answer": "Entre outros, substituição e adição."
      },
      {
        "question": "O que indica o discriminante Δ?",
        "answer": "A quantidade e a natureza das raízes reais de uma equação do segundo grau."
      }
    ],
    "questions": [
      {
        "prompt": "A solução de 3x + 5 = 20 é:",
        "options": [
          "3",
          "5",
          "7",
          "15"
        ],
        "correct": 1,
        "explanation": "Subtraindo 5: 3x = 15. Dividindo por 3: x = 5."
      },
      {
        "prompt": "A solução de 2(x - 3) = 14 é:",
        "options": [
          "4",
          "7",
          "10",
          "14"
        ],
        "correct": 2,
        "explanation": "Dividindo por 2: x - 3 = 7. Logo, x = 10."
      },
      {
        "prompt": "Se x/4 + 2 = 7, então x é:",
        "options": [
          "5",
          "12",
          "16",
          "20"
        ],
        "correct": 3,
        "explanation": "x/4 = 5. Multiplicando por 4, x = 20."
      },
      {
        "prompt": "No sistema x + y = 12 e x - y = 4, os valores são:",
        "options": [
          "x = 6 e y = 6",
          "x = 8 e y = 4",
          "x = 4 e y = 8",
          "x = 10 e y = 2"
        ],
        "correct": 1,
        "explanation": "Somando as equações, 2x = 16, então x = 8. Substituindo, y = 4."
      },
      {
        "prompt": "As raízes de x² - 5x + 6 = 0 são:",
        "options": [
          "1 e 6",
          "2 e 3",
          "-2 e -3",
          "3 e 5"
        ],
        "correct": 1,
        "explanation": "Fatorando: (x - 2)(x - 3) = 0. Assim, x = 2 ou x = 3."
      },
      {
        "prompt": "Em uma equação do segundo grau, quando Δ = 0:",
        "options": [
          "Não há raiz real",
          "Há duas raízes reais distintas",
          "Há uma raiz real dupla",
          "A equação vira necessariamente linear"
        ],
        "correct": 2,
        "explanation": "Discriminante igual a zero indica uma raiz real dupla."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Estatística": {
    "access": "free",
    "objective": "Interpretar dados, diferenciar população e amostra e calcular média, média ponderada, mediana, moda e amplitude.",
    "sections": [
      {
        "title": "📋 População e amostra",
        "html": "<p><strong>População</strong> é o conjunto completo de elementos que se pretende estudar.</p>\n<p><strong>Amostra</strong> é uma parte da população usada para obter informações.</p>\n<p>Uma boa amostra deve ser representativa e evitar vieses de seleção.</p>"
      },
      {
        "title": "➗ Média aritmética",
        "html": "<p>A média aritmética simples é a soma dos valores dividida pela quantidade de valores.</p>\n<p><strong>Exemplo:</strong> média de 4, 6, 8 e 10:</p>\n<p>(4 + 6 + 8 + 10)/4 = 7.</p>"
      },
      {
        "title": "⚖️ Média ponderada",
        "html": "<p>Na média ponderada, cada valor possui um peso.</p>\n<p>Multiplique cada valor por seu peso, some os produtos e divida pela soma dos pesos.</p>\n<p><strong>Exemplo:</strong> notas 6 e 8, com pesos 2 e 3: (6×2 + 8×3)/(2+3) = 7,2.</p>"
      },
      {
        "title": "🎯 Mediana e moda",
        "html": "<p><strong>Mediana</strong> é o valor central após ordenar os dados. Se houver quantidade par, é a média dos dois valores centrais.</p>\n<p><strong>Moda</strong> é o valor que aparece com maior frequência. Um conjunto pode não possuir moda ou possuir mais de uma.</p>"
      },
      {
        "title": "📏 Amplitude e leitura de gráficos",
        "html": "<p>A amplitude total é a diferença entre o maior e o menor valor.</p>\n<p>Ao interpretar tabelas e gráficos, observe título, fonte, unidades, escala e se o eixo foi cortado. Escalas inadequadas podem exagerar visualmente pequenas diferenças.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "O que é população em estatística?",
        "answer": "O conjunto completo de elementos que se deseja estudar."
      },
      {
        "question": "Como calcular a média simples?",
        "answer": "Some todos os valores e divida pela quantidade de valores."
      },
      {
        "question": "Como calcular a média ponderada?",
        "answer": "Some os produtos de cada valor por seu peso e divida pela soma dos pesos."
      },
      {
        "question": "O que é mediana?",
        "answer": "O valor central do conjunto depois de ordenar os dados."
      },
      {
        "question": "O que é amplitude total?",
        "answer": "A diferença entre o maior e o menor valor."
      }
    ],
    "questions": [
      {
        "prompt": "A média de 4, 6, 8 e 10 é:",
        "options": [
          "6",
          "7",
          "8",
          "9"
        ],
        "correct": 1,
        "explanation": "A soma é 28. Dividindo por 4, a média é 7."
      },
      {
        "prompt": "A mediana de 2, 5, 7, 9 e 20 é:",
        "options": [
          "5",
          "7",
          "8",
          "9"
        ],
        "correct": 1,
        "explanation": "O conjunto já está ordenado e o valor central é 7."
      },
      {
        "prompt": "A moda do conjunto 3, 4, 4, 5, 5, 5, 6 é:",
        "options": [
          "4",
          "5",
          "5,5",
          "Não existe"
        ],
        "correct": 1,
        "explanation": "O número 5 aparece três vezes, mais do que qualquer outro."
      },
      {
        "prompt": "A média ponderada das notas 6 e 8, com pesos 2 e 3, é:",
        "options": [
          "6,8",
          "7",
          "7,2",
          "7,5"
        ],
        "correct": 2,
        "explanation": "(6×2 + 8×3)/(2+3) = 36/5 = 7,2."
      },
      {
        "prompt": "A amplitude do conjunto 18, 12, 25 e 9 é:",
        "options": [
          "7",
          "13",
          "16",
          "34"
        ],
        "correct": 2,
        "explanation": "Maior valor: 25. Menor: 9. Amplitude = 25 - 9 = 16."
      },
      {
        "prompt": "Uma amostra é:",
        "options": [
          "Todo o conjunto pesquisado",
          "Uma parte da população",
          "A média dos resultados",
          "O maior valor observado"
        ],
        "correct": 1,
        "explanation": "A amostra é um subconjunto da população utilizado na pesquisa."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Probabilidade": {
    "access": "free",
    "objective": "Calcular probabilidades em espaços amostrais finitos, usar eventos complementares, união, interseção, independência e sorteios sem reposição.",
    "sections": [
      {
        "title": "🎲 Experimento e espaço amostral",
        "html": "<p>Experimento aleatório é aquele cujo resultado não pode ser previsto com certeza antes de sua realização.</p>\n<p>Espaço amostral é o conjunto de todos os resultados possíveis. Evento é qualquer subconjunto desse espaço.</p>"
      },
      {
        "title": "➗ Probabilidade clássica",
        "html": "<p>Quando os resultados são igualmente prováveis:</p>\n<p><strong>P(A) = número de casos favoráveis ÷ número de casos possíveis</strong>.</p>\n<p>A probabilidade varia de 0 a 1, ou de 0% a 100%.</p>"
      },
      {
        "title": "🔄 Evento complementar",
        "html": "<p>O evento complementar de A reúne os resultados em que A não ocorre.</p>\n<p><strong>P(não A) = 1 - P(A)</strong>.</p>\n<p>Essa regra é especialmente útil em questões que pedem a probabilidade de pelo menos um evento ocorrer.</p>"
      },
      {
        "title": "➕ União e interseção",
        "html": "<p>A união A ou B ocorre quando pelo menos um dos eventos acontece.</p>\n<p>A interseção A e B ocorre quando os dois acontecem.</p>\n<p>Em geral: P(A ou B) = P(A) + P(B) - P(A e B).</p>"
      },
      {
        "title": "🔗 Independência e sorteio sem reposição",
        "html": "<p>Eventos independentes não alteram a probabilidade um do outro. Nesse caso, P(A e B) = P(A) × P(B).</p>\n<p>Em sorteios sem reposição, o total de elementos muda após cada retirada, portanto as probabilidades seguintes devem ser atualizadas.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "O que é espaço amostral?",
        "answer": "O conjunto de todos os resultados possíveis de um experimento."
      },
      {
        "question": "Qual é a fórmula clássica da probabilidade?",
        "answer": "Casos favoráveis divididos pelos casos possíveis, quando são igualmente prováveis."
      },
      {
        "question": "Como calcular o evento complementar?",
        "answer": "P(não A) = 1 - P(A)."
      },
      {
        "question": "Quando eventos são independentes?",
        "answer": "Quando a ocorrência de um não altera a probabilidade do outro."
      },
      {
        "question": "O que muda num sorteio sem reposição?",
        "answer": "A composição e o total de elementos mudam após cada retirada."
      }
    ],
    "questions": [
      {
        "prompt": "Ao lançar um dado comum, a probabilidade de sair número par é:",
        "options": [
          "1/6",
          "1/3",
          "1/2",
          "2/3"
        ],
        "correct": 2,
        "explanation": "Os resultados pares são 2, 4 e 6: 3 casos em 6, portanto 1/2."
      },
      {
        "prompt": "Ao lançar uma moeda duas vezes, a probabilidade de obter exatamente uma cara é:",
        "options": [
          "1/4",
          "1/2",
          "3/4",
          "1"
        ],
        "correct": 1,
        "explanation": "Os resultados são CC, CK, KC e KK. Exatamente uma cara ocorre em CK e KC: 2/4 = 1/2."
      },
      {
        "prompt": "Em um baralho comum de 52 cartas, a probabilidade de retirar uma carta vermelha é:",
        "options": [
          "1/4",
          "1/3",
          "1/2",
          "2/3"
        ],
        "correct": 2,
        "explanation": "Há 26 cartas vermelhas em 52: 26/52 = 1/2."
      },
      {
        "prompt": "Se P(A) = 0,30, então P(não A) é:",
        "options": [
          "0,30",
          "0,50",
          "0,70",
          "1,30"
        ],
        "correct": 2,
        "explanation": "P(não A) = 1 - 0,30 = 0,70."
      },
      {
        "prompt": "Eventos independentes A e B possuem probabilidades 0,5 e 0,2. A probabilidade de ambos ocorrerem é:",
        "options": [
          "0,1",
          "0,3",
          "0,5",
          "0,7"
        ],
        "correct": 0,
        "explanation": "Para eventos independentes, multiplique: 0,5 × 0,2 = 0,1."
      },
      {
        "prompt": "Uma urna contém 3 bolas vermelhas e 2 azuis. Sem reposição, a probabilidade de retirar primeiro uma vermelha e depois uma azul é:",
        "options": [
          "1/5",
          "1/4",
          "3/10",
          "2/5"
        ],
        "correct": 2,
        "explanation": "A primeira vermelha tem probabilidade 3/5. Depois restam 4 bolas, sendo 2 azuis: 3/5 × 2/4 = 3/10."
      }
    ]
  },
  "Matemática e Raciocínio Lógico::Lógica": {
    "access": "free",
    "objective": "Reconhecer proposições, conectivos, tabelas-verdade, negações, equivalências, quantificadores e argumentos válidos.",
    "sections": [
      {
        "title": "💬 Proposições",
        "html": "<p>Proposição é uma frase declarativa que pode ser classificada como verdadeira ou falsa, mas não ambas ao mesmo tempo.</p>\n<p>Perguntas, ordens e frases abertas com variável não determinada não são proposições.</p>"
      },
      {
        "title": "🔌 Conectivos lógicos",
        "html": "<ul>\n  <li><strong>Negação:</strong> não p.</li>\n  <li><strong>Conjunção:</strong> p e q.</li>\n  <li><strong>Disjunção:</strong> p ou q, normalmente inclusiva.</li>\n  <li><strong>Condicional:</strong> se p, então q.</li>\n  <li><strong>Bicondicional:</strong> p se e somente se q.</li>\n</ul>"
      },
      {
        "title": "📋 Valores lógicos",
        "html": "<p>A conjunção só é verdadeira quando as duas proposições são verdadeiras.</p>\n<p>A disjunção inclusiva só é falsa quando as duas são falsas.</p>\n<p>A condicional p → q só é falsa quando p é verdadeira e q é falsa.</p>\n<p>A bicondicional é verdadeira quando p e q possuem o mesmo valor lógico.</p>"
      },
      {
        "title": "🔁 Negação e equivalências",
        "html": "<p>Leis de De Morgan:</p>\n<ul>\n  <li>a negação de p e q equivale a não p ou não q;</li>\n  <li>a negação de p ou q equivale a não p e não q.</li>\n</ul>\n<p>A condicional p → q equivale a não p ou q e também à contrapositiva não q → não p.</p>"
      },
      {
        "title": "🌐 Quantificadores e argumentos",
        "html": "<p>A negação de “todos possuem a propriedade” é “existe pelo menos um que não possui”.</p>\n<p>A negação de “existe pelo menos um” é “nenhum possui”.</p>\n<p>Um argumento é válido quando não existe situação em que todas as premissas sejam verdadeiras e a conclusão seja falsa.</p>"
      }
    ],
    "flashcards": [
      {
        "question": "O que é uma proposição?",
        "answer": "Uma frase declarativa que possui valor lógico verdadeiro ou falso."
      },
      {
        "question": "Quando a condicional p → q é falsa?",
        "answer": "Somente quando p é verdadeira e q é falsa."
      },
      {
        "question": "Qual é a negação de p e q?",
        "answer": "Não p ou não q."
      },
      {
        "question": "A que expressão p → q é equivalente?",
        "answer": "Não p ou q."
      },
      {
        "question": "Como negar “todos os candidatos estudam”?",
        "answer": "Existe pelo menos um candidato que não estuda."
      }
    ],
    "questions": [
      {
        "prompt": "A negação de “p e q” é:",
        "options": [
          "não p e não q",
          "não p ou não q",
          "p ou q",
          "se p, então q"
        ],
        "correct": 1,
        "explanation": "Pela lei de De Morgan, negar uma conjunção produz a disjunção das negações."
      },
      {
        "prompt": "A condicional p → q é falsa quando:",
        "options": [
          "p é falsa e q é falsa",
          "p é falsa e q é verdadeira",
          "p é verdadeira e q é falsa",
          "p e q são verdadeiras"
        ],
        "correct": 2,
        "explanation": "A única linha falsa da condicional ocorre com antecedente verdadeiro e consequente falso."
      },
      {
        "prompt": "A proposição p → q equivale a:",
        "options": [
          "p e q",
          "não p ou q",
          "p ou não q",
          "não p e não q"
        ],
        "correct": 1,
        "explanation": "A equivalência clássica da condicional é ¬p ∨ q."
      },
      {
        "prompt": "A bicondicional p ↔ q é verdadeira quando:",
        "options": [
          "p é sempre verdadeira",
          "q é sempre falsa",
          "p e q possuem valores diferentes",
          "p e q possuem o mesmo valor lógico"
        ],
        "correct": 3,
        "explanation": "A bicondicional expressa equivalência e é verdadeira quando os valores coincidem."
      },
      {
        "prompt": "Premissas: “Todos os cadetes estudam” e “João é cadete”. A conclusão válida é:",
        "options": [
          "João não estuda",
          "João estuda",
          "Nenhum cadete estuda",
          "Não é possível concluir nada"
        ],
        "correct": 1,
        "explanation": "Se todos os cadetes estudam e João é cadete, então João estuda."
      },
      {
        "prompt": "A negação de “Todos os candidatos foram aprovados” é:",
        "options": [
          "Nenhum candidato foi aprovado",
          "Todos foram reprovados",
          "Existe pelo menos um candidato que não foi aprovado",
          "Existe pelo menos um candidato aprovado"
        ],
        "correct": 2,
        "explanation": "A negação do quantificador universal afirma a existência de pelo menos uma exceção."
      }
    ]
  }
});
