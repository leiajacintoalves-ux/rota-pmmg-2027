"use strict";

window.PMMG_LESSONS =
  window.PMMG_LESSONS || {};

const penalSection = (title, html) => ({
  title,
  html
});

const penalCard = (question, answer) => ({
  question,
  answer
});

const penalQuestion = (
  prompt,
  options,
  correct,
  explanation
) => ({
  prompt,
  options,
  correct,
  explanation
});

const penalLesson = (
  objective,
  sections,
  flashcards,
  questions
) => ({
  access: "free",
  objective,
  sections,
  flashcards,
  questions
});

Object.assign(window.PMMG_LESSONS, {
  "Direito Penal::Parte geral": penalLesson(
    "Compreender os princípios básicos da lei penal, sua aplicação no tempo e no espaço e as etapas do caminho do crime.",

    [
      penalSection(
        "⚖️ Legalidade e anterioridade",
        `
          <p>
            Não há crime sem lei anterior que o defina,
            nem pena sem prévia cominação legal.
          </p>

          <p>
            A lei penal deve existir antes do fato e não pode
            criar crimes ou penas por analogia contra o acusado.
          </p>
        `
      ),

      penalSection(
        "⏳ Lei penal no tempo",
        `
          <p>
            A lei posterior que deixa de considerar o fato criminoso
            faz cessar a execução e os efeitos penais da condenação.
          </p>

          <p>
            A lei penal posterior mais favorável retroage.
            A lei mais grave, em regra, não retroage.
          </p>

          <p>
            Leis temporárias e excepcionais continuam aplicáveis
            aos fatos praticados durante sua vigência.
          </p>
        `
      ),

      penalSection(
        "🌎 Lei penal no espaço",
        `
          <p>
            Em regra, aplica-se a lei brasileira ao crime cometido
            no território nacional, sem prejuízo de tratados
            e regras internacionais.
          </p>

          <p>
            O Código Penal também prevê hipóteses de aplicação
            da lei brasileira a fatos praticados no exterior.
          </p>
        `
      ),

      penalSection(
        "🕒 Tempo e lugar do crime",
        `
          <p>
            Considera-se praticado o crime no momento da ação
            ou omissão, ainda que o resultado ocorra depois.
          </p>

          <p>
            Quanto ao lugar, considera-se praticado tanto onde
            ocorreu a ação ou omissão quanto onde o resultado
            ocorreu ou deveria ocorrer.
          </p>
        `
      ),

      penalSection(
        "🧭 Caminho do crime",
        `
          <p>
            O caminho do crime pode envolver cogitação,
            preparação, execução e consumação.
          </p>

          <p>
            A tentativa ocorre quando a execução começa,
            mas o crime não se consuma por circunstâncias
            alheias à vontade do agente.
          </p>

          <p>
            Em regra, cogitação e atos meramente preparatórios
            não são punidos, salvo quando constituem crime autônomo.
          </p>
        `
      )
    ],

    [
      penalCard(
        "O que determina o princípio da legalidade?",
        "Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal."
      ),

      penalCard(
        "A lei penal mais benéfica pode retroagir?",
        "Sim, inclusive para fatos anteriores."
      ),

      penalCard(
        "Qual teoria define o tempo do crime?",
        "A teoria da atividade: considera-se o momento da ação ou omissão."
      ),

      penalCard(
        "Quando existe tentativa?",
        "Quando a execução começa, mas a consumação não ocorre por circunstâncias alheias à vontade do agente."
      ),

      penalCard(
        "A cogitação é punida?",
        "Em regra, não."
      )
    ],

    [
      penalQuestion(
        "Não há crime sem:",
        [
          "Sentença anterior.",
          "Lei anterior que o defina.",
          "Inquérito policial.",
          "Confissão."
        ],
        1,
        "O princípio da legalidade exige lei anterior definindo o crime."
      ),

      penalQuestion(
        "A lei penal posterior mais favorável:",
        [
          "Nunca retroage.",
          "Retroage.",
          "Só vale para crimes futuros.",
          "Depende da concordância da vítima."
        ],
        1,
        "A lei penal mais benéfica alcança fatos anteriores."
      ),

      penalQuestion(
        "Considera-se praticado o crime, quanto ao tempo:",
        [
          "No momento do resultado apenas.",
          "No momento da ação ou omissão.",
          "No momento da denúncia.",
          "No momento da prisão."
        ],
        1,
        "O Código Penal adota a teoria da atividade."
      ),

      penalQuestion(
        "A tentativa exige:",
        [
          "Somente cogitação.",
          "Início da execução e não consumação por circunstâncias alheias à vontade.",
          "Consumação completa.",
          "Arrependimento posterior obrigatório."
        ],
        1,
        "Sem início de execução não há tentativa."
      ),

      penalQuestion(
        "A lei temporária:",
        [
          "Nunca se aplica após perder vigência.",
          "Aplica-se ao fato praticado durante sua vigência.",
          "Só se aplica a contravenções.",
          "Depende de autorização judicial posterior."
        ],
        1,
        "Ela possui ultratividade para os fatos praticados durante sua vigência."
      ),

      penalQuestion(
        "Em regra, a lei penal brasileira aplica-se:",
        [
          "Somente a fatos praticados por brasileiros.",
          "Aos crimes praticados no território nacional.",
          "Apenas a crimes federais.",
          "Somente quando houver confissão."
        ],
        1,
        "A territorialidade é a regra, com ressalvas de tratados e normas internacionais."
      )
    ]
  ),

  "Direito Penal::Teoria do crime": penalLesson(
    "Identificar fato típico, ilicitude e culpabilidade e diferenciar dolo, culpa, tentativa e causas de exclusão.",

    [
      penalSection(
        "🧩 Estrutura analítica",
        `
          <p>
            Para fins de estudo, crime é normalmente analisado
            como fato típico, ilícito e culpável.
          </p>

          <ul>
            <li>
              <strong>Fato típico:</strong>
              adequação da conduta ao tipo penal.
            </li>

            <li>
              <strong>Ilicitude:</strong>
              contrariedade ao Direito.
            </li>

            <li>
              <strong>Culpabilidade:</strong>
              possibilidade de reprovação pessoal.
            </li>
          </ul>
        `
      ),

      penalSection(
        "🎯 Fato típico",
        `
          <p>
            O fato típico envolve conduta, resultado quando exigido,
            nexo causal e tipicidade.
          </p>

          <p>
            A omissão pode ser penalmente relevante quando o agente
            devia e podia agir para evitar o resultado.
          </p>
        `
      ),

      penalSection(
        "🧠 Dolo e culpa",
        `
          <p>
            Há dolo quando o agente quer o resultado ou assume
            o risco de produzi-lo.
          </p>

          <p>
            Há culpa quando o resultado decorre de imprudência,
            negligência ou imperícia e o tipo penal prevê
            a modalidade culposa.
          </p>

          <p>
            Salvo previsão expressa, ninguém é punido por crime culposo.
          </p>
        `
      ),

      penalSection(
        "🛡️ Exclusão da ilicitude",
        `
          <p>Não há crime quando o agente pratica o fato em:</p>

          <ul>
            <li>estado de necessidade;</li>
            <li>legítima defesa;</li>
            <li>estrito cumprimento de dever legal;</li>
            <li>exercício regular de direito.</li>
          </ul>

          <p>
            O agente responde pelo excesso doloso ou culposo.
          </p>
        `
      ),

      penalSection(
        "⚠️ Culpabilidade e erros",
        `
          <p>
            A culpabilidade envolve imputabilidade, potencial
            consciência da ilicitude e exigibilidade de conduta diversa.
          </p>

          <p>
            O erro sobre elemento do tipo pode excluir o dolo,
            permitindo punição por culpa quando prevista.
          </p>

          <p>
            O erro inevitável sobre a ilicitude pode isentar de pena;
            se evitável, pode reduzir a pena.
          </p>
        `
      )
    ],

    [
      penalCard(
        "Quais são os três elementos da análise do crime?",
        "Fato típico, ilicitude e culpabilidade."
      ),

      penalCard(
        "Quando há dolo?",
        "Quando o agente quer o resultado ou assume o risco de produzi-lo."
      ),

      penalCard(
        "Quais são as formas clássicas de culpa?",
        "Imprudência, negligência e imperícia."
      ),

      penalCard(
        "Quais são as excludentes de ilicitude?",
        "Estado de necessidade, legítima defesa, estrito cumprimento de dever legal e exercício regular de direito."
      ),

      penalCard(
        "O excesso em uma excludente pode ser punido?",
        "Sim, quando doloso ou culposo."
      )
    ],

    [
      penalQuestion(
        "Na análise tripartida, crime é fato:",
        [
          "Típico, ilícito e culpável.",
          "Típico e moral apenas.",
          "Ilícito e administrativo.",
          "Culpável sem tipicidade."
        ],
        0,
        "A estrutura mais utilizada é fato típico, ilicitude e culpabilidade."
      ),

      penalQuestion(
        "Age com dolo quem:",
        [
          "Quer o resultado ou assume o risco.",
          "Sempre atua sem vontade.",
          "Comete apenas erro material.",
          "Produz qualquer resultado acidental."
        ],
        0,
        "O dolo abrange vontade direta e assunção do risco."
      ),

      penalQuestion(
        "A negligência é modalidade de:",
        [
          "Dolo.",
          "Culpa.",
          "Legítima defesa.",
          "Estado de necessidade."
        ],
        1,
        "Negligência, imprudência e imperícia são formas de culpa."
      ),

      penalQuestion(
        "É causa de exclusão da ilicitude:",
        [
          "Embriaguez voluntária.",
          "Legítima defesa.",
          "Reincidência.",
          "Motivo fútil."
        ],
        1,
        "A legítima defesa exclui a ilicitude quando presentes seus requisitos."
      ),

      penalQuestion(
        "O erro sobre elemento do tipo pode:",
        [
          "Excluir o dolo.",
          "Criar reincidência.",
          "Aumentar sempre a pena.",
          "Eliminar o nexo causal automaticamente."
        ],
        0,
        "O erro de tipo pode excluir o dolo, preservando culpa se houver previsão."
      ),

      penalQuestion(
        "Quem age em legítima defesa e excede os limites:",
        [
          "Nunca responde.",
          "Pode responder pelo excesso doloso ou culposo.",
          "Responde apenas civilmente.",
          "É sempre absolvido."
        ],
        1,
        "As excludentes não protegem o excesso punível."
      )
    ]
  ),

  "Direito Penal::Penas": penalLesson(
    "Diferenciar as espécies de pena, compreender os regimes básicos e reconhecer os critérios gerais de aplicação e substituição.",

    [
      penalSection(
        "⚖️ Espécies de pena",
        `
          <p>O Código Penal prevê:</p>

          <ul>
            <li>penas privativas de liberdade;</li>
            <li>penas restritivas de direitos;</li>
            <li>pena de multa.</li>
          </ul>

          <p>
            A Constituição determina a individualização da pena
            e proíbe penas incompatíveis com suas garantias,
            como penas cruéis e de caráter perpétuo.
          </p>
        `
      ),

      penalSection(
        "🚪 Reclusão, detenção e regimes",
        `
          <p>
            As penas privativas de liberdade incluem reclusão
            e detenção, conforme o tipo penal.
          </p>

          <p>
            Os regimes são fechado, semiaberto e aberto.
            A definição do regime inicial considera a quantidade
            de pena, reincidência e circunstâncias judiciais,
            além das regras legais específicas.
          </p>
        `
      ),

      penalSection(
        "🔄 Penas restritivas de direitos",
        `
          <p>
            As penas restritivas são autônomas e substituem
            a pena privativa de liberdade quando preenchidos
            os requisitos legais.
          </p>

          <p>Entre suas espécies estão:</p>

          <ul>
            <li>prestação pecuniária;</li>
            <li>perda de bens e valores;</li>
            <li>prestação de serviços à comunidade;</li>
            <li>interdição temporária de direitos;</li>
            <li>limitação de fim de semana.</li>
          </ul>
        `
      ),

      penalSection(
        "💰 Multa",
        `
          <p>
            A pena de multa é calculada pelo sistema de dias-multa.
            O juiz fixa a quantidade de dias e o valor de cada dia
            segundo os critérios legais e a situação econômica
            do condenado.
          </p>
        `
      ),

      penalSection(
        "📊 Aplicação da pena",
        `
          <p>
            O cálculo segue, em regra, três fases:
          </p>

          <ol>
            <li>
              fixação da pena-base pelas circunstâncias judiciais;
            </li>

            <li>agravantes e atenuantes;</li>

            <li>
              causas de aumento e de diminuição.
            </li>
          </ol>

          <p>
            A pena deve ser necessária e suficiente para reprovação
            e prevenção do crime, dentro dos limites legais.
          </p>
        `
      )
    ],

    [
      penalCard(
        "Quais são as espécies de pena no Código Penal?",
        "Privativas de liberdade, restritivas de direitos e multa."
      ),

      penalCard(
        "Quais são os regimes de cumprimento?",
        "Fechado, semiaberto e aberto."
      ),

      penalCard(
        "Pena restritiva de direitos é sempre adicional?",
        "Não. Quando cabível, ela substitui a privativa de liberdade."
      ),

      penalCard(
        "Como é calculada a multa penal?",
        "Pelo sistema de dias-multa."
      ),

      penalCard(
        "Quais são as três fases da dosimetria?",
        "Pena-base; agravantes e atenuantes; causas de aumento e diminuição."
      )
    ],

    [
      penalQuestion(
        "É espécie de pena prevista no Código Penal:",
        [
          "Banimento.",
          "Restritiva de direitos.",
          "Trabalho forçado.",
          "Pena perpétua."
        ],
        1,
        "As penas restritivas de direitos são previstas no Código Penal."
      ),

      penalQuestion(
        "São regimes de cumprimento da pena:",
        [
          "Fechado, semiaberto e aberto.",
          "Preventivo, provisório e definitivo.",
          "Civil, penal e administrativo.",
          "Comum, especial e militar."
        ],
        0,
        "Esses são os três regimes básicos."
      ),

      penalQuestion(
        "A multa penal é calculada por:",
        [
          "Percentual fixo do patrimônio.",
          "Dias-multa.",
          "Horas de trabalho.",
          "Número de testemunhas."
        ],
        1,
        "O Código Penal utiliza o sistema de dias-multa."
      ),

      penalQuestion(
        "Na primeira fase da dosimetria fixa-se:",
        [
          "A pena-base.",
          "A prescrição.",
          "A competência.",
          "O valor da fiança."
        ],
        0,
        "A primeira fase considera as circunstâncias judiciais para definir a pena-base."
      ),

      penalQuestion(
        "As penas restritivas de direitos:",
        [
          "Nunca substituem a prisão.",
          "Podem substituir a pena privativa quando presentes os requisitos legais.",
          "São aplicadas somente a crimes militares.",
          "Dependem da concordância da vítima."
        ],
        1,
        "A substituição depende dos requisitos do Código Penal."
      ),

      penalQuestion(
        "A pena de caráter perpétuo:",
        [
          "É admitida para reincidentes.",
          "É proibida pela Constituição.",
          "É obrigatória em crime hediondo.",
          "É pena restritiva de direitos."
        ],
        1,
        "A Constituição proíbe penas de caráter perpétuo."
      )
    ]
  ),

  "Direito Penal::Concurso de pessoas": penalLesson(
    "Compreender autoria, participação, comunicação de circunstâncias e os efeitos da contribuição de cada agente.",

    [
      penalSection(
        "👥 Regra geral",
        `
          <p>
            Quem, de qualquer modo, concorre para o crime incide
            nas penas a ele cominadas, na medida de sua culpabilidade.
          </p>

          <p>
            O concurso pressupõe pluralidade de agentes,
            contribuição relevante, vínculo subjetivo
            e identidade de infração, conforme o caso.
          </p>
        `
      ),

      penalSection(
        "🎯 Autor e partícipe",
        `
          <p>
            Autor é quem realiza o núcleo do tipo ou possui domínio
            relevante da realização do fato, conforme a teoria adotada.
          </p>

          <p>
            Partícipe contribui para crime alheio por induzimento,
            instigação ou auxílio.
          </p>
        `
      ),

      penalSection(
        "📉 Participação de menor importância",
        `
          <p>
            Se a participação for de menor importância,
            a pena pode ser diminuída de um sexto a um terço.
          </p>

          <p>
            A redução não decorre apenas de o agente ser chamado
            de partícipe; depende da menor relevância concreta
            de sua contribuição.
          </p>
        `
      ),

      penalSection(
        "🔀 Cooperação dolosamente distinta",
        `
          <p>
            Se um dos concorrentes quis participar de crime menos grave,
            aplica-se a pena deste crime.
          </p>

          <p>
            A pena pode ser aumentada até a metade se o resultado
            mais grave era previsível.
          </p>
        `
      ),

      penalSection(
        "🧬 Circunstâncias e elementares",
        `
          <p>
            Circunstâncias e condições de caráter pessoal
            não se comunicam, salvo quando constituem elementares
            do crime.
          </p>

          <p>
            A participação só é punível quando o crime chega,
            ao menos, à tentativa, salvo previsão específica.
          </p>
        `
      )
    ],

    [
      penalCard(
        "Qual é a regra do artigo 29?",
        "Quem concorre para o crime responde na medida de sua culpabilidade."
      ),

      penalCard(
        "Como o partícipe pode contribuir?",
        "Por induzimento, instigação ou auxílio."
      ),

      penalCard(
        "A participação de menor importância pode reduzir a pena?",
        "Sim, de um sexto a um terço."
      ),

      penalCard(
        "Circunstâncias pessoais se comunicam?",
        "Em regra, não, salvo quando são elementares do crime."
      ),

      penalCard(
        "A participação é punível se o crime nem chega à tentativa?",
        "Em regra, não."
      )
    ],

    [
      penalQuestion(
        "Quem concorre para o crime responde:",
        [
          "Sempre com pena idêntica.",
          "Na medida de sua culpabilidade.",
          "Somente se executar pessoalmente o núcleo.",
          "Apenas civilmente."
        ],
        1,
        "A responsabilidade é individualizada conforme a culpabilidade."
      ),

      penalQuestion(
        "O auxílio material ao autor pode caracterizar:",
        [
          "Participação.",
          "Prescrição.",
          "Legítima defesa.",
          "Erro de proibição."
        ],
        0,
        "O auxílio é forma de participação."
      ),

      penalQuestion(
        "A participação de menor importância:",
        [
          "Extingue sempre o crime.",
          "Pode reduzir a pena.",
          "Aumenta obrigatoriamente a pena.",
          "Transforma o fato em contravenção."
        ],
        1,
        "O Código Penal prevê redução de um sexto a um terço."
      ),

      penalQuestion(
        "Circunstâncias pessoais:",
        [
          "Sempre se comunicam.",
          "Nunca possuem relevância.",
          "Em regra não se comunicam, salvo se elementares.",
          "Eliminam o dolo."
        ],
        2,
        "Essa é a regra do artigo 30."
      ),

      penalQuestion(
        "Se o agente quis participar de crime menos grave:",
        [
          "Responde automaticamente pelo mais grave.",

          "Aplica-se a pena do crime menos grave, com possível aumento se previsível o resultado.",

          "Nunca responde.",

          "Responde somente por tentativa."
        ],
        1,
        "É a cooperação dolosamente distinta."
      ),

      penalQuestion(
        "O concurso de pessoas exige:",
        [
          "Pluralidade de agentes e contribuição relevante.",
          "Somente presença no local.",
          "Parentesco entre os agentes.",
          "Confissão conjunta."
        ],
        0,
        "A mera presença sem contribuição ou vínculo não basta."
      )
    ]
  ),

  "Direito Penal::Crimes contra a pessoa": penalLesson(
    "Diferenciar os principais crimes contra a vida, integridade corporal, honra e liberdade pessoal, considerando atualizações legislativas relevantes.",

    [
      penalSection(
        "❤️ Crimes contra a vida",
        `
          <p>
            O homicídio consiste em matar alguém.
            O Código Penal prevê forma simples, qualificadas,
            causas de aumento e modalidade culposa.
          </p>

          <p>
            O feminicídio possui tipo penal próprio e protege
            a mulher contra morte praticada por razões da
            condição do sexo feminino, conforme a lei.
          </p>

          <p>
            O vicaricídio, introduzido em 2026, pune a morte
            de pessoa ligada à mulher com a finalidade específica
            de causar-lhe sofrimento, punição ou controle
            no contexto de violência doméstica e familiar.
          </p>
        `
      ),

      penalSection(
        "🤕 Lesão corporal",
        `
          <p>
            Lesão corporal é ofender a integridade corporal
            ou a saúde de outra pessoa.
          </p>

          <p>
            O resultado pode tornar o crime leve, grave,
            gravíssimo ou seguido de morte, além de existirem
            regras específicas para violência doméstica
            e outras situações previstas em lei.
          </p>
        `
      ),

      penalSection(
        "🗣️ Crimes contra a honra",
        `
          <ul>
            <li>
              <strong>Calúnia:</strong>
              atribuir falsamente fato definido como crime.
            </li>

            <li>
              <strong>Difamação:</strong>
              atribuir fato ofensivo à reputação.
            </li>

            <li>
              <strong>Injúria:</strong>
              ofender dignidade ou decoro.
            </li>
          </ul>
        `
      ),

      penalSection(
        "🚪 Liberdade pessoal",
        `
          <p>
            Entre os crimes contra a liberdade pessoal estão
            constrangimento ilegal, ameaça, perseguição
            e sequestro ou cárcere privado.
          </p>

          <p>
            Cada tipo possui requisitos próprios; nem toda
            intimidação configura automaticamente o mesmo crime.
          </p>
        `
      ),

      penalSection(
        "⚠️ Omissão e perigo",
        `
          <p>
            O Código Penal também protege a pessoa contra
            abandono materialmente perigoso, omissão de socorro
            e exposição da vida ou saúde a perigo,
            conforme os elementos de cada tipo.
          </p>
        `
      )
    ],

    [
      penalCard(
        "Qual é o núcleo do homicídio?",
        "Matar alguém."
      ),

      penalCard(
        "O que é lesão corporal?",
        "Ofender a integridade corporal ou a saúde de outra pessoa."
      ),

      penalCard(
        "Qual é a diferença entre calúnia e difamação?",
        "Calúnia atribui falsamente crime; difamação atribui fato ofensivo à reputação."
      ),

      penalCard(
        "O que é injúria?",
        "Ofensa à dignidade ou ao decoro."
      ),

      penalCard(
        "O que caracteriza o vicaricídio criado em 2026?",
        "Matar pessoa ligada à mulher para causar-lhe sofrimento, punição ou controle em contexto de violência doméstica e familiar."
      )
    ],

    [
      penalQuestion(
        "Calúnia consiste em:",
        [
          "Ofender somente a aparência.",
          "Atribuir falsamente fato definido como crime.",
          "Subtrair coisa alheia.",
          "Ameaçar com mal injusto."
        ],
        1,
        "A falsa imputação de crime caracteriza calúnia."
      ),

      penalQuestion(
        "Difamação atinge principalmente:",
        [
          "A reputação.",
          "O patrimônio.",
          "A Administração Pública.",
          "A posse de coisa móvel."
        ],
        0,
        "Difamação envolve fato ofensivo à reputação."
      ),

      penalQuestion(
        "Injúria é:",
        [
          "Ofensa à dignidade ou ao decoro.",
          "Falsa imputação obrigatória de crime.",
          "Subtração com violência.",
          "Privação da liberdade."
        ],
        0,
        "Injúria atinge atributos pessoais da vítima."
      ),

      penalQuestion(
        "Lesão corporal consiste em:",
        [
          "Ofender a integridade corporal ou a saúde.",
          "Apenas causar prejuízo financeiro.",
          "Somente ameaçar.",
          "Subtrair objeto."
        ],
        0,
        "O tipo protege a integridade corporal e a saúde."
      ),

      penalQuestion(
        "O homicídio se consuma com:",
        [
          "A ameaça.",
          "A morte da vítima.",
          "A denúncia.",
          "O início do inquérito."
        ],
        1,
        "O resultado morte consuma o homicídio."
      ),

      penalQuestion(
        "O vicaricídio possui finalidade específica de:",
        [
          "Obter vantagem econômica.",

          "Causar sofrimento, punição ou controle à mulher no contexto legal.",

          "Subtrair patrimônio público.",

          "Ocultar documento."
        ],
        1,
        "A finalidade específica diferencia o novo tipo penal."
      )
    ]
  ),

  "Direito Penal::Crimes contra o patrimônio": penalLesson(
    "Diferenciar furto, roubo, extorsão, apropriação indébita, estelionato, dano e receptação.",

    [
      penalSection(
        "👜 Furto",
        `
          <p>
            Furto é subtrair, para si ou para outrem,
            coisa alheia móvel.
          </p>

          <p>
            Em sua forma básica, não exige violência
            ou grave ameaça contra a pessoa.
          </p>

          <p>
            O Código Penal prevê qualificadoras e regras especiais,
            inclusive atualizações recentes para determinados bens
            e serviços essenciais.
          </p>
        `
      ),

      penalSection(
        "🚨 Roubo",
        `
          <p>
            Roubo é a subtração de coisa alheia móvel
            mediante grave ameaça ou violência contra pessoa,
            ou depois de reduzir a vítima à impossibilidade
            de resistência.
          </p>

          <p>
            A violência ou grave ameaça distingue o roubo
            do furto.
          </p>
        `
      ),

      penalSection(
        "💬 Extorsão",
        `
          <p>
            Na extorsão, o agente constrange alguém,
            mediante violência ou grave ameaça,
            a fazer, tolerar que se faça ou deixar de fazer algo,
            com finalidade de obter vantagem econômica indevida.
          </p>

          <p>
            Diferentemente do roubo, a colaboração da vítima
            possui relevância para a obtenção da vantagem.
          </p>
        `
      ),

      penalSection(
        "💳 Estelionato e apropriação indébita",
        `
          <p>
            Estelionato envolve obtenção de vantagem ilícita,
            em prejuízo alheio, mediante fraude que induz
            ou mantém alguém em erro.
          </p>

          <p>
            Na apropriação indébita, o agente se apropria
            de coisa alheia móvel de que já possuía
            posse ou detenção legítima.
          </p>
        `
      ),

      penalSection(
        "🔧 Dano e receptação",
        `
          <p>
            Dano consiste em destruir, inutilizar
            ou deteriorar coisa alheia.
          </p>

          <p>
            Receptação envolve adquirir, receber, transportar,
            conduzir ou ocultar coisa que o agente sabe ser
            produto de crime, além de outras condutas previstas.
          </p>
        `
      )
    ],

    [
      penalCard(
        "Qual é a diferença central entre furto e roubo?",
        "O roubo envolve violência, grave ameaça ou redução da capacidade de resistência; o furto básico não."
      ),

      penalCard(
        "O que caracteriza a extorsão?",
        "Constranger a vítima, com violência ou grave ameaça, a colaborar para obtenção de vantagem econômica indevida."
      ),

      penalCard(
        "O que caracteriza estelionato?",
        "Fraude que induz ou mantém a vítima em erro para obtenção de vantagem ilícita."
      ),

      penalCard(
        "O que diferencia apropriação indébita?",
        "O agente já tinha posse ou detenção legítima da coisa."
      ),

      penalCard(
        "O que é receptação?",
        "Praticar as condutas legais sobre coisa que se sabe ser produto de crime."
      )
    ],

    [
      penalQuestion(
        "Furto é:",
        [
          "Subtrair coisa alheia móvel.",
          "Constranger servidor público.",
          "Ofender a honra.",
          "Privar alguém da liberdade."
        ],
        0,
        "Esse é o núcleo básico do furto."
      ),

      penalQuestion(
        "O elemento que distingue normalmente roubo de furto é:",
        [
          "A existência de coisa móvel.",
          "Violência ou grave ameaça contra a pessoa.",
          "A intenção de obter vantagem.",
          "A presença de testemunha."
        ],
        1,
        "Roubo exige violência, grave ameaça ou redução da resistência."
      ),

      penalQuestion(
        "Na extorsão:",
        [
          "A atuação da vítima é irrelevante em todos os casos.",

          "A vítima é constrangida a fazer, tolerar ou deixar de fazer algo.",

          "Não existe finalidade econômica.",

          "Não pode haver grave ameaça."
        ],
        1,
        "A vítima é coagida a colaborar para a vantagem indevida."
      ),

      penalQuestion(
        "No estelionato, a vítima é:",
        [
          "Induzida ou mantida em erro por fraude.",
          "Obrigatoriamente agredida fisicamente.",
          "Funcionário público em todos os casos.",
          "Privada da liberdade."
        ],
        0,
        "A fraude e o erro da vítima são centrais no estelionato."
      ),

      penalQuestion(
        "Na apropriação indébita, o agente:",
        [
          "Já possui legitimamente a coisa antes de se apropriar.",
          "Sempre subtrai com violência.",
          "Falsamente atribui crime.",
          "Destrói coisa pública."
        ],
        0,
        "A posse ou detenção anterior diferencia a apropriação indébita."
      ),

      penalQuestion(
        "Destruir, inutilizar ou deteriorar coisa alheia pode configurar:",
        [
          "Dano.",
          "Calúnia.",
          "Peculato.",
          "Prevaricação."
        ],
        0,
        "Esses são os verbos do crime de dano."
      )
    ]
  ),

  "Direito Penal::Crimes contra a Administração": penalLesson(
    "Diferenciar os principais crimes funcionais e crimes praticados por particulares contra a Administração Pública.",

    [
      penalSection(
        "👮 Funcionário público para fins penais",
        `
          <p>
            Para efeitos penais, considera-se funcionário público
            quem exerce cargo, emprego ou função pública,
            ainda que transitoriamente ou sem remuneração.
          </p>

          <p>
            A lei também equipara determinadas pessoas
            que atuam em entidades paraestatais ou prestadoras
            de serviço contratado ou conveniado para atividade
            típica da Administração.
          </p>
        `
      ),

      penalSection(
        "💰 Peculato",
        `
          <p>
            Peculato ocorre, em sua forma básica, quando
            o funcionário se apropria ou desvia dinheiro,
            valor ou bem móvel de que tem posse em razão do cargo,
            em proveito próprio ou alheio.
          </p>

          <p>
            Existem também peculato-furto, peculato culposo
            e peculato mediante erro de outrem.
          </p>
        `
      ),

      penalSection(
        "💵 Concussão e corrupção passiva",
        `
          <p>
            <strong>Concussão:</strong>
            exigir vantagem indevida em razão da função.
          </p>

          <p>
            <strong>Corrupção passiva:</strong>
            solicitar ou receber vantagem indevida,
            ou aceitar promessa de vantagem, em razão da função.
          </p>

          <p>
            A diferença clássica é:
            concussão exige; corrupção passiva solicita,
            recebe ou aceita promessa.
          </p>
        `
      ),

      penalSection(
        "📄 Prevaricação e advocacia administrativa",
        `
          <p>
            Prevaricação consiste em retardar, deixar de praticar
            ou praticar indevidamente ato de ofício para satisfazer
            interesse ou sentimento pessoal.
          </p>

          <p>
            Advocacia administrativa é patrocinar interesse privado
            perante a Administração, valendo-se da qualidade
            de funcionário.
          </p>
        `
      ),

      penalSection(
        "🚪 Crimes de particulares",
        `
          <p>
            Entre os crimes praticados por particular estão:
          </p>

          <ul>
            <li>
              <strong>Usurpação de função pública:</strong>
              exercer indevidamente função pública.
            </li>

            <li>
              <strong>Resistência:</strong>
              opor-se à execução de ato legal mediante violência
              ou ameaça a funcionário competente ou auxiliar.
            </li>

            <li>
              <strong>Desobediência:</strong>
              desobedecer ordem legal de funcionário público.
            </li>

            <li>
              <strong>Desacato:</strong>
              desacatar funcionário público no exercício
              da função ou em razão dela.
            </li>

            <li>
              <strong>Corrupção ativa:</strong>
              oferecer ou prometer vantagem indevida a funcionário.
            </li>
          </ul>
        `
      )
    ],

    [
      penalCard(
        "Quem é funcionário público para fins penais?",
        "Quem exerce cargo, emprego ou função pública, mesmo temporariamente ou sem remuneração."
      ),

      penalCard(
        "Qual é a diferença entre concussão e corrupção passiva?",
        "Na concussão o agente exige; na corrupção passiva solicita, recebe ou aceita promessa."
      ),

      penalCard(
        "O que é peculato-apropriação?",
        "Apropriar-se o funcionário de bem móvel de que tem posse em razão do cargo."
      ),

      penalCard(
        "Qual é o elemento especial da prevaricação?",
        "Satisfazer interesse ou sentimento pessoal."
      ),

      penalCard(
        "Quem pratica corrupção ativa?",
        "O particular que oferece ou promete vantagem indevida a funcionário público, sem excluir situações legais específicas."
      )
    ],

    [
      penalQuestion(
        "Para fins penais, funcionário público:",
        [
          "É somente o servidor efetivo.",
          "Pode exercer função temporariamente ou sem remuneração.",
          "Precisa ocupar cargo político.",
          "É apenas quem trabalha na União."
        ],
        1,
        "O conceito penal é amplo."
      ),

      penalQuestion(
        "Exigir vantagem indevida em razão da função caracteriza:",
        [
          "Corrupção ativa.",
          "Concussão.",
          "Prevaricação.",
          "Desobediência."
        ],
        1,
        "O verbo central da concussão é exigir."
      ),

      penalQuestion(
        "Solicitar ou receber vantagem indevida em razão da função pode configurar:",
        [
          "Corrupção passiva.",
          "Resistência.",
          "Usurpação de função.",
          "Dano."
        ],
        0,
        "Solicitar, receber ou aceitar promessa são condutas da corrupção passiva."
      ),

      penalQuestion(
        "Na prevaricação, o funcionário atua para:",
        [
          "Satisfazer interesse ou sentimento pessoal.",
          "Obter sempre vantagem econômica.",
          "Subtrair coisa com violência.",
          "Impedir qualquer investigação."
        ],
        0,
        "O interesse ou sentimento pessoal é elemento específico."
      ),

      penalQuestion(
        "Oferecer vantagem indevida a funcionário público pode configurar:",
        [
          "Corrupção ativa.",
          "Concussão.",
          "Peculato culposo.",
          "Prevaricação."
        ],
        0,
        "A corrupção ativa é praticada por quem oferece ou promete a vantagem."
      ),

      penalQuestion(
        "Opor-se à execução de ato legal mediante violência ou ameaça caracteriza:",
        [
          "Desobediência.",
          "Resistência.",
          "Desacato.",
          "Advocacia administrativa."
        ],
        1,
        "A violência ou ameaça contra a execução do ato legal caracteriza resistência."
      )
    ]
  )
});
