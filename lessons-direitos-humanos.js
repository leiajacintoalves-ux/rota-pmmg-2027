"use strict";

window.PMMG_LESSONS = window.PMMG_LESSONS || {};

const humanRightsSection = (title, html) => ({ title, html });
const humanRightsCard = (question, answer) => ({ question, answer });
const humanRightsQuestion = (
  prompt,
  options,
  correct,
  explanation
) => ({ prompt, options, correct, explanation });

const humanRightsLesson = (
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
  "Direitos Humanos::Declaração Universal": humanRightsLesson(
    "Compreender a origem, a natureza e os principais direitos previstos na Declaração Universal dos Direitos Humanos.",
    [
      humanRightsSection(
        "🌍 Origem e importância",
        `
          <p>
            A Declaração Universal dos Direitos Humanos foi
            proclamada pela Assembleia Geral das Nações Unidas
            em 10 de dezembro de 1948, por meio da Resolução
            217 A (III).
          </p>

          <p>
            Ela surgiu após as graves violações ocorridas durante
            a Segunda Guerra Mundial e estabeleceu um padrão comum
            de proteção para todos os povos e nações.
          </p>
        `
      ),

      humanRightsSection(
        "📜 Natureza da Declaração",
        `
          <p>
            A DUDH é uma <strong>declaração internacional</strong>,
            e não um tratado internacional em sentido formal.
          </p>

          <p>
            Apesar disso, possui enorme importância jurídica,
            política e histórica, orientando constituições,
            tratados e sistemas internacionais de proteção
            dos direitos humanos.
          </p>
        `
      ),

      humanRightsSection(
        "🤝 Liberdade, igualdade e fraternidade",
        `
          <p>
            O artigo 1º afirma que todos os seres humanos nascem
            livres e iguais em dignidade e direitos, são dotados
            de razão e consciência e devem agir uns para com os
            outros em espírito de fraternidade.
          </p>

          <p>
            O artigo 2º assegura os direitos da Declaração sem
            distinções como raça, cor, sexo, língua, religião,
            opinião, origem, condição econômica, nascimento
            ou outra condição.
          </p>
        `
      ),

      humanRightsSection(
        "🛡️ Direitos civis e políticos",
        `
          <p>Entre os direitos protegidos estão:</p>

          <ul>
            <li>vida, liberdade e segurança pessoal;</li>
            <li>proibição da escravidão e da tortura;</li>
            <li>igualdade perante a lei;</li>
            <li>presunção de inocência;</li>
            <li>liberdade de pensamento, consciência e religião;</li>
            <li>liberdade de opinião, expressão, reunião e associação;</li>
            <li>participação no governo e acesso ao serviço público.</li>
          </ul>
        `
      ),

      humanRightsSection(
        "🏠 Direitos econômicos, sociais e culturais",
        `
          <p>A Declaração também protege direitos como:</p>

          <ul>
            <li>segurança social;</li>
            <li>trabalho e remuneração justa;</li>
            <li>repouso e lazer;</li>
            <li>padrão de vida adequado;</li>
            <li>educação;</li>
            <li>participação na vida cultural.</li>
          </ul>

          <p>
            Direitos humanos não se limitam à liberdade individual:
            também incluem condições para uma vida digna.
          </p>
        `
      ),

      humanRightsSection(
        "⚠️ Limites e deveres",
        `
          <p>
            Toda pessoa possui deveres para com a comunidade,
            pois nela é possível o livre e pleno desenvolvimento
            de sua personalidade.
          </p>

          <p>
            O exercício dos direitos pode sofrer limitações
            previstas em lei para respeitar os direitos de outras
            pessoas e atender às exigências da ordem pública e do
            bem-estar geral em uma sociedade democrática.
          </p>
        `
      )
    ],
    [
      humanRightsCard(
        "Em que data a DUDH foi proclamada?",
        "10 de dezembro de 1948."
      ),
      humanRightsCard(
        "A DUDH é um tratado internacional?",
        "Não. É uma declaração internacional proclamada pela Assembleia Geral da ONU."
      ),
      humanRightsCard(
        "Quantos artigos possui a DUDH?",
        "Trinta artigos."
      ),
      humanRightsCard(
        "O que estabelece o artigo 1º da DUDH?",
        "Que todos nascem livres e iguais em dignidade e direitos e devem agir em espírito de fraternidade."
      ),
      humanRightsCard(
        "A DUDH protege somente direitos civis e políticos?",
        "Não. Também protege direitos econômicos, sociais e culturais."
      )
    ],
    [
      humanRightsQuestion(
        "A Declaração Universal dos Direitos Humanos foi proclamada em:",
        ["1945.", "1948.", "1969.", "1988."],
        1,
        "A DUDH foi proclamada em 10 de dezembro de 1948."
      ),
      humanRightsQuestion(
        "A DUDH possui:",
        ["10 artigos.", "20 artigos.", "30 artigos.", "50 artigos."],
        2,
        "A Declaração é composta por trinta artigos."
      ),
      humanRightsQuestion(
        "Sobre a natureza da DUDH, assinale a correta:",
        [
          "É uma constituição mundial.",
          "É uma declaração internacional, não um tratado em sentido formal.",
          "É uma lei brasileira.",
          "É uma sentença da Corte Interamericana."
        ],
        1,
        "A DUDH foi proclamada como declaração pela Assembleia Geral da ONU."
      ),
      humanRightsQuestion(
        "Segundo o artigo 1º da DUDH, todos nascem:",
        [
          "Livres e iguais em dignidade e direitos.",
          "Submetidos ao Estado sem direitos próprios.",
          "Com direitos diferentes conforme a nacionalidade.",
          "Livres, mas sem deveres perante a comunidade."
        ],
        0,
        "Liberdade, igualdade em dignidade e direitos e fraternidade aparecem no artigo 1º."
      ),
      humanRightsQuestion(
        "É direito previsto na DUDH:",
        [
          "Submissão à tortura em situações excepcionais.",
          "Escravidão por dívida.",
          "Liberdade de pensamento, consciência e religião.",
          "Prisão arbitrária sem controle."
        ],
        2,
        "A DUDH protege a liberdade de pensamento, consciência e religião."
      ),
      humanRightsQuestion(
        "A DUDH protege direitos econômicos, sociais e culturais?",
        [
          "Não, somente direitos políticos.",
          "Sim, incluindo trabalho, educação e segurança social.",
          "Somente para cidadãos de países membros permanentes.",
          "Apenas quando houver guerra."
        ],
        1,
        "A Declaração reúne direitos civis, políticos, econômicos, sociais e culturais."
      )
    ]
  ),

  "Direitos Humanos::Dignidade humana": humanRightsLesson(
    "Entender a dignidade da pessoa humana como fundamento constitucional e base da proteção dos direitos humanos.",
    [
      humanRightsSection(
        "👤 Fundamento da República",
        `
          <p>
            A dignidade da pessoa humana é um dos fundamentos
            da República Federativa do Brasil, previsto no
            artigo 1º, inciso III, da Constituição.
          </p>

          <p>
            Isso significa que o Estado deve reconhecer cada
            pessoa como sujeito de direitos e orientar sua atuação
            pelo respeito ao valor inerente de todo ser humano.
          </p>
        `
      ),

      humanRightsSection(
        "🧭 Função interpretativa",
        `
          <p>
            A dignidade serve como princípio orientador para
            interpretar direitos, deveres, políticas públicas
            e a atuação estatal.
          </p>

          <p>
            Ela auxilia na proteção da vida, da integridade física
            e moral, da liberdade, da igualdade e das condições
            mínimas necessárias ao desenvolvimento da pessoa.
          </p>
        `
      ),

      humanRightsSection(
        "🚫 Proteção contra tratamento degradante",
        `
          <p>
            A Constituição proíbe a tortura e o tratamento
            desumano ou degradante. Também assegura às pessoas
            presas respeito à integridade física e moral.
          </p>

          <p>
            A condição de investigado, acusado, condenado,
            estrangeiro, pobre ou pertencente a qualquer grupo
            não elimina a dignidade.
          </p>
        `
      ),

      humanRightsSection(
        "🏠 Liberdade e condições materiais",
        `
          <p>
            A dignidade possui relação com a autonomia pessoal,
            mas também com condições materiais mínimas para uma
            existência digna.
          </p>

          <p>
            Por isso, direitos individuais e direitos sociais
            se complementam na proteção da pessoa.
          </p>
        `
      ),

      humanRightsSection(
        "⚖️ Dignidade e atuação policial",
        `
          <p>
            A atuação policial deve conciliar proteção da sociedade,
            aplicação da lei e respeito aos direitos fundamentais.
          </p>

          <p>
            Uma medida legítima não pode ser transformada em
            humilhação, vingança ou tratamento cruel. O investigado
            ou preso continua sendo titular de direitos.
          </p>
        `
      ),

      humanRightsSection(
        "📌 Dignidade não é privilégio",
        `
          <p>
            A dignidade pertence a todas as pessoas. Não depende
            de nacionalidade, profissão, renda, reputação ou
            comportamento socialmente aprovado.
          </p>

          <p>
            Reconhecer a dignidade não impede responsabilização
            por atos ilícitos; exige que ela ocorra dentro da lei
            e com respeito aos direitos fundamentais.
          </p>
        `
      )
    ],
    [
      humanRightsCard(
        "Onde a dignidade da pessoa humana aparece na Constituição?",
        "No artigo 1º, inciso III, como fundamento da República."
      ),
      humanRightsCard(
        "A pessoa presa conserva dignidade?",
        "Sim. A Constituição assegura respeito à sua integridade física e moral."
      ),
      humanRightsCard(
        "Dignidade impede responsabilização criminal?",
        "Não. Exige que a responsabilização ocorra conforme a lei e com respeito aos direitos fundamentais."
      ),
      humanRightsCard(
        "A dignidade protege apenas a liberdade individual?",
        "Não. Relaciona-se também à igualdade, à integridade e às condições materiais mínimas."
      ),
      humanRightsCard(
        "A dignidade depende da nacionalidade ou condição econômica?",
        "Não. É inerente a toda pessoa."
      )
    ],
    [
      humanRightsQuestion(
        "A dignidade da pessoa humana é:",
        [
          "Um objetivo exclusivo dos Municípios.",
          "Fundamento da República Federativa do Brasil.",
          "Regra aplicável apenas ao processo penal.",
          "Direito reservado aos brasileiros natos."
        ],
        1,
        "A dignidade está no artigo 1º, inciso III, da Constituição."
      ),
      humanRightsQuestion(
        "A dignidade da pessoa humana pertence:",
        [
          "Somente a quem não praticou crime.",
          "A todas as pessoas.",
          "Apenas a servidores públicos.",
          "Somente a cidadãos brasileiros."
        ],
        1,
        "A dignidade é inerente a todo ser humano."
      ),
      humanRightsQuestion(
        "A Constituição assegura às pessoas presas:",
        [
          "Perda automática de todos os direitos.",
          "Respeito à integridade física e moral.",
          "Tratamento degradante como punição.",
          "Incomunicabilidade permanente."
        ],
        1,
        "A integridade física e moral das pessoas presas é garantia constitucional."
      ),
      humanRightsQuestion(
        "Reconhecer a dignidade do acusado significa:",
        [
          "Impedir qualquer investigação.",
          "Excluir toda responsabilidade.",
          "Garantir tratamento legal e respeito aos direitos fundamentais.",
          "Obrigar absolvição."
        ],
        2,
        "A dignidade não elimina a responsabilização, mas exige procedimento legítimo."
      ),
      humanRightsQuestion(
        "A dignidade relaciona-se:",
        [
          "Somente à propriedade.",
          "À liberdade, igualdade, integridade e condições de vida digna.",
          "Apenas ao direito eleitoral.",
          "Somente à nacionalidade."
        ],
        1,
        "A dignidade possui alcance amplo na proteção da pessoa."
      ),
      humanRightsQuestion(
        "Na atuação estatal, a dignidade funciona como:",
        [
          "Autorização para arbitrariedade.",
          "Princípio orientador da interpretação e da conduta pública.",
          "Regra sem qualquer efeito.",
          "Privilégio concedido pela autoridade."
        ],
        1,
        "A dignidade orienta a interpretação e a atuação do poder público."
      )
    ]
  ),

  "Direitos Humanos::Tratados internacionais": humanRightsLesson(
    "Compreender o papel dos tratados de direitos humanos, sua incorporação ao direito brasileiro e o Sistema Interamericano.",
    [
      humanRightsSection(
        "🌐 O que são tratados internacionais",
        `
          <p>
            Tratados são acordos escritos celebrados entre
            sujeitos de direito internacional e regidos pelo
            direito internacional.
          </p>

          <p>
            Na área de direitos humanos, estabelecem obrigações
            de respeito, proteção e garantia dos direitos
            reconhecidos.
          </p>
        `
      ),

      humanRightsSection(
        "🇧🇷 Incorporação ao direito brasileiro",
        `
          <p>
            De modo geral, a participação brasileira envolve
            negociação e assinatura pelo Poder Executivo,
            aprovação pelo Congresso Nacional, ratificação
            e promulgação.
          </p>

          <p>
            A assinatura, isoladamente, não deve ser confundida
            com a conclusão de todas as etapas internas necessárias
            para a execução do tratado no país.
          </p>
        `
      ),

      humanRightsSection(
        "📜 Constituição e tratados de direitos humanos",
        `
          <p>
            O artigo 5º, § 2º, afirma que os direitos expressos
            na Constituição não excluem outros decorrentes dos
            tratados internacionais dos quais o Brasil seja parte.
          </p>

          <p>
            Pelo § 3º, tratados de direitos humanos aprovados
            em cada Casa do Congresso, em dois turnos e por três
            quintos dos votos dos membros, são equivalentes às
            emendas constitucionais.
          </p>
        `
      ),

      humanRightsSection(
        "🌎 Convenção Americana",
        `
          <p>
            A Convenção Americana sobre Direitos Humanos,
            conhecida como Pacto de São José da Costa Rica,
            foi adotada em 1969 e promulgada no Brasil pelo
            Decreto nº 678/1992.
          </p>

          <p>
            Ela protege direitos como vida, integridade pessoal,
            liberdade, garantias judiciais, liberdade de consciência,
            expressão, reunião, associação e proteção judicial.
          </p>
        `
      ),

      humanRightsSection(
        "🏛️ Comissão e Corte Interamericanas",
        `
          <p>A Convenção Americana prevê dois órgãos de proteção:</p>

          <ul>
            <li>Comissão Interamericana de Direitos Humanos;</li>
            <li>Corte Interamericana de Direitos Humanos.</li>
          </ul>

          <p>
            A Comissão recebe e analisa petições e acompanha
            a situação dos direitos humanos. A Corte exerce
            função jurisdicional nos casos submetidos conforme
            as regras do sistema.
          </p>
        `
      ),

      humanRightsSection(
        "🔄 Proteção internacional complementar",
        `
          <p>
            A proteção internacional não substitui automaticamente
            as instituições nacionais. Ela atua de forma complementar,
            reforçando a responsabilidade estatal.
          </p>

          <p>
            No Sistema Interamericano, em regra, exige-se que os
            recursos internos disponíveis e adequados tenham sido
            utilizados, salvo as exceções previstas.
          </p>
        `
      )
    ],
    [
      humanRightsCard(
        "O que é tratado internacional?",
        "Acordo escrito regido pelo direito internacional entre sujeitos de direito internacional."
      ),
      humanRightsCard(
        "Qual dispositivo equipara certos tratados de direitos humanos a emendas constitucionais?",
        "O artigo 5º, § 3º, da Constituição."
      ),
      humanRightsCard(
        "Qual quórum exige o artigo 5º, § 3º?",
        "Três quintos dos votos, em dois turnos, em cada Casa do Congresso."
      ),
      humanRightsCard(
        "Qual decreto promulgou a Convenção Americana no Brasil?",
        "Decreto nº 678/1992."
      ),
      humanRightsCard(
        "Quais são os órgãos de proteção previstos na Convenção Americana?",
        "Comissão Interamericana e Corte Interamericana de Direitos Humanos."
      )
    ],
    [
      humanRightsQuestion(
        "Tratado internacional é:",
        [
          "Ato unilateral de um Município.",
          "Acordo escrito regido pelo direito internacional.",
          "Sentença de tribunal estadual.",
          "Decreto sem participação internacional."
        ],
        1,
        "Tratados são acordos internacionais regidos pelo direito internacional."
      ),
      humanRightsQuestion(
        "Segundo o artigo 5º, § 3º, um tratado de direitos humanos será equivalente a emenda constitucional se aprovado:",
        [
          "Por maioria simples em sessão única.",
          "Por três quintos, em dois turnos, em cada Casa do Congresso.",
          "Somente pelo Senado.",
          "Por decreto do Poder Executivo."
        ],
        1,
        "O procedimento qualificado é o descrito no § 3º do artigo 5º."
      ),
      humanRightsQuestion(
        "O Pacto de São José da Costa Rica corresponde à:",
        [
          "Convenção Americana sobre Direitos Humanos.",
          "Declaração Universal.",
          "Carta da ONU.",
          "Convenção sobre os Direitos da Criança."
        ],
        0,
        "Esse é o nome pelo qual a Convenção Americana é conhecida."
      ),
      humanRightsQuestion(
        "A Convenção Americana foi promulgada no Brasil pelo:",
        [
          "Decreto nº 678/1992.",
          "Código Penal.",
          "Decreto nº 1/1988.",
          "Estatuto da Criança e do Adolescente."
        ],
        0,
        "O Decreto nº 678/1992 promulgou a Convenção Americana."
      ),
      humanRightsQuestion(
        "São órgãos do Sistema Interamericano previstos na Convenção:",
        [
          "Conselho de Segurança e Assembleia Geral.",
          "Comissão e Corte Interamericanas de Direitos Humanos.",
          "Congresso Nacional e Supremo Tribunal Federal.",
          "Tribunal Penal Internacional e Unesco."
        ],
        1,
        "A Comissão e a Corte são os órgãos indicados pela Convenção."
      ),
      humanRightsQuestion(
        "A proteção internacional dos direitos humanos atua:",
        [
          "Somente quando o Estado desejar, sem obrigações.",
          "De forma complementar à proteção interna.",
          "Para substituir toda a legislação nacional.",
          "Apenas em conflitos armados."
        ],
        1,
        "Os sistemas internacionais complementam e reforçam a proteção nacional."
      )
    ]
  ),

  "Direitos Humanos::Igualdade": humanRightsLesson(
    "Diferenciar igualdade formal e material e compreender a proibição de discriminação nos sistemas constitucional e internacional.",
    [
      humanRightsSection(
        "⚖️ Igualdade perante a lei",
        `
          <p>
            A Constituição estabelece que todos são iguais
            perante a lei, sem distinção de qualquer natureza.
          </p>

          <p>
            Também afirma que homens e mulheres são iguais
            em direitos e obrigações nos termos constitucionais.
          </p>
        `
      ),

      humanRightsSection(
        "📏 Igualdade formal",
        `
          <p>
            Igualdade formal significa que a lei e as autoridades
            não devem estabelecer privilégios ou perseguições
            arbitrárias entre pessoas em situações equivalentes.
          </p>

          <p>
            A mesma regra deve ser aplicada de modo imparcial
            quando não houver razão jurídica para tratamento diferente.
          </p>
        `
      ),

      humanRightsSection(
        "🧩 Igualdade material",
        `
          <p>
            Igualdade material considera diferenças reais que
            podem impedir pessoas ou grupos de exercer direitos
            em condições equivalentes.
          </p>

          <p>
            Assim, tratamentos diferenciados podem ser legítimos
            quando possuem fundamento constitucional, finalidade
            adequada e critérios proporcionais para reduzir
            desigualdades.
          </p>
        `
      ),

      humanRightsSection(
        "🚫 Não discriminação",
        `
          <p>
            A Constituição determina a promoção do bem de todos
            sem preconceitos de origem, raça, sexo, cor, idade
            ou outras formas de discriminação.
          </p>

          <p>
            A DUDH e a Convenção Americana também asseguram
            direitos sem discriminação por características
            pessoais ou sociais.
          </p>
        `
      ),

      humanRightsSection(
        "🔍 Discriminação direta e indireta",
        `
          <p>
            A discriminação direta ocorre quando alguém recebe
            tratamento desfavorável explicitamente por uma
            condição protegida.
          </p>

          <p>
            A discriminação indireta pode ocorrer quando uma
            regra aparentemente neutra produz desvantagem
            injustificada sobre determinado grupo.
          </p>
        `
      ),

      humanRightsSection(
        "👮 Igualdade na atuação pública",
        `
          <p>
            A autoridade deve agir com impessoalidade, sem selecionar
            pessoas para abordagem, proteção ou investigação com base
            apenas em preconceitos.
          </p>

          <p>
            Diferenças de tratamento exigem fundamento objetivo,
            finalidade legítima e respeito à lei.
          </p>
        `
      )
    ],
    [
      humanRightsCard(
        "O que é igualdade formal?",
        "Aplicação imparcial da lei a pessoas em situações equivalentes, sem privilégios ou perseguições arbitrárias."
      ),
      humanRightsCard(
        "O que é igualdade material?",
        "Busca de condições efetivas de igualdade, admitindo medidas justificadas para reduzir desigualdades."
      ),
      humanRightsCard(
        "Todo tratamento diferente é discriminação?",
        "Não. Pode ser legítimo quando há fundamento objetivo, finalidade adequada e proporcionalidade."
      ),
      humanRightsCard(
        "O que é discriminação direta?",
        "Tratamento desfavorável explícito baseado em condição protegida."
      ),
      humanRightsCard(
        "Uma regra aparentemente neutra pode discriminar?",
        "Sim, quando produz desvantagem injustificada sobre determinado grupo."
      )
    ],
    [
      humanRightsQuestion(
        "A igualdade formal significa:",
        [
          "Proibir qualquer diferença prevista em lei.",
          "Aplicar a lei imparcialmente a pessoas em situações equivalentes.",
          "Tratar toda pessoa de modo diferente.",
          "Eliminar a análise do caso concreto."
        ],
        1,
        "Igualdade formal combate privilégios e perseguições arbitrárias."
      ),
      humanRightsQuestion(
        "A igualdade material busca:",
        [
          "Manter desigualdades reais.",
          "Criar privilégios sem justificativa.",
          "Promover condições efetivas de igualdade.",
          "Impedir políticas públicas."
        ],
        2,
        "A igualdade material considera obstáculos concretos ao exercício dos direitos."
      ),
      humanRightsQuestion(
        "Tratamento diferenciado pode ser legítimo quando:",
        [
          "Baseado em preconceito.",
          "Possui fundamento objetivo, finalidade legítima e proporcionalidade.",
          "Depende apenas da vontade do agente.",
          "Não está sujeito a controle."
        ],
        1,
        "Diferenças justificadas podem servir à própria igualdade material."
      ),
      humanRightsQuestion(
        "A discriminação indireta pode ocorrer quando:",
        [
          "Uma regra aparentemente neutra gera desvantagem injustificada a um grupo.",
          "A lei protege igualmente todas as pessoas.",
          "Uma autoridade corrige uma desigualdade com base legal.",
          "Não existe impacto sobre ninguém."
        ],
        0,
        "O efeito desigual injustificado pode revelar discriminação indireta."
      ),
      humanRightsQuestion(
        "A Constituição determina promover o bem de todos:",
        [
          "Com distinção obrigatória por origem.",
          "Sem preconceitos e outras formas de discriminação.",
          "Apenas para brasileiros natos.",
          "Somente para agentes públicos."
        ],
        1,
        "Esse é um objetivo fundamental da República."
      ),
      humanRightsQuestion(
        "Na atuação pública, diferenças de tratamento exigem:",
        [
          "Preconceito pessoal.",
          "Fundamento objetivo e respeito à lei.",
          "Preferência política do agente.",
          "Ausência de justificativa."
        ],
        1,
        "A impessoalidade e a igualdade exigem critérios legítimos."
      )
    ]
  ),

  "Direitos Humanos::Direitos da criança": humanRightsLesson(
    "Compreender a proteção integral, a prioridade absoluta e os direitos fundamentais de crianças e adolescentes.",
    [
      humanRightsSection(
        "👧 Criança e adolescente",
        `
          <p>
            Para o Estatuto da Criança e do Adolescente,
            criança é a pessoa com até doze anos de idade
            incompletos.
          </p>

          <p>
            Adolescente é a pessoa entre doze e dezoito anos
            de idade. Em situações expressamente previstas,
            o Estatuto pode ser aplicado excepcionalmente a
            pessoas entre dezoito e vinte e um anos.
          </p>
        `
      ),

      humanRightsSection(
        "🛡️ Proteção integral",
        `
          <p>
            O ECA adota a doutrina da proteção integral.
            Crianças e adolescentes são sujeitos de direitos
            fundamentais e merecem proteção especial por estarem
            em desenvolvimento.
          </p>

          <p>
            Não são tratados como simples objetos de tutela
            ou controle.
          </p>
        `
      ),

      humanRightsSection(
        "⭐ Prioridade absoluta",
        `
          <p>
            Família, sociedade e Estado devem assegurar, com
            absoluta prioridade, direitos como vida, saúde,
            alimentação, educação, lazer, profissionalização,
            cultura, dignidade, respeito, liberdade e convivência
            familiar e comunitária.
          </p>

          <p>
            A prioridade envolve preferência na proteção e no
            atendimento, precedência nas políticas públicas e
            destinação privilegiada de recursos, nos termos do ECA.
          </p>
        `
      ),

      humanRightsSection(
        "🚫 Proteção contra violência e exploração",
        `
          <p>
            Nenhuma criança ou adolescente pode ser submetido
            a negligência, discriminação, exploração, violência,
            crueldade ou opressão.
          </p>

          <p>
            A prevenção e a comunicação das violações são
            responsabilidades compartilhadas entre poder público,
            família e comunidade.
          </p>
        `
      ),

      humanRightsSection(
        "🏠 Convivência e desenvolvimento",
        `
          <p>
            Crianças e adolescentes têm direito de ser criados
            e educados no seio de sua família e, excepcionalmente,
            em família substituta, com garantia de convivência
            familiar e comunitária.
          </p>

          <p>
            Toda decisão deve considerar sua condição peculiar
            de pessoa em desenvolvimento e buscar proteção efetiva
            de seus direitos.
          </p>
        `
      ),

      humanRightsSection(
        "👮 Atendimento e respeito",
        `
          <p>
            Em qualquer intervenção estatal, a criança ou o
            adolescente deve ser tratado com respeito, preservação
            da dignidade, proteção da identidade e consideração
            de sua idade e desenvolvimento.
          </p>

          <p>
            Medidas de proteção não são penas. Elas buscam
            interromper ameaças ou violações e restaurar direitos.
          </p>
        `
      )
    ],
    [
      humanRightsCard(
        "Quem é criança para o ECA?",
        "Pessoa com até doze anos de idade incompletos."
      ),
      humanRightsCard(
        "Quem é adolescente para o ECA?",
        "Pessoa entre doze e dezoito anos de idade."
      ),
      humanRightsCard(
        "Qual doutrina orienta o ECA?",
        "A doutrina da proteção integral."
      ),
      humanRightsCard(
        "Quem deve assegurar os direitos com prioridade absoluta?",
        "A família, a sociedade e o Estado."
      ),
      humanRightsCard(
        "Medida de proteção é pena?",
        "Não. Busca interromper ameaça ou violação e restaurar direitos."
      )
    ],
    [
      humanRightsQuestion(
        "Para o ECA, criança é a pessoa:",
        [
          "Até doze anos incompletos.",
          "Até quatorze anos completos.",
          "Entre doze e dezoito anos.",
          "Até dezoito anos incompletos."
        ],
        0,
        "O artigo 2º considera criança a pessoa até doze anos incompletos."
      ),
      humanRightsQuestion(
        "Adolescente é a pessoa:",
        [
          "Entre dez e dezesseis anos.",
          "Entre doze e dezoito anos.",
          "Entre quatorze e vinte e um anos.",
          "Com mais de dezoito anos."
        ],
        1,
        "O ECA define adolescente como pessoa entre doze e dezoito anos."
      ),
      humanRightsQuestion(
        "O ECA adota a doutrina da:",
        [
          "Situação irregular.",
          "Proteção integral.",
          "Defesa social absoluta.",
          "Incapacidade permanente."
        ],
        1,
        "A proteção integral reconhece crianças e adolescentes como sujeitos de direitos."
      ),
      humanRightsQuestion(
        "A prioridade absoluta deve ser assegurada por:",
        [
          "Somente pela família.",
          "Somente pelo Poder Judiciário.",
          "Família, sociedade e Estado.",
          "Apenas pela escola."
        ],
        2,
        "A responsabilidade é compartilhada."
      ),
      humanRightsQuestion(
        "Nenhuma criança ou adolescente será objeto de:",
        [
          "Educação e cuidado.",
          "Negligência, discriminação, exploração, violência, crueldade ou opressão.",
          "Convivência familiar.",
          "Proteção de sua saúde."
        ],
        1,
        "O ECA proíbe todas essas formas de violação."
      ),
      humanRightsQuestion(
        "As medidas de proteção têm por objetivo:",
        [
          "Aplicar pena criminal.",
          "Restaurar e proteger direitos ameaçados ou violados.",
          "Substituir obrigatoriamente a família.",
          "Punir toda criança envolvida em conflito."
        ],
        1,
        "Medidas de proteção possuem finalidade protetiva, não punitiva."
      )
    ]
  )
});
