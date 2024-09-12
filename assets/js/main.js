// Variáveis globais e constantes
let interval;
let isRunning = false;

// Seleção de elementos do DOM usando const para elementos que não serão reatribuídos
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('display');

// Objeto para manter o estado do cronômetro
const timerState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

// Função para iniciar o cronômetro
const startTimer = () => {
  if (isRunning) return;
  isRunning = true;

  // Configura o display inicial
  display.innerHTML = 'horas : minutos : segundos';

  interval = setInterval(() => {
    updateTime();
  }, 1000);
};

// Função para pausar o cronômetro
const pauseTimer = () => {
  clearInterval(interval);
  isRunning = false;
};

// Função para reiniciar o cronômetro
const resetTimer = () => {
  pauseTimer();
  display.innerHTML = 'horas : minutos : segundos';
  hoursInput.value = '00';
  minutesInput.value = '00';
  secondsInput.value = '00';
};

// Atualiza o tempo com base nos inputs e estados
const updateTime = () => {
  // Desestruturação do estado atual do cronômetro
  let { hours, minutes, seconds } = timerState;

  // Atualiza os valores do cronômetro a partir dos inputs
  hours = parseInt(hoursInput.value);
  minutes = parseInt(minutesInput.value);
  seconds = parseInt(secondsInput.value);

  // Atualiza os segundos, minutos e horas
  if (seconds > 0) {
    seconds--;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
  } else if (hours > 0) {
    hours--;
    minutes = 59;
    seconds = 59;
  } else {
    pauseTimer();
    display.innerHTML = 'O TEMPO ACABOU!!!';
    return; // Sai da função após mostrar a mensagem de tempo esgotado
  }

  // Atualiza o objeto de estado e os inputs
  timerState.hours = hours;
  timerState.minutes = minutes;
  timerState.seconds = seconds;

  hoursInput.value = twoDigits(hours);
  minutesInput.value = twoDigits(minutes);
  secondsInput.value = twoDigits(seconds);
};

// Função auxiliar para formatar a exibição do tempo usando Template Literals
const formatTimeDisplay = ({ hours, minutes, seconds }) => {
  return `${twoDigits(hours)} : ${twoDigits(minutes)} : ${twoDigits(seconds)}`;
};

// Função para formatar dígitos menores que 10
const twoDigits = (digit) => (digit < 10 ? '0' + digit : digit); // Operador Ternário

// Adiciona os eventos aos botões
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
