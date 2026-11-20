// Menu responsivo: abre/fecha no celular e fecha após escolher uma seção.
var menuButton = document.querySelector(".menu-toggle");
var navMenu = document.getElementById("nav-links");

if (menuButton && navMenu) {
  menuButton.addEventListener("click", function () {
    var opened = navMenu.classList.toggle("open");
    menuButton.classList.toggle("active", opened);
    menuButton.setAttribute("aria-expanded", String(opened));
    menuButton.setAttribute("aria-label", opened ? "Fechar menu" : "Abrir menu");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      menuButton.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });
}

var GH="https://github.com/pedrohenriquenlins-prog";
var techs=[["Python","PY","Linguagem","Scripts, automação, lógica e análise de dados.","blue"],["HTML","HT","Web","Estrutura semântica de páginas e aplicações web.","cyan"],["CSS","CS","Web","Estilização, layouts responsivos e animações.","blue"],["JavaScript","JS","Web","Interatividade no navegador e lógica de front-end.","cyan"],["C","C","Linguagem","Fundamentos de memória, ponteiros e estruturas de dados.","blue"],["SQL","SQ","Banco de dados","Modelagem, consultas e manipulação de dados relacionais.","cyan"]];
var projs=[["Monitoramento de temperatura","Sistema para acompanhar e registrar leituras de temperatura em tempo real.",["Monitoramento","Sensores"],"https://github.com/pedrohenriquenlins-prog/Algoritmo-e-pensamento-computacional/tree/main/Monitoramento%20de%20temperatura"],["Chatbot especialista em receitas","Assistente conversacional que sugere e explica receitas culinárias.",["Chatbot","IA"],"https://github.com/pedrohenriquenlins-prog/Chatbot_especialista_em_receitas"],["CRUD de Fórmula 1","Aplicação de cadastro, consulta, edição e exclusão de dados da Fórmula 1.",["CRUD","SQL"],"https://github.com/pedrohenriquenlins-prog/Banco-de-Dados-F1-CRUD"]];
document.getElementById("techs").innerHTML=techs.map(function(t){var c="var(--"+t[4]+")";return '<article class="card"><div class="row"><span class="tg" style="color:'+c+'">'+t[1]+'</span><span class="pill">'+t[2]+'</span></div><h3>'+t[0]+'</h3><p>'+t[3]+'</p><div class="lv"><span>domínio</span><span>50%</span></div><div class="bar"><div style="background:'+c+'"></div></div></article>'}).join("");
document.getElementById("projs").innerHTML=projs.map(function(p,i){return '<a class="card" href="'+p[3]+'" target="_blank" rel="noreferrer"><div class="row"><span class="mono mut" style="font-size:.75rem">projeto_0'+(i+1)+'</span><span class="mut">↗</span></div><h3 style="margin-top:2rem">'+p[0]+'</h3><p>'+p[1]+'</p><div class="stack">'+p[2].map(function(s){return "<span>"+s+"</span>"}).join("")+'</div></a>'}).join("");
document.getElementById("y").textContent=new Date().getFullYear();

/* Solar system background */
var cv=document.getElementById("sky"),ctx=cv.getContext("2d"),W,H,DPR,stars=[];
var planets=[
{n:"Mercúrio",r:14,x:.78,c:["#d9d2c5","#8a8174"]},
{n:"Vênus",r:26,x:.18,c:["#f5d9a0","#b8863f"]},
{n:"Terra",r:30,x:.82,c:["#7fc4ff","#1f5fb0"]},
{n:"Marte",r:22,x:.15,c:["#ff9d6c","#a63e1c"]},
{n:"Júpiter",r:78,x:.8,c:["#f1d2a8","#a8744a"],bands:1},
{n:"Saturno",r:62,x:.14,c:["#f4e2b5","#b99a58"],ring:1},
{n:"Urano",r:40,x:.84,c:["#b8f1f5","#4fb0bd"]},
{n:"Netuno",r:38,x:.16,c:["#7ea2ff","#2a45b8"]}];
function size(){DPR=Math.min(window.devicePixelRatio||1,2);W=innerWidth;H=innerHeight;cv.width=W*DPR;cv.height=H*DPR;ctx.setTransform(DPR,0,0,DPR,0,0);
stars=[];for(var i=0;i<160;i++)stars.push([Math.random(),Math.random(),Math.random()*1.4+.3,Math.random()*6.28])}
function ball(x,y,r,c,bands){var g=ctx.createRadialGradient(x-r*.35,y-r*.35,r*.1,x,y,r);g.addColorStop(0,c[0]);g.addColorStop(1,c[1]);ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fill();
if(bands){ctx.save();ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.clip();ctx.fillStyle="rgba(120,70,40,.25)";for(var k=-3;k<=3;k+=2)ctx.fillRect(x-r,y+k*r*.22-r*.07,r*2,r*.14);ctx.restore()}
var s=ctx.createRadialGradient(x+r*.5,y+r*.4,r*.2,x,y,r*1.05);s.addColorStop(0,"rgba(0,0,0,0)");s.addColorStop(1,"rgba(0,0,10,.55)");ctx.fillStyle=s;ctx.beginPath();ctx.arc(x,y,r,0,6.2832);ctx.fill()}
function draw(t){
var max=Math.max(1,document.documentElement.scrollHeight-H),p=Math.min(1,Math.max(0,scrollY/max));
ctx.clearRect(0,0,W,H);
var bg=ctx.createLinearGradient(0,0,0,H);bg.addColorStop(0,"#050816");bg.addColorStop(1,"#0a0f2a");ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
stars.forEach(function(s){var a=.4+.6*Math.abs(Math.sin(t/1500+s[3]));ctx.fillStyle="rgba(200,220,255,"+a*.8+")";var y=((s[1]*H-p*H*.15)%H+H)%H;ctx.fillRect(s[0]*W,y,s[2],s[2])});
var k=Math.min(1,W/900)*.8+.35;
/* Sun */
var sy=H*.45-p*H*2.2,sr=Math.max(W,H)*.32*k;
var sg=ctx.createRadialGradient(-sr*.1,sy,sr*.2,-sr*.1,sy,sr*1.9);sg.addColorStop(0,"rgba(255,200,80,.5)");sg.addColorStop(1,"rgba(255,140,0,0)");ctx.fillStyle=sg;ctx.fillRect(0,sy-sr*2,sr*2.2,sr*4);
var sb=ctx.createRadialGradient(-sr*.1,sy,0,-sr*.1,sy,sr);sb.addColorStop(0,"#fff6c8");sb.addColorStop(.6,"#ffc23a");sb.addColorStop(1,"#ff8a1f");ctx.fillStyle=sb;ctx.beginPath();ctx.arc(-sr*.1,sy,sr,0,6.2832);ctx.fill();
/* Planets pass as you scroll */
planets.forEach(function(pl,i){
var y=H*(.95+i*1.05)-p*H*(planets.length*1.05+.3),r=pl.r*k,x=pl.x*W;
if(y<-r*3||y>H+r*3)return;
ctx.globalAlpha=.9;
if(pl.ring){ctx.save();ctx.translate(x,y);ctx.rotate(-.35);ctx.strokeStyle="rgba(230,205,150,.55)";ctx.lineWidth=r*.28;ctx.beginPath();ctx.ellipse(0,0,r*2,r*.6,0,Math.PI,6.2832);ctx.stroke();ctx.restore()}
ball(x,y,r,pl.c,pl.bands);
if(pl.ring){ctx.save();ctx.translate(x,y);ctx.rotate(-.35);ctx.strokeStyle="rgba(230,205,150,.7)";ctx.lineWidth=r*.28;ctx.beginPath();ctx.ellipse(0,0,r*2,r*.6,0,0,Math.PI);ctx.stroke();ctx.restore()}
ctx.globalAlpha=.55;ctx.fillStyle="#9aa7cc";ctx.font="11px ui-monospace,Menlo,monospace";ctx.textAlign="center";ctx.fillText(pl.n.toLowerCase(),x,y+r*(pl.ring?2:1)+18);ctx.globalAlpha=1});
requestAnimationFrame(draw)}
size();addEventListener("resize",size);requestAnimationFrame(draw);
