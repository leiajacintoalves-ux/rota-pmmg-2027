"use strict";

window.PMMG_LESSONS = window.PMMG_LESSONS || {};

Object.assign(window.PMMG_LESSONS, {
  "Português::Concordância": {
    access: "free",

    objective:
      "Aplicar as principais regras de concordância verbal e nominal e reconhecer os casos mais cobrados em provas.",

    sections: [
      {
        title: "📖 Concordância verbal",

        html: `
          <p>
            Na concordância verbal, o verbo deve concordar
            com o núcleo do sujeito em número e pessoa.
          </p>

          <p>
            <strong>Exemplo:</strong>
            O candidato <strong>estudou</strong>.
            Os candidatos <strong>estudaram</strong>.
          </p>

          <p>
            Quando o sujeito vem depois do verbo,
            a concordância continua obrigatória:
            <strong>Chegaram os documentos.</strong>
          </p>
        `
      },

      {
        title: "📌 Sujeito composto",

        html: `
          <p>
            Quando o sujeito composto aparece antes
            do verbo, o verbo normalmente fica no plural.
          </p>

          <p>
            <strong>Exemplo:</strong>
            O estudo e a disciplina
            <strong>garantem</strong> bons resultados.
          </p>

          <p>
            Se o sujeito composto vier depois do verbo,
            o plural é a forma mais segura:
            <strong>
              Chegaram o comandante e os soldados.
            </strong>
          </p>
        `
      },

      {
        title: "⚠️ Verbos impessoais",

        html: `
          <p>
            Os verbos impessoais não possuem sujeito
            e permanecem na terceira pessoa do singular.
          </p>

          <ul>
            <li>
              <strong>Haver</strong> com sentido de existir:
              Havia muitos candidatos.
            </li>

            <li>
              <strong>Fazer</strong> indicando tempo ou clima:
              Faz dois anos. Faz muito frio.
            </li>

            <li>
              Fenômenos da natureza em sentido literal:
              Choveu ontem.
            </li>
          </ul>

          <p>
            Não se escreve “haviam candidatos” quando
            haver significa existir.
          </p>
        `
      },

      {
        title: "📌 Casos especiais do verbo ser",

        html: `
          <p>
            Nas indicações de horas, datas e distâncias,
            o verbo <strong>ser</strong> concorda com
            a expressão numérica.
          </p>

          <ul>
            <li>É uma hora.</li>
            <li>São duas horas.</li>
            <li>Hoje são quatro de agosto.</li>
            <li>Daqui ao quartel são três quilômetros.</li>
          </ul>
        `
      },

      {
        title: "📖 Concordância nominal",

        html: `
          <p>
            Artigos, adjetivos, pronomes e numerais
            devem concordar com o substantivo
            a que se referem.
          </p>

          <p>
            <strong>Exemplos:</strong>
            candidata preparada; candidatos preparados;
            duas questões difíceis.
          </p>

          <p>
            Quando um adjetivo se refere a substantivos
            de gêneros diferentes, normalmente vai para
            o masculino plural:
            <strong>disciplina e esforço necessários</strong>.
          </p>
        `
      },

      {
        title: "⚠️ Expressões frequentes",

        html: `
          <ul>
            <li>
              <strong>Meio</strong>, como advérbio,
              é invariável: Ela estava meio cansada.
            </li>

            <li>
              <strong>Meia</strong>, como numeral,
              varia: Tomei meia garrafa de água.
            </li>

            <li>
              <strong>Bastante</strong>, como advérbio,
              é invariável: Estudaram bastante.
            </li>

            <li>
              <strong>Bastantes</strong>, como pronome
              ou adjetivo, varia:
              Havia bastantes questões.
            </li>

            <li>
              <strong>Menos</strong> é invariável:
              Havia menos pessoas.
            </li>

            <li>
              <strong>Obrigado/obrigada</strong>
              concorda com quem agradece.
            </li>
          </ul>
        `
      }
    ],

    flashcards: [
      {
        question:
          "Com que elemento o verbo concorda?",

        answer:
          "Com o núcleo do sujeito, em número e pessoa."
      },

      {
        question:
          "Como fica o verbo haver com sentido de existir?",

        answer:
          "Permanece na terceira pessoa do singular: havia, houve, haverá."
      },

      {
        question:
          "Como fica o verbo fazer indicando tempo decorrido?",

        answer:
          "Permanece no singular: faz dois anos."
      },

      {
        question:
          "Qual é a diferença entre meio e meia?",

        answer:
          "Meio é invariável quando significa um pouco; meia varia quando indica metade."
      },

      {
        question:
          "A palavra menos possui feminino?",

        answer:
          "Não. Menos é invariável."
      },

      {
        question:
          "Como usar obrigado e obrigada?",

        answer:
          "Obrigado é usado por quem se identifica no masculino; obrigada, por quem se identifica no feminino."
      }
    ],

    questions: [
      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "Haviam muitos candidatos na sala.",
          "Havia muitos candidatos na sala.",
          "Houveram muitos candidatos na sala.",
          "Haviam existido muitos candidatos."
        ],

        correct: 1,

        explanation:
          "Haver com sentido de existir é impessoal e permanece no singular."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "Fazem três anos que estudo.",
          "Faz três anos que estudo.",
          "Fizeram três anos que estudo.",
          "Fazem três ano que estudo."
        ],

        correct: 1,

        explanation:
          "Fazer indicando tempo decorrido é impessoal e fica no singular."
      },

      {
        prompt:
          "Na frase “O estudo e a disciplina garantem resultados”, o verbo está no plural porque:",

        options: [
          "O sujeito é oculto.",
          "O sujeito é composto.",
          "O verbo é impessoal.",
          "A oração não possui sujeito."
        ],

        correct: 1,

        explanation:
          "O sujeito possui dois núcleos: estudo e disciplina."
      },

      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "Ela estava meia cansada.",
          "Ela estava meio cansada.",
          "Ela estava meios cansada.",
          "Ela estava meias cansada."
        ],

        correct: 1,

        explanation:
          "Meio, com sentido de um pouco, funciona como advérbio e é invariável."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "Havia menas pessoas.",
          "Haviam menos pessoas.",
          "Havia menos pessoas.",
          "Havia menas pessoa."
        ],

        correct: 2,

        explanation:
          "Menos é invariável, e haver com sentido de existir fica no singular."
      },

      {
        prompt:
          "Assinale a frase correta quanto às horas:",

        options: [
          "É duas horas.",
          "São duas horas.",
          "São uma hora.",
          "É três horas."
        ],

        correct: 1,

        explanation:
          "Nas indicações de hora, o verbo ser concorda com o numeral."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "As candidatas estavam preparadas.",
          "As candidatas estava preparada.",
          "As candidata estavam preparado.",
          "As candidatas estava preparadas."
        ],

        correct: 0,

        explanation:
          "Artigo, substantivo, verbo e adjetivo estão corretamente flexionados no plural feminino."
      },

      {
        prompt:
          "Em “Os alunos estudaram bastante”, a palavra bastante:",

        options: [
          "Deve ir para o plural.",
          "É advérbio e permanece invariável.",
          "É substantivo.",
          "Concorda com alunos."
        ],

        correct: 1,

        explanation:
          "Bastante modifica o verbo estudaram e funciona como advérbio."
      },

      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "Existia muitas dúvidas.",
          "Existiam muitas dúvidas.",
          "Haviam muitas dúvidas.",
          "Faziam muitas dúvidas."
        ],

        correct: 1,

        explanation:
          "O verbo existir é pessoal e concorda com o sujeito muitas dúvidas."
      },

      {
        prompt:
          "Uma candidata, ao agradecer, deve dizer:",

        options: [
          "Obrigado.",
          "Obrigada.",
          "Obrigadas.",
          "Obrigados."
        ],

        correct: 1,

        explanation:
          "A forma concorda com a pessoa que agradece."
      }
    ]
  },

  "Português::Regência e crase": {
    access: "free",

    objective:
      "Reconhecer a relação entre verbos, nomes e seus complementos e aplicar corretamente o acento indicativo de crase.",

    sections: [
      {
        title: "📖 Regência verbal",

        html: `
          <p>
            Regência verbal é a relação entre o verbo
            e seus complementos, especialmente quanto
            ao uso de preposição.
          </p>

          <ul>
            <li>
              <strong>Assistir a</strong>, no sentido de ver:
              Assisti ao filme.
            </li>

            <li>
              <strong>Obedecer a:</strong>
              Obedeceu às ordens.
            </li>

            <li>
              <strong>Preferir X a Y:</strong>
              Prefiro estudo a improvisação.
            </li>

            <li>
              <strong>Aspirar a</strong>, no sentido
              de desejar: Aspira ao cargo.
            </li>

            <li>
              <strong>Visar a</strong>, no sentido
              de ter como objetivo:
              Visa à aprovação.
            </li>
          </ul>
        `
      },

      {
        title: "📌 Verbos com mudança de sentido",

        html: `
          <ul>
            <li>
              <strong>Assistir:</strong>
              ver exige “a”; prestar assistência não exige:
              O médico assistiu o paciente.
            </li>

            <li>
              <strong>Aspirar:</strong>
              desejar exige “a”; respirar não exige:
              Aspirou o ar.
            </li>

            <li>
              <strong>Visar:</strong>
              objetivar exige “a”; mirar ou rubricar não exige.
            </li>

            <li>
              <strong>Implicar</strong>, no sentido
              de acarretar, normalmente não exige preposição:
              O erro implicou punição.
            </li>
          </ul>
        `
      },

      {
        title: "📖 Regência nominal",

        html: `
          <p>
            Regência nominal é a relação entre
            um nome e seu complemento.
          </p>

          <ul>
            <li>favorável <strong>a</strong>;</li>
            <li>necessário <strong>a</strong>;</li>
            <li>respeito <strong>a</strong>;</li>
            <li>capaz <strong>de</strong>;</li>
            <li>compatível <strong>com</strong>;</li>
            <li>orgulho <strong>de</strong>.</li>
          </ul>
        `
      },

      {
        title: "📌 O que é crase",

        html: `
          <p>
            Crase é a fusão da preposição
            <strong>a</strong> com o artigo feminino
            <strong>a/as</strong>, ou com o “a” inicial
            de certos pronomes.
          </p>

          <p>
            <strong>Exemplo:</strong>
            Fui <strong>à</strong> escola =
            fui a + a escola.
          </p>

          <p>
            Uma verificação prática é trocar a palavra
            feminina por uma masculina. Se surgir
            <strong>ao</strong>, normalmente haverá
            crase no feminino.
          </p>

          <p>
            Fui ao quartel → Fui à escola.
          </p>
        `
      },

      {
        title: "✅ Casos de crase",

        html: `
          <ul>
            <li>
              Antes de palavra feminina que admite artigo:
              Entreguei o documento à diretora.
            </li>

            <li>
              Em locuções femininas:
              à tarde, à noite, às vezes, à medida que.
            </li>

            <li>
              Na indicação de horas:
              A prova começa às oito horas.
            </li>

            <li>
              Antes de aquele, aquela e aquilo,
              quando houver preposição:
              Refiro-me àquele assunto.
            </li>

            <li>
              Com nomes de lugares que admitem artigo:
              Fui à Bahia.
            </li>
          </ul>
        `
      },

      {
        title: "❌ Casos sem crase",

        html: `
          <ul>
            <li>
              Antes de palavra masculina:
              a prazo, a pé.
            </li>

            <li>
              Antes de verbo:
              começou a estudar.
            </li>

            <li>
              Antes de pronomes pessoais:
              entreguei a ela.
            </li>

            <li>
              Antes de palavras repetidas:
              frente a frente.
            </li>

            <li>
              Quando há apenas preposição,
              sem artigo: fui a Brasília.
            </li>

            <li>
              Antes de artigo indefinido:
              referiu-se a uma candidata.
            </li>
          </ul>
        `
      },

      {
        title: "⚠️ Casos facultativos",

        html: `
          <p>A crase pode ser facultativa:</p>

          <ul>
            <li>
              Antes de nome próprio feminino:
              Entreguei a/à Ana.
            </li>

            <li>
              Antes de pronome possessivo feminino singular:
              Refiro-me a/à sua proposta.
            </li>

            <li>
              Depois da preposição até:
              Fui até a/à escola.
            </li>
          </ul>
        `
      }
    ],

    flashcards: [
      {
        question:
          "O que é regência verbal?",

        answer:
          "É a relação entre o verbo e seus complementos, incluindo as preposições exigidas."
      },

      {
        question:
          "Como se usa assistir no sentido de ver?",

        answer:
          "Com a preposição a: assistir ao filme."
      },

      {
        question:
          "O que é crase?",

        answer:
          "É a fusão de dois sons iguais, geralmente a preposição a com o artigo a ou as."
      },

      {
        question:
          "Pode haver crase antes de verbo?",

        answer:
          "Não: começou a estudar."
      },

      {
        question:
          "Como funciona o teste do masculino?",

        answer:
          "Troca-se a palavra feminina por uma masculina; se surgir ao, normalmente usa-se à no feminino."
      },

      {
        question:
          "Há crase na indicação de horas?",

        answer:
          "Sim, quando a expressão indica horário determinado: às oito horas."
      }
    ],

    questions: [
      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "Assisti o filme ontem.",
          "Assisti ao filme ontem.",
          "Assisti no filme ontem.",
          "Assisti pelo filme ontem."
        ],

        correct: 1,

        explanation:
          "Assistir, no sentido de ver, exige a preposição a."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "Prefiro português do que matemática.",
          "Prefiro mais português que matemática.",
          "Prefiro português a matemática.",
          "Prefiro português do que à matemática."
        ],

        correct: 2,

        explanation:
          "A construção recomendada é preferir uma coisa a outra."
      },

      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "O candidato aspira o cargo.",
          "O candidato aspira ao cargo.",
          "O candidato aspira no cargo.",
          "O candidato aspira pelo cargo."
        ],

        correct: 1,

        explanation:
          "Aspirar, no sentido de desejar, exige a preposição a."
      },

      {
        prompt:
          "Assinale a alternativa com crase correta:",

        options: [
          "Fui à escola.",
          "Fui à pé.",
          "Comecei à estudar.",
          "Entreguei à ela."
        ],

        correct: 0,

        explanation:
          "Em fui à escola ocorre a fusão da preposição a com o artigo a."
      },

      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "A prova começa as oito horas.",
          "A prova começa às oito horas.",
          "A prova começa à oito horas.",
          "A prova começa há oito horas."
        ],

        correct: 1,

        explanation:
          "Usa-se crase na indicação de horas determinadas."
      },

      {
        prompt:
          "Assinale a alternativa sem crase:",

        options: [
          "Referiu-se à diretora.",
          "Voltou à cidade.",
          "Começou a estudar.",
          "Chegou às nove horas."
        ],

        correct: 2,

        explanation:
          "Não se usa crase antes de verbo."
      },

      {
        prompt:
          "Assinale a frase correta:",

        options: [
          "Obedeceu as ordens.",
          "Obedeceu às ordens.",
          "Obedeceu das ordens.",
          "Obedeceu pelas ordens."
        ],

        correct: 1,

        explanation:
          "Obedecer exige a preposição a, e ordens admite artigo as."
      },

      {
        prompt:
          "Em “Refiro-me àquele assunto”, ocorre crase porque:",

        options: [
          "Todo pronome recebe crase.",
          "A preposição a se une ao início de aquele.",
          "Assunto é palavra feminina.",
          "O verbo não exige preposição."
        ],

        correct: 1,

        explanation:
          "A preposição a se funde com o a inicial do pronome aquele."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "O erro implicou em punição.",
          "O erro implicou punição.",
          "O erro implicou à punição.",
          "O erro implicou com punição."
        ],

        correct: 1,

        explanation:
          "Implicar, no sentido de acarretar, é usado sem preposição."
      },

      {
        prompt:
          "Em qual expressão a crase é facultativa?",

        options: [
          "À noite.",
          "Às oito horas.",
          "A ou à sua proposta.",
          "À medida que."
        ],

        correct: 2,

        explanation:
          "Antes de pronome possessivo feminino singular, o artigo e a crase podem ser facultativos."
      }
    ]
  },

  "Português::Pontuação e sintaxe": {
    access: "free",

    objective:
      "Compreender a organização sintática das orações e empregar os principais sinais de pontuação sem separar elementos essenciais.",

    sections: [
      {
        title: "📖 Estrutura básica da oração",

        html: `
          <p>
            A oração normalmente se organiza
            em sujeito e predicado.
          </p>

          <p>
            <strong>Sujeito</strong> é o termo sobre
            o qual se declara algo.
            <strong>Predicado</strong> é aquilo
            que se declara sobre o sujeito.
          </p>

          <p>
            Em “Os candidatos estudaram muito”,
            “os candidatos” é o sujeito e
            “estudaram muito” é o predicado.
          </p>
        `
      },

      {
        title: "📌 Tipos de sujeito",

        html: `
          <ul>
            <li>
              <strong>Simples:</strong>
              possui um núcleo —
              O candidato chegou.
            </li>

            <li>
              <strong>Composto:</strong>
              possui mais de um núcleo —
              O candidato e o professor chegaram.
            </li>

            <li>
              <strong>Oculto:</strong>
              é identificado pela forma verbal —
              Estudamos muito.
            </li>

            <li>
              <strong>Indeterminado:</strong>
              não se identifica quem pratica a ação —
              Disseram que haverá prova.
            </li>

            <li>
              <strong>Oração sem sujeito:</strong>
              ocorre com verbos impessoais —
              Havia dúvidas.
            </li>
          </ul>
        `
      },

      {
        title: "📖 Termos essenciais e complementos",

        html: `
          <p>O verbo pode exigir complementos.</p>

          <ul>
            <li>
              <strong>Objeto direto:</strong>
              sem preposição obrigatória —
              Leu o edital.
            </li>

            <li>
              <strong>Objeto indireto:</strong>
              com preposição obrigatória —
              Obedeceu às regras.
            </li>

            <li>
              <strong>Predicativo:</strong>
              atribui característica —
              O candidato está preparado.
            </li>

            <li>
              <strong>Adjunto adverbial:</strong>
              indica circunstância —
              Estudou durante a noite.
            </li>
          </ul>
        `
      },

      {
        title: "📌 Uso da vírgula",

        html: `
          <p>A vírgula pode separar:</p>

          <ul>
            <li>itens de uma enumeração;</li>

            <li>
              vocativo:
              Candidato, leia a questão;
            </li>

            <li>
              aposto explicativo:
              João, o instrutor, chegou;
            </li>

            <li>
              adjunto adverbial deslocado:
              À noite, ele estudou;
            </li>

            <li>
              orações coordenadas e explicativas.
            </li>
          </ul>
        `
      },

      {
        title: "❌ Onde não usar vírgula",

        html: `
          <p>
            Em regra, não se deve separar por vírgula:
          </p>

          <ul>
            <li>sujeito e verbo;</li>
            <li>verbo e complemento;</li>
            <li>nome e complemento;</li>

            <li>
              oração principal e oração subordinada
              substantiva que a completa.
            </li>
          </ul>

          <p>
            Incorreto:
            <strong>Os candidatos, chegaram cedo.</strong>
          </p>

          <p>
            Correto:
            <strong>Os candidatos chegaram cedo.</strong>
          </p>
        `
      },

      {
        title: "📌 Outros sinais",

        html: `
          <ul>
            <li>
              <strong>Ponto e vírgula:</strong>
              separa partes extensas ou itens complexos.
            </li>

            <li>
              <strong>Dois-pontos:</strong>
              introduzem explicação, enumeração,
              fala ou conclusão.
            </li>

            <li>
              <strong>Travessão:</strong>
              marca fala, destaque ou informação intercalada.
            </li>

            <li>
              <strong>Parênteses:</strong>
              inserem informação acessória.
            </li>

            <li>
              <strong>Aspas:</strong>
              destacam citação, palavra especial
              ou uso irônico.
            </li>
          </ul>
        `
      },

      {
        title: "⚠️ Sentido e pontuação",

        html: `
          <p>
            A posição da vírgula pode alterar o sentido.
          </p>

          <p>
            <strong>Não, espere.</strong>
            significa que a pessoa deve esperar.
          </p>

          <p>
            <strong>Não espere.</strong>
            significa que ela não deve esperar.
          </p>

          <p>
            Em provas, observe se a retirada ou mudança
            da pontuação altera a relação entre as ideias.
          </p>
        `
      }
    ],

    flashcards: [
      {
        question:
          "Pode haver vírgula entre sujeito e verbo?",

        answer:
          "Em regra, não."
      },

      {
        question:
          "O que é vocativo?",

        answer:
          "É o termo usado para chamar ou dirigir-se a alguém e deve ser isolado por vírgula."
      },

      {
        question:
          "O que é objeto direto?",

        answer:
          "É o complemento verbal que normalmente não exige preposição."
      },

      {
        question:
          "O que é objeto indireto?",

        answer:
          "É o complemento verbal introduzido por preposição exigida pelo verbo."
      },

      {
        question:
          "Para que servem os dois-pontos?",

        answer:
          "Para introduzir explicação, enumeração, fala, citação ou conclusão."
      },

      {
        question:
          "A pontuação pode alterar o sentido?",

        answer:
          "Sim. A presença ou posição de uma vírgula pode modificar completamente a mensagem."
      }
    ],

    questions: [
      {
        prompt:
          "Assinale a frase corretamente pontuada:",

        options: [
          "Os candidatos, chegaram cedo.",
          "Os candidatos chegaram cedo.",
          "Os candidatos chegaram, cedo.",
          "Os, candidatos chegaram cedo."
        ],

        correct: 1,

        explanation:
          "Não se separa o sujeito do verbo por vírgula."
      },

      {
        prompt:
          "Assinale a alternativa com vocativo corretamente isolado:",

        options: [
          "Candidato leia a questão.",
          "Candidato, leia a questão.",
          "Candidato leia, a questão.",
          "Candidato, leia, a questão."
        ],

        correct: 1,

        explanation:
          "O vocativo candidato deve ser isolado por vírgula."
      },

      {
        prompt:
          "Em “O candidato leu o edital”, o termo “o edital” é:",

        options: [
          "Sujeito.",
          "Objeto direto.",
          "Objeto indireto.",
          "Vocativo."
        ],

        correct: 1,

        explanation:
          "O termo completa o verbo leu sem preposição obrigatória."
      },

      {
        prompt:
          "Em “O candidato obedeceu às regras”, “às regras” é:",

        options: [
          "Objeto indireto.",
          "Objeto direto.",
          "Sujeito composto.",
          "Predicativo."
        ],

        correct: 0,

        explanation:
          "O verbo obedecer exige a preposição a."
      },

      {
        prompt:
          "Assinale a frase com adjunto adverbial deslocado corretamente pontuado:",

        options: [
          "À noite ele estudou.",
          "À noite, ele estudou.",
          "À, noite ele estudou.",
          "À noite ele, estudou."
        ],

        correct: 1,

        explanation:
          "O adjunto adverbial deslocado pode ser separado por vírgula."
      },

      {
        prompt:
          "Assinale a alternativa que apresenta sujeito composto:",

        options: [
          "O candidato chegou.",
          "Chegamos cedo.",
          "O candidato e o professor chegaram.",
          "Havia muitas pessoas."
        ],

        correct: 2,

        explanation:
          "O sujeito possui dois núcleos: candidato e professor."
      },

      {
        prompt:
          "Em “Havia muitas dúvidas”, a oração:",

        options: [
          "Possui sujeito simples.",
          "Possui sujeito oculto.",
          "Não possui sujeito.",
          "Possui sujeito composto."
        ],

        correct: 2,

        explanation:
          "Haver, com sentido de existir, é impessoal."
      },

      {
        prompt:
          "Qual sinal introduz adequadamente uma enumeração?",

        options: [
          "Dois-pontos.",
          "Ponto de interrogação.",
          "Reticências obrigatoriamente.",
          "Apóstrofo."
        ],

        correct: 0,

        explanation:
          "Os dois-pontos podem introduzir uma enumeração."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "João o instrutor chegou.",
          "João, o instrutor, chegou.",
          "João o, instrutor chegou.",
          "João, o instrutor chegou."
        ],

        correct: 1,

        explanation:
          "O aposto explicativo o instrutor deve ser isolado por vírgulas."
      },

      {
        prompt:
          "A diferença entre “Não, espere” e “Não espere” demonstra que:",

        options: [
          "A vírgula nunca altera o sentido.",
          "A pontuação pode alterar o sentido.",
          "As duas frases são idênticas.",
          "A vírgula separa sujeito e verbo."
        ],

        correct: 1,

        explanation:
          "Na primeira frase há uma resposta negativa seguida de ordem para esperar; na segunda, há ordem para não esperar."
      }
    ]
  },

  "Português::Semântica": {
    access: "free",

    objective:
      "Reconhecer relações de sentido entre palavras e expressões e interpretar efeitos de ambiguidade, denotação, conotação e figuras semânticas.",

    sections: [
      {
        title: "📖 Denotação e conotação",

        html: `
          <p>
            <strong>Denotação</strong> é o sentido
            literal e objetivo da palavra.
          </p>

          <p>
            <strong>Exemplo:</strong>
            O policial fechou a porta.
          </p>

          <p>
            <strong>Conotação</strong> é o sentido
            figurado, construído pelo contexto.
          </p>

          <p>
            <strong>Exemplo:</strong>
            A aprovação abriu portas para sua carreira.
          </p>
        `
      },

      {
        title: "📌 Sinônimos e antônimos",

        html: `
          <p>
            <strong>Sinônimos</strong> possuem sentidos
            semelhantes em determinado contexto:
            rápido e veloz.
          </p>

          <p>
            <strong>Antônimos</strong> apresentam
            sentidos opostos:
            claro e escuro; entrar e sair.
          </p>

          <p>
            A sinonímia raramente é absoluta.
            Duas palavras podem ser equivalentes em
            uma frase e inadequadas em outra.
          </p>
        `
      },

      {
        title: "📖 Homônimos e parônimos",

        html: `
          <p>
            <strong>Homônimos</strong> possuem a mesma
            pronúncia ou grafia, mas sentidos diferentes.
          </p>

          <ul>
            <li>cela: pequeno compartimento;</li>
            <li>sela: peça colocada sobre o cavalo.</li>
          </ul>

          <p>
            <strong>Parônimos</strong> possuem grafia
            ou pronúncia parecidas.
          </p>

          <ul>
            <li>descrição: ato de descrever;</li>
            <li>discrição: qualidade de quem é discreto;</li>
            <li>ratificar: confirmar;</li>
            <li>retificar: corrigir.</li>
          </ul>
        `
      },

      {
        title: "📌 Polissemia",

        html: `
          <p>
            Polissemia ocorre quando uma mesma palavra
            apresenta vários sentidos relacionados.
          </p>

          <ul>
            <li>cabeça do corpo;</li>
            <li>cabeça da equipe;</li>
            <li>cabeça do parafuso.</li>
          </ul>

          <p>
            O contexto determina qual sentido
            está sendo usado.
          </p>
        `
      },

      {
        title: "⚠️ Ambiguidade",

        html: `
          <p>
            Ambiguidade ocorre quando uma frase
            permite mais de uma interpretação.
          </p>

          <p>
            <strong>Exemplo:</strong>
            O policial viu o suspeito com o binóculo.
          </p>

          <p>
            A frase pode indicar que o policial usou
            o binóculo ou que o suspeito estava com ele.
          </p>

          <p>
            Em textos objetivos, a ambiguidade deve
            ser evitada por meio da reorganização
            da frase.
          </p>
        `
      },

      {
        title: "📖 Hipônimo e hiperônimo",

        html: `
          <p>
            <strong>Hiperônimo</strong> é uma palavra
            de sentido mais amplo.
          </p>

          <p>
            <strong>Hipônimo</strong> é uma palavra
            de sentido mais específico.
          </p>

          <p>
            Veículo é hiperônimo de carro, moto e ônibus.
            Carro é hipônimo de veículo.
          </p>
        `
      },

      {
        title: "📌 Pressuposto e subentendido",

        html: `
          <p>
            <strong>Pressuposto</strong> é uma informação
            implícita marcada linguisticamente.
          </p>

          <p>
            “João parou de estudar” pressupõe
            que João estudava antes.
          </p>

          <p>
            <strong>Subentendido</strong> depende mais
            do contexto e da intenção comunicativa.
          </p>

          <p>
            “Está frio aqui” pode subentender
            um pedido para fechar a janela.
          </p>
        `
      },

      {
        title: "⚠️ Mudança de sentido",

        html: `
          <p>
            Em questões de reescrita, uma troca
            de palavra só é válida quando preserva
            o sentido e a relação lógica do trecho.
          </p>

          <ul>
            <li>mas → porém: oposição;</li>
            <li>portanto → logo: conclusão;</li>

            <li>
              porque → pois, em contexto explicativo
              ou causal adequado;
            </li>

            <li>
              embora → ainda que: concessão.
            </li>
          </ul>
        `
      }
    ],

    flashcards: [
      {
        question:
          "O que é denotação?",

        answer:
          "É o emprego da palavra em sentido literal e objetivo."
      },

      {
        question:
          "O que é conotação?",

        answer:
          "É o emprego da palavra em sentido figurado."
      },

      {
        question:
          "O que é polissemia?",

        answer:
          "É a existência de vários sentidos relacionados para uma mesma palavra."
      },

      {
        question:
          "Qual é a diferença entre ratificar e retificar?",

        answer:
          "Ratificar significa confirmar; retificar significa corrigir."
      },

      {
        question:
          "O que é um hiperônimo?",

        answer:
          "É uma palavra de sentido mais amplo que abrange outras mais específicas."
      },

      {
        question:
          "O que é pressuposto?",

        answer:
          "É uma informação implícita marcada por elementos linguísticos da frase."
      }
    ],

    questions: [
      {
        prompt:
          "Na frase “A aprovação abriu portas”, a expressão “abriu portas” está em sentido:",

        options: [
          "Denotativo.",
          "Conotativo.",
          "Técnico.",
          "Sem sentido."
        ],

        correct: 1,

        explanation:
          "A expressão é figurada e indica criação de oportunidades."
      },

      {
        prompt:
          "Assinale o par de antônimos:",

        options: [
          "Rápido e veloz.",
          "Claro e escuro.",
          "Casa e residência.",
          "Feliz e contente."
        ],

        correct: 1,

        explanation:
          "Claro e escuro apresentam sentidos opostos."
      },

      {
        prompt:
          "Assinale a alternativa correta:",

        options: [
          "Ratificar significa corrigir.",
          "Retificar significa confirmar.",
          "Ratificar significa confirmar.",
          "Ratificar e retificar são sinônimos perfeitos."
        ],

        correct: 2,

        explanation:
          "Ratificar é confirmar; retificar é corrigir."
      },

      {
        prompt:
          "A palavra “cabeça” em “cabeça da equipe” exemplifica:",

        options: [
          "Polissemia.",
          "Antonímia.",
          "Erro gramatical.",
          "Pleonasmo."
        ],

        correct: 0,

        explanation:
          "A palavra cabeça possui vários sentidos relacionados."
      },

      {
        prompt:
          "A frase “O policial viu o suspeito com o binóculo” é ambígua porque:",

        options: [
          "Não possui verbo.",
          "Permite mais de uma interpretação.",
          "Não possui sujeito.",
          "Apresenta palavra estrangeira."
        ],

        correct: 1,

        explanation:
          "Não fica claro quem estava com o binóculo."
      },

      {
        prompt:
          "Em relação à palavra “veículo”, “carro” é:",

        options: [
          "Hiperônimo.",
          "Hipônimo.",
          "Antônimo.",
          "Homônimo."
        ],

        correct: 1,

        explanation:
          "Carro é um elemento específico dentro da categoria ampla veículo."
      },

      {
        prompt:
          "A frase “João parou de estudar” pressupõe que:",

        options: [
          "João nunca estudou.",
          "João estudava antes.",
          "João foi aprovado.",
          "João começará amanhã."
        ],

        correct: 1,

        explanation:
          "O verbo parar indica interrupção de uma atividade anteriormente realizada."
      },

      {
        prompt:
          "Assinale o par de parônimos:",

        options: [
          "Cela e sela.",
          "Descrição e discrição.",
          "Manga e manga.",
          "São e são."
        ],

        correct: 1,

        explanation:
          "Descrição e discrição possuem formas semelhantes e sentidos diferentes."
      },

      {
        prompt:
          "A substituição de “mas” por “porém” normalmente preserva uma relação de:",

        options: [
          "Conclusão.",
          "Oposição.",
          "Causa.",
          "Condição."
        ],

        correct: 1,

        explanation:
          "As duas conjunções introduzem ideia de oposição."
      },

      {
        prompt:
          "Na frase “Está frio aqui”, um possível subentendido é:",

        options: [
          "Um pedido para fechar a janela.",
          "A afirmação de que é verão.",
          "A inexistência de temperatura.",
          "Uma ordem para estudar."
        ],

        correct: 0,

        explanation:
          "Dependendo do contexto, a frase pode funcionar como pedido indireto."
      }
    ]
  }
});
