const posts = {
	"#feito-perfeito": {
		title: "Feito ou perfeito?",
		cover: "assets/img/demopic/1.jpg",
		shortText: "Ei, quanto de você já se perdeu tentando fazer algo perfeito?",
		fullText: `
			<p>Ei, quanto de você já se perdeu tentando fazer algo perfeito?</p>
			<p>Às vezes, estamos tão empenhados em busca do momento perfeito, da pessoa perfeita, da ocasião perfeita, da ideia perfeita, do trabalho perfeito, do salário perfeito que esquecemos que é necessário COMEÇAR e VIVER o hoje.</p>
			<p>Essa perfeição que você está procurando existe mesmo ou ela é o obstáculo que você mesmo criou entre você e sua realização?</p>
			<p>Pense sobre isso e comece hoje o que precisa ser FEITO.</p>
			<p>Não tem problema se não sair perfeito agora, você vai aprender ao longo do caminho, não se preocupe.</p>
			<p>Esteja disposto a aprender, mesmo que algumas vezes tenha que aprender após errar. Acontece com todo mundo.</p>

		`,
	},
	"#ansiedade-inimiga": {
		title: "Quando a ansiedade se torna inimiga?",
		cover: "assets/img/demopic/2.jpg",
		shortText: 'Você já deve ter ouvido um ditado que diz: "Até remédio demais se torna veneno."',
		fullText: `
			<p>Você já deve ter ouvido um ditado que diz: "Até remédio demais se torna veneno."</p>
			<p>Podemos usar o mesmo princípio para a ansiedade. Se trata de algo que foi criado para o nosso benefício, mas em níveis elevados podem nos fazer muito mal.</p>
			<p>Então, o primeiro passo para saber se sua ansiedade não está exercendo a função correta é identificar como ela  tem surgindo em suas situações cotidianas.</p>
			<p>Se sua ansiedade te causa sofrimento significativo e te prejudica na sua vida pessoal, social e profissional...</p>
			<p>OPS! Alerta de nível alto!</p>
			<p>Se sua ansiedade vem acompanhada de medo excessivo e te impede de realizar atividades simples...</p>
			<p>OPS! Alerta de nível alto!</p>
			<p>Nesse caso, não estamos mais falando apenas de uma emoção. Estamos falando de um Transtorno de Ansiedade.</p>
			<p>Mas, calma! Se você identificou esse nível de ansiedade, você já deu o primeiro passo para reverter a situação.</p>
		  	<p>Lembre-se a ansiedade faz parte das reações naturais do seu corpo, agora ela precisa voltar a te beneficiar.</p>
		`,
	},
	"#ansiedade-amiga": {
		title: "E se eu te falar que a ansiedade pode ser sua amiga?",
		cover: "assets/img/demopic/3.jpg",
		shortText:
			"Calma, vou te explicar. Não se trata de romantizar um problema, mas entender como a ansiedade funciona...",
		fullText: `
			<p>Calma, vou te explicar.</p>
			<p>Não se trata de romantizar um problema, mas entender como a ansiedade funciona.</p>
			<p>O corpo humano é extremamente inteligente e ao longo da nossa evolução fomos criando mecanismo para nós ajudar com a adaptação e sobrevivência.</p>
			<p>As nossas emoções são um desses mecanismos, e a ansiedade faz parte disso assim como a alegria, a tristeza, a raiva...</p>
			<p>Então, antes de nos prejudicar, a ansiedade surgiu para o nosso benefício.</p>
			<p>O que eu quero te dizer é: O problema não é ficar ansioso, porque isso apenas significa que seu corpo está reagindo diante de situações que você percebeu como perigo.</p>
			<p> O problema acontece mesmo quando o nível de ansiedade se expande ao ponto de paralisar e te impede de fazer algo.</p>
		`,
	},
	"#ansiedade-mente": {
		title: "Sua ansiedade está mentindo pra você!",
		cover: "assets/img/demopic/4.jpg",
		fullText: `
			<p>Já se sentiu paralisada (o) em alguma situação por causa da ansiedade?</p>
			<p>E se eu te disser que a ansiedade está mentindo pra você esse tempo todo?</p>
			<p>Sabe aquela ideia de que não vai conseguir, antes mesmo de tentar algo novo? Sabe o medo de errar e ser julgado?</p>
			<p>Já parou pra pensar que essas sensações/emoções são apenas alertas naturais do corpo?</p>
			<p>A temida ANSIEDADE é um fator de regulação que nosso corpo usa para nos proteger de ameaças, mas quando ela nos paralisa, nos impede de realizar atividades do nosso cotidiano, isso significa que ela tomou proporções que não são saudáveis.</p>
			<p>Nesse momento, precisamos identificar o que é real na situação que nos causa medo e identificar a melhor forma de lidar com ela.</p>
		`,
	},
};

const path = window.location.hash;

const titleElement = document.getElementById("title");

titleElement.innerText = posts[path].title;

const coverElement = document.getElementById("cover");

coverElement.src = posts[path].cover;

const textElement = document.getElementById("text");

textElement.innerHTML = posts[path].fullText;
