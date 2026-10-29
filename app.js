/**
 * Método Dark 100K | @gaelfilantropo
 * Site sem bibliotecas externas de análise ou pixels.
 * Confira preço e forma de pagamento diretamente na Wiapy antes de publicar.
 */
const CONFIG = Object.freeze({
  checkoutUrl: 'https://pay.wiapy.com/6ae2cfa06e359ce02d03051c',
  price: 37,
  priceLabel: 'R$ 37,00',
  installmentDisplay: '6x de R$ 6,94', // valor do variant A original; confirmar checkout
  whatsapp: '5511932383351',
  brand: '@gaelfilantropo',
});

const QUESTIONS = [
  { id:'stage', kicker:'PRIMEIRO, SEU PONTO DE PARTIDA', title:'Em que fase está seu perfil dark?', description:'Não existe resposta certa. Queremos saber de onde você vai começar.', tip:'Dá para começar do zero, sem uma base grande de seguidores.', options:[
    {value:'zero',icon:'✨',label:'Ainda não tenho um perfil',hint:'Quero tirar a ideia do papel'},
    {value:'stopped',icon:'🌱',label:'Tenho perfil, mas quase não posto',hint:'Quero voltar com uma estratégia'},
    {value:'trying',icon:'📉',label:'Já posto, mas não consigo crescer',hint:'Meu conteúdo não está chegando às pessoas'},
    {value:'growing',icon:'🚀',label:'Meu perfil já cresce',hint:'Quero acelerar e organizar o processo'},
  ]},
  { id:'followers', kicker:'ENTENDENDO O TAMANHO ATUAL', title:'Quantos seguidores você tem hoje?', description:'Usaremos essa faixa só para orientar seu plano. Não pedimos login.', tip:'O número atual não determina seu potencial. O foco é aprender a testar e melhorar.', options:[
    {value:'0',icon:'🌑',label:'0 a 100',hint:'No início ou criando do zero'},
    {value:'100',icon:'🌗',label:'101 a 1.000',hint:'Construindo meus primeiros seguidores'},
    {value:'1000',icon:'🌕',label:'1.001 a 10.000',hint:'Quero dar o próximo salto'},
    {value:'10000',icon:'⚡',label:'Mais de 10.000',hint:'Tenho uma base e quero ampliar'},
  ]},
  { id:'niche', kicker:'SOBRE O CONTEÚDO QUE VAI POSTAR', title:'Qual nicho mais combina com você?', description:'Escolha um tema que você conseguiria estudar e publicar por pelo menos 30 dias.', tip:'Um nicho claro ajuda a criar reconhecimento e atrair um público consistente.', options:[
    {value:'humor',icon:'😂',label:'Humor e entretenimento',hint:'Memes, situações e vídeos engraçados'},
    {value:'games',icon:'🎮',label:'Games e cultura pop',hint:'Clipes, curiosidades e comunidades'},
    {value:'curiosidades',icon:'🧠',label:'Curiosidades e histórias',hint:'Fatos, explicações e descobertas'},
    {value:'motivacao',icon:'🔥',label:'Motivação e estilo de vida',hint:'Ideias, reflexões e inspiração'},
    {value:'indefinido',icon:'🎯',label:'Ainda não escolhi',hint:'Preciso encontrar meu posicionamento'},
  ]},
  { id:'format', kicker:'COMO VOCÊ PRETENDE PRODUZIR', title:'Que tipo de conteúdo você consegue criar?', description:'Escolha a opção mais próxima da sua realidade.', tip:'Você não precisa aparecer. O método orienta a trabalhar com material próprio, licenciado ou com autorização.', options:[
    {value:'authorial',icon:'✍️',label:'Vídeos, textos ou narração próprios',hint:'Quero produzir com minha identidade'},
    {value:'licensed',icon:'🎬',label:'Mídias autorizadas ou licenciadas',hint:'Gosto de trabalhar com edição e montagem'},
    {value:'remix',icon:'♻️',label:'Remixes e colaborações permitidos',hint:'Quero transformar referências em algo novo'},
    {value:'learning',icon:'🛠️',label:'Ainda não sei como criar',hint:'Quero aprender um fluxo simples'},
  ]},
  { id:'obstacle', kicker:'O QUE ESTÁ TE IMPEDINDO?', title:'Qual é seu maior obstáculo hoje?', description:'Sua resposta ajuda a priorizar as primeiras ações.', tip:'Melhorar uma coisa por vez costuma ser mais útil do que mudar todo o perfil sem medir nada.', options:[
    {value:'ideas',icon:'🔎',label:'Não sei achar boas ideias',hint:'Tenho dificuldade de escolher temas'},
    {value:'editing',icon:'🎨',label:'Não sei editar vídeos que prendem',hint:'Preciso melhorar o começo e o ritmo'},
    {value:'consistency',icon:'📆',label:'Não consigo manter frequência',hint:'Falta um fluxo de produção organizado'},
    {value:'numbers',icon:'📊',label:'Posto, mas não entendo as métricas',hint:'Quero descobrir o que corrigir'},
  ]},
  { id:'time', kicker:'PLANO FEITO PARA SUA ROTINA', title:'Quanto tempo por dia você pode dedicar?', description:'Seu plano precisa caber na sua vida para ser executado de verdade.', tip:'Constância não significa publicar a qualquer custo. Qualidade e revisão também entram no plano.', options:[
    {value:'15',icon:'⏱️',label:'15 minutos',hint:'Quero algo enxuto e sustentável'},
    {value:'30',icon:'⌛',label:'30 minutos',hint:'Consigo separar um tempo todo dia'},
    {value:'60',icon:'🕐',label:'1 hora',hint:'Posso pesquisar, editar e publicar'},
    {value:'90',icon:'⚙️',label:'Mais de 1 hora',hint:'Quero levar o projeto bem a sério'},
  ]},
  { id:'frequency', kicker:'SEU HÁBITO ATUAL', title:'Quantas vezes você publica Reels?', description:'Pode responder “nunca” se estiver começando.', tip:'O plano final sugere uma frequência de teste, mas você pode adaptá-la ao seu processo.', options:[
    {value:'never',icon:'🌙',label:'Ainda não publiquei',hint:'Vou começar agora'},
    {value:'rare',icon:'🗓️',label:'1 a 2 vezes por semana',hint:'Quero aumentar sem perder qualidade'},
    {value:'some',icon:'📽️',label:'3 a 5 vezes por semana',hint:'Já tenho alguma constância'},
    {value:'daily',icon:'🔥',label:'Quase todos os dias',hint:'Preciso otimizar o que já faço'},
  ]},
  { id:'goal', kicker:'SUA META DO PRÓXIMO CICLO', title:'O que seria uma vitória para você nos próximos 30 dias?', description:'Pense no que você quer buscar, sem confundir objetivo com promessa de resultado.', tip:'Alcance, visitas, retenção e novos seguidores são métricas diferentes; vale acompanhar todas.', options:[
    {value:'first',icon:'🌱',label:'Conquistar meus primeiros seguidores',hint:'Criar base e ganhar confiança'},
    {value:'10k',icon:'📈',label:'Caminhar em direção a 10 mil',hint:'Melhorar alcance e conversão em seguidores'},
    {value:'100k',icon:'🏁',label:'Mirar os 100 mil seguidores',hint:'Quero trabalhar por uma meta ousada'},
    {value:'money',icon:'💸',label:'Preparar o perfil para monetizar',hint:'Criar uma audiência com interesse real'},
  ]},
  { id:'commitment', kicker:'ÚLTIMA PERGUNTA', title:'Você topa executar um plano por 30 dias?', description:'A ideia é criar um processo, registrar as métricas e fazer ajustes ao longo do caminho.', tip:'A garantia adicional de 30 dias depende de concluir as atividades previstas e guardar registros de execução.', options:[
    {value:'yes',icon:'💪',label:'Sim, vou aplicar o plano completo',hint:'Quero fazer os 30 dias com disciplina'},
    {value:'try',icon:'🧩',label:'Quero entender primeiro como funciona',hint:'Preciso avaliar o método e organizar meu tempo'},
  ]},
];

const LABELS = {
  stage:{zero:'Começando do zero',stopped:'Perfil parado',trying:'Postando sem crescer',growing:'Perfil em crescimento'},
  niche:{humor:'Humor',games:'Games',curiosidades:'Curiosidades',motivacao:'Motivação',indefinido:'Nicho a definir'},
  time:{'15':'15 min/dia','30':'30 min/dia','60':'1 hora/dia','90':'Mais de 1 hora/dia'},
  goal:{first:'Criar a base', '10k':'Rumo a 10 mil', '100k':'Meta de 100 mil',money:'Monetização futura'},
};

const memoryKey = 'gael_dark_100k_quiz_v1';
const state = {index:0,answers:{},insightSeen:false,screen:'landing'};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];


function saveState(){try{sessionStorage.setItem(memoryKey,JSON.stringify(state));}catch(e){/* storage optional */}}
function restoreState(){
  try {
    const saved = JSON.parse(sessionStorage.getItem(memoryKey)||'null');
    if(saved&&typeof saved.index==='number'&&saved.answers&&typeof saved.answers==='object'&&['landing','quiz','insight','loading','result'].includes(saved.screen)){
      state.index=Math.max(0,Math.min(QUESTIONS.length-1,saved.index));
      state.answers=saved.answers;
      state.insightSeen=!!saved.insightSeen;
      state.screen=saved.screen==='loading'?'result':saved.screen;
    }
  } catch(e) {}
}
function showScreen(viewName, shouldScroll=true){
  for(const n of ['landing','quiz','insight','loading','result']){
    const node=$(`#${n}-view`); if(node)node.classList.toggle('hidden',n!==viewName);
  }
  state.screen=viewName;
  const sticky=$('#mobile-offer-cta');
  sticky.classList.toggle('hidden',viewName!=='result');
  $('#header').classList.toggle('quiz-mode',viewName==='quiz');
  if(shouldScroll)window.scrollTo({top:0,behavior:'instant'});
  saveState();
}
function renderQuestion(){
  if(state.index===4&&!state.insightSeen){renderInsight();return;}
  const q=QUESTIONS[state.index];if(!q){finishQuiz();return;}
  $('#quiz-step-number').textContent=`PASSO ${String(state.index+1).padStart(2,'0')} DE ${String(QUESTIONS.length).padStart(2,'0')}`;
  const bar=$('#progress-track');bar.setAttribute('aria-valuenow',String(state.index));
  $('#progress-fill').style.width=`${(state.index/QUESTIONS.length)*100}%`;
  $('#question-kicker').textContent=q.kicker;
  $('#question-title').textContent=q.title;
  $('#question-description').textContent=q.description;
  $('#quiz-tip').textContent=`✦  ${q.tip}`;
  const holder=$('#question-options');holder.replaceChildren();
  for(const option of q.options){
    const button=document.createElement('button');button.type='button';button.className='answer-option';
    if(state.answers[q.id]===option.value)button.classList.add('selected');
    button.innerHTML=`<span class="answer-icon" aria-hidden="true">${option.icon}</span><span class="answer-copy"><strong>${option.label}</strong><small>${option.hint}</small></span><span class="answer-chevron" aria-hidden="true">›</span>`;
    button.addEventListener('click',()=>{
      state.answers[q.id]=option.value;
      $$('#question-options .answer-option').forEach(b=>b.disabled=true);
      button.classList.add('selected');
      saveState();
      setTimeout(()=>{
        if(state.index+1>=QUESTIONS.length){finishQuiz();return;}
        state.index++;
        renderQuestion();
      },240);
    });
    holder.append(button);
  }
  $('#quiz-back').disabled=state.index===0;
  showScreen('quiz');
  // Move focus to the current question for screen reader users.
  $('#question-title').setAttribute('tabindex','-1');
  $('#question-title').focus({preventScroll:true});
}
function renderInsight(){
  const niche=LABELS.niche[state.answers.niche]||'seu nicho';
  $('#insight-text').textContent=`Já temos um ponto de partida para ${niche.toLowerCase()}. O próximo passo é descobrir o que impede você de publicar e aprender com os resultados.`;
  showScreen('insight');
}
function startQuiz(){
  state.index=0;state.answers={};state.insightSeen=false;
  renderQuestion();
}
function resetQuiz(){
  state.index=0;state.answers={};state.insightSeen=false;
  showScreen('landing');window.scrollTo({top:0,behavior:'smooth'});
}
function previousQuestion(){
  if(state.index>0){state.index--;renderQuestion();}
  else showScreen('landing');
}
function finishQuiz(){
  $('#progress-fill').style.width='100%';
  showScreen('loading');
  const statuses=['Analisando seu ponto de partida','Definindo um ritmo de produção','Organizando suas próximas ações'];
  let step=0;const fill=$('#loading-progress');fill.style.width='0%';
  const timer=setInterval(()=>{step++;fill.style.width=`${Math.min(100,step*12)}%`;$('#loading-status').textContent=statuses[Math.min(2,Math.floor(step/3))];if(step>=9){clearInterval(timer);renderResult();}},170);
}
function getRecommendation(){
  const a=state.answers;
  const cadence=a.time==='15'?'Teste de 3 a 4 vídeos por semana':a.time==='30'?'Teste de até 5 vídeos por semana':a.time==='60'?'Teste de aproximadamente 1 vídeo por dia':'Teste de 1 a 2 vídeos por dia, se mantiver a qualidade';
  const focus={ideas:'comece pesquisando e organizando 15 referências que você possa adaptar de forma original',editing:'priorize um gancho direto nos primeiros segundos e cortes que façam sentido',consistency:'crie um lote de roteiros e reserve blocos de tempo para edição',numbers:'acompanhe retenção, compartilhamentos e visitas ao perfil para orientar o próximo teste'}[a.obstacle]||'use dados reais para orientar seus próximos testes';
  if(a.niche==='indefinido')return `Escolha e teste um nicho antes de ampliar a produção. ${cadence}. Depois, ${focus}.`;
  return `${cadence}. No seu nicho, ${focus}. Registre o que melhorar a cada semana.`;
}
function renderResult(){
  $('#result-status').textContent=LABELS.stage[state.answers.stage]||'Perfil em construção';
  $('#result-niche').textContent=LABELS.niche[state.answers.niche]||'A definir';
  $('#result-time').textContent=LABELS.time[state.answers.time]||'A definir';
  $('#result-focus').textContent=LABELS.goal[state.answers.goal]||'Construir audiência';
  $('#result-recommendation').textContent=getRecommendation();
  $('#result-lead').textContent=state.answers.commitment==='yes'
    ?'Você demonstrou disposição para seguir uma rotina de 30 dias. Veja a direção inicial e escolha se deseja o passo a passo completo.'
    :'Você tem um ponto de partida. Conheça um processo simples antes de decidir se faz sentido dedicar 30 dias à execução.';
  showScreen('result');
}
function initCheckout(){
  // Link direto para a plataforma de pagamento: sem pixels, eventos ou parâmetros de rastreamento.
  $$('[data-checkout]').forEach(link=>{
    link.setAttribute('href', CONFIG.checkoutUrl);
    link.setAttribute('rel', 'noopener noreferrer');
  });
}
function init(){
  restoreState();
  $('#year').textContent=String(new Date().getFullYear());
  $$('[data-start]').forEach(el=>el.addEventListener('click',startQuiz));
  $$('[data-reset]').forEach(el=>el.addEventListener('click',resetQuiz));
  $('#quiz-back').addEventListener('click',previousQuestion);
  $('#continue-insight').addEventListener('click',()=>{state.insightSeen=true;renderQuestion();});
  $('#brand-link').addEventListener('click',(ev)=>{ev.preventDefault();showScreen('landing');});
  initCheckout();
  if(state.screen==='quiz')renderQuestion();
  else if(state.screen==='insight')renderInsight();
  else if(state.screen==='result')renderResult();
  else showScreen('landing',false);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
