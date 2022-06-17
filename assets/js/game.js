console.log('[Vitor Barroso] - Angel Bird');

// [Criando/indicando uma sprite]
const sprites = new Image();
sprites.src = '../assets/images/sprites.png';

// [Preparando canva]
const gameCanvas = document.querySelector('canvas#game-canvas');
const context = gameCanvas.getContext('2d');

// [Função do chão]
const floor = {
    spriteX: 0,
    spriteY: 610,
    width: 224,
    height: 112,
    positionX: 0,
    positionY: (gameCanvas.height - 112),
    drawMe() {
        context.drawImage(
            sprites,
            floor.spriteX, floor.spriteY, // Sprite x, Sprite y
            floor.width, floor.height, // Width e Height de corte na sprite
            floor.positionX, floor.positionY, // Posicionamento x, Posicionamento y do recorte dentro do Canva
            (floor.width), (floor.height) // Tamanho da imagem no Canva
        );
        
        context.drawImage(
            sprites,
            floor.spriteX, floor.spriteY, // Sprite x, Sprite y
            floor.width, floor.height, // Width e Height de corte na sprite
            (floor.positionX + floor.width), floor.positionY, // Posicionamento x, Posicionamento y do recorte dentro do Canva
            (floor.width), (floor.height) // Tamanho da imagem no Canva
        );
    }
}

// [Função do plano de fundo]
const background = {
    spriteX: 390,
    spriteY: 0,
    width: 275,
    height: 204,
    positionX: 0,
    positionY: (gameCanvas.height - 204),
    drawMe() {
        context.fillStyle = '#82BFD0';
        context.fillRect(0,0, gameCanvas.width, gameCanvas.height);
    
        context.drawImage(
            sprites,
            background.spriteX, background.spriteY, // Sprite x, Sprite y
            background.width, background.height, // Width e Height de corte na sprite
            background.positionX, background.positionY, // Posicionamento x, Posicionamento y do recorte dentro do Canva
            background.width, (background.height) // Tamanho da imagem no Canva
        );
        
        context.drawImage(
            sprites,
            background.spriteX, background.spriteY, // Sprite x, Sprite y
            background.width, background.height, // Width e Height de corte na sprite
            (background.positionX + background.width), background.positionY, // Posicionamento x, Posicionamento y do recorte dentro do Canva
            (background.width), (background.height) // Tamanho da imagem no Canva
        );
    }
}

// [Função do Flappy]
const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    positionX: 10,
    positionY: 50,
    drawMe() {
        context.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, // Sprite x, Sprite y
            flappyBird.width, flappyBird.height, // Width e Height de corte na sprite
            flappyBird.positionX, flappyBird.positionY, // Posicionamento x, Posicionamento y do recorte dentro do Canva
            (flappyBird.width * 1.5), (flappyBird.height * 1.5) // Tamanho da imagem no Canva
        );
    }
};

// [Loop que gera as informações a cada FPS]
function loop() {
    // Desenhando o cenário
    background.drawMe();
    floor.drawMe();
    flappyBird.drawMe();
    
    // Fazendo o Flappy cair
    flappyBird.positionY += 1;
    
    requestAnimationFrame(loop);
}

loop();