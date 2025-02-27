
// Grafico 01
// Textos personalizados para cada fatia
const texto_grafico_1 = ['43,8%', '56,3%'];
new Chart(document.getElementById("chart_1"), {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [43.8, 56.3],
                backgroundColor: ['#3366cc', '#dc3912'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_1[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 02
const texto_grafico_2 = ['75%', '25%'];
new Chart(document.getElementById("chart_2"), {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [75, 25],
                backgroundColor: ['#3366cc', '#dc3912'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_2[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 03
const texto_grafico_3 = ['56,3%', '37,5%', '6,2%'];
new Chart(document.getElementById("chart_3"), {
    type: 'pie',
    data: {
        labels: ['Muito Alta', 'Alta', 'Média', 'Baixa', 'Nenhuma'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [56.3 , 37.5, 6.2, , , ],
                backgroundColor: ['#3366cc', '#dc3912', 'orange', 'green', 'purple'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_3[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 04
const texto_grafico_4 = ['100%'];
new Chart(document.getElementById("chart_4"), {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [100, ,],
                backgroundColor: ['#3366cc', '#dc3912'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_4[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 05
const texto_grafico_5 = ['81,3%', '18,8%'];
new Chart(document.getElementById("chart_5"), {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [81.3, 18.8],
                backgroundColor: ['#3366cc','#dc3912'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_5[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});



// Grafico 06
const texto_grafico_6 = [ , '6,2%', '56,3%', '37,5%'];
new Chart(document.getElementById("chart_6"), {
    type: 'pie',
    data: {
        labels: ['Mensalmente', 'Quinzenalmente', 'Semanalmente', 'Diariamente'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [ , 6.2, 56.3, 37.5],
                backgroundColor: ['#3366cc', '#dc3912', 'orange', 'green'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_6[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 07
const texto_grafico_7 = ['50%', '50%'];
new Chart(document.getElementById("chart_7"), {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [50, 50],
                backgroundColor: ['#3366cc','#dc3912'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_7[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 08
const texto_grafico_8 = ['100%'];
new Chart(document.getElementById("chart_8"), {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [100, ,],
                backgroundColor: ['#3366cc', '#dc3912'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_8[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});


// Grafico 09
const texto_grafico_9 = [ , , '50%', '6,25%', '37,5%', '6,25%'];
new Chart(document.getElementById("chart_9"), {
    type: 'pie',
    data: {
        labels: ['Papel', 'Plástico', 'Vidro', 'Metal', 'Orgânicos', 'Outros'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [ , , 50, 6.25, 37.5, 6.25],
                backgroundColor: ['#3366cc', '#dc3912', 'orange', 'green', 'purple', 'DarkCyan'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_9[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});



// Grafico 10
const texto_grafico_10 = [ , '20%', '6,7%', , '20%', '53,3%'];
new Chart(document.getElementById("chart_10"), {
    type: 'pie',
    data: {
        labels: ['Simulador de Condomínio Sustentável', 'Jogo de Coleta Seletiva Rápida (Minigame de Reflexos)', 'Missão Compostagem', 'Jogo de "Missões Verdes" com Pontuação por Atividades Sustentáveis', 'Jogo Educacional com Realidade Aumentada (RA)', 'Game para Crianças: Aventura do...'],
        datasets: [
            {
                label: 'Respostas: ',
                data: [ , , 50, 6.25, 37.5, 6.25],
                backgroundColor: ['#3366cc', '#dc3912', 'orange', 'green', 'purple', 'DarkCyan'], // red e blue
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
            datalabels: {
                color: '#fff', // Cor do texto
                font: {
                    size: 14,
                    weight: 'bold'
                },
                formatter: (value, context) => {
                    return texto_grafico_10[context.dataIndex]; // Exibe o texto personalizado
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Ativa o plugin
});