
// Grafico de Rosquinha

// Textos personalizados para cada fatia
const textosPersonalizados = ['61.1% \n43.812.217 \nToneladas', '38.9% \n27.917.624 \nTonelas'];

const ctx1 = document.getElementById("doughnut_chart");
var chartGraph1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: [
            'Disposição Final Adequada',
            'Disposição final Inadequada'
        ],
        datasets: [{
            label: 'Porcentagem',
            data: [61.1, 38.9],
            backgroundColor: [
                '#29338d',
                '#58ae33'
            ],
            hoverOffset: 4,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true, // Permite altura e largura personalizadas
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: '*Projeções corrigidas com base no Censo 2022',
                font: {
                    size: 14 // Muda o tamanho do titulo
                 }
            },
            datalabels: {
                color: 'white', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return textosPersonalizados[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin


});