// Array de dados para os cards
const sustentabilidadeArray = [
    {
        id: "introducao-sustentabilidade",
        titulo: "Introdução à Sustentabilidade",
        conteudo:
            "A sustentabilidade é mais do que uma tendência, é uma necessidade global que começa com pequenas ações no nível local. Em condomínios, onde muitas pessoas compartilham recursos e espaços, há um enorme potencial para implementar práticas que promovam o equilíbrio ambiental e social. Transformar o ambiente onde vivemos em um exemplo de responsabilidade ambiental não é apenas benéfico para a comunidade, mas também para o planeta como um todo.",
        image: "../_imagens/solucoes_sustentaveis/1-sustentabilidade.jpg",
        alt: "Imagem representativa de sustentabilidade",
    },
    {
        id: "idealize",
        titulo: "1. Idealize",
        conteudo:
            "Ter uma visão clara é o primeiro passo para qualquer projeto de sustentabilidade. Idealizar um condomínio sustentável significa pensar em longo prazo e imaginar como cada ação pode contribuir para o bem-estar da comunidade e para a preservação do meio ambiente.",
        image: "../_imagens/solucoes_sustentaveis/2-pensar.jpg",
        alt: "Imagem ilustrativa sobre idealização",
    },
    {
        id: "compartilhe",
        titulo: "2. Compartilhe suas Ideias",
        conteudo:
            "A comunicação é fundamental para transformar ideias em ações concretas. Compartilhar seus planos com os moradores e gestores do condomínio cria um senso de colaboração e engajamento.",
        image: "../_imagens/solucoes_sustentaveis/3-compartilhar.jpg",
        alt: "Imagem ilustrativa sobre compartilhamento de ideias",
    },
    {
        id: "compostagem",
        titulo: "3. Pratique Compostagem",
        conteudo:
            "A compostagem é uma maneira simples e eficaz de reduzir a quantidade de lixo orgânico descartado. Ao transformar resíduos de alimentos em adubo, você contribui para a fertilidade do solo nas áreas verdes.",
        image: "../_imagens/solucoes_sustentaveis/4-compostagem.jpg",
        alt: "Imagem ilustrativa sobre compostagem",
    },
    {
        id: "painel-solar",
        titulo: "4. Instale Painéis Solares",
        conteudo:
            "A instalação de painéis solares é uma solução inovadora e sustentável para condomínios que buscam reduzir sua pegada de carbono.",
        image: "../_imagens/solucoes_sustentaveis/5-paineis_solares.jpg",
        alt: "Imagem ilustrativa sobre painéis solares",
    },
    {
        id: "coleta-seletiva",
        titulo: "5. Implemente a Coleta Seletiva",
        conteudo:
            "A coleta seletiva é uma prática essencial para garantir que os resíduos recicláveis sejam devidamente tratados.",
        image: "../_imagens/solucoes_sustentaveis/6-coleta_seletiva.png",
        alt: "Imagem ilustrativa sobre coleta seletiva",
    },
    {
        id: "grupos-trabalho",
        titulo: "6. Crie Grupos de Trabalho",
        conteudo:
            "A formação de grupos de trabalho é uma estratégia eficaz para implementar mudanças no condomínio. Dividir os moradores em equipes com responsabilidades específicas torna o processo mais organizado e colaborativo.",
        image: "../_imagens/solucoes_sustentaveis/7-grupos_de_trabalho.jpg",
        alt: "Imagem ilustrativa sobre grupos de trabalho",
    },
]

// Função para renderizar os cards dinamicamente
document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container")

    // Renderizar o card de introdução
    const introCard = document.createElement("article")
    introCard.classList.add("cards")

    const introTitle = document.createElement("h2")
    introTitle.classList.add("h2_subtitulo")
    introTitle.textContent = sustentabilidadeArray[0].titulo

    const introParagraph = document.createElement("p")
    introParagraph.classList.add("paragrafo")
    introParagraph.textContent = sustentabilidadeArray[0].conteudo

    const introImage = document.createElement("img")
    introImage.src = sustentabilidadeArray[0].image
    introImage.alt = sustentabilidadeArray[0].alt
    introImage.classList.add("figura")

    // Criar o botão "Leia Mais" para a introdução
    const introButton = document.createElement("button")
    introButton.classList.add("leia-mais")
    introButton.textContent = "Leia Mais..."

    // Adicionar os elementos ao card de introdução
    introCard.appendChild(introTitle)
    introCard.appendChild(introParagraph)
    introCard.appendChild(introImage)
    introCard.appendChild(introButton)

    // Adicionar o card de introdução ao contêiner principal
    cardContainer.appendChild(introCard)

    // Renderizar os outros cards (ocultos inicialmente)
    const otherCards = []
    for (let c = 1; c < sustentabilidadeArray.length; c++) {
        const item = sustentabilidadeArray[c]

        // Esconder os cards inicialmente
        const divCard = document.createElement("article")
        divCard.classList.add("cards", "oculto")

        const title = document.createElement("h2")
        title.classList.add("h2_subtitulo")
        title.textContent = item.titulo

        const paragraph = document.createElement("p")
        paragraph.classList.add("paragrafo")
        paragraph.textContent = item.conteudo

        const image = document.createElement("img")
        image.src = item.image
        image.alt = item.alt
        image.classList.add("figura")

        divCard.appendChild(title)
        divCard.appendChild(paragraph)
        divCard.appendChild(image)

        // Armazenar os cards para manipulação posterior
        cardContainer.appendChild(divCard)
        otherCards.push(divCard)
    }

    // Adicionar uma funcionalidade ao botão "Leia Mais"
    introButton.addEventListener("click", () => {
        // Mostra todos os cards
        otherCards.forEach((card) => {
            card.classList.remove("oculto")
        })

        // Remover o botão "Leia Mais" após o clique
        introButton.style.display = "none"
    })
})
