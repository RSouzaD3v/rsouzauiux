const fs = require('fs');
const path = require('path');

// Diretório de origem dos componentes no pacote
const sourceDir = path.resolve(__dirname, 'src/components'); // Ajuste conforme necessário

// Diretório de destino fora de `node_modules` (pasta do projeto do usuário)
const targetDir = path.resolve(__dirname, '../../components/ui'); // Ajuste conforme necessário

function copyFiles(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  fs.readdirSync(source).forEach(file => {
    const sourceFile = path.join(source, file);
    const targetFile = path.join(target, file);

    if (fs.lstatSync(sourceFile).isDirectory()) {
      copyFiles(sourceFile, targetFile);
    } else {
      fs.copyFileSync(sourceFile, targetFile);
      console.log(`Copied: ${sourceFile} to ${targetFile}`);
    }
  });
}

copyFiles(sourceDir, targetDir);
