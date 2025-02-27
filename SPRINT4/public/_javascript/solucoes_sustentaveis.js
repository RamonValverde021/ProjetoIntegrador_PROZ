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

    sustentabilidadeArray.forEach((item) => {
        // Cria o elemento <article> para o card
        const divCard = document.createElement("article")
        divCard.classList.add("cards")
        divCard.id = item.id

        // Cria o título do card
        const title = document.createElement("h2")
        title.classList.add("h2_subtitulo")
        title.textContent = item.titulo

        // Cria o parágrafo do card
        const paragraph = document.createElement("p")
        paragraph.classList.add("paragrafo")
        paragraph.textContent = item.conteudo

        // Cria a imagem do card
        const image = document.createElement("img")
        image.src = item.image
        image.alt = item.alt
        image.classList.add("figura")

        // Adiciona os elementos ao card
        divCard.appendChild(title)
        divCard.appendChild(paragraph)
        divCard.appendChild(image)

        // Adiciona o card ao contêiner principal
        cardContainer.appendChild(divCard)
    })
})
