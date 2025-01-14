const { spawn } = require('child_process');
const fs = require('fs');

// Ruta del archivo donde se guardará la salida
const outputFilePath = './cypress_parallel_output.txt';

// Crear un flujo de escritura para el archivo
const outputStream = fs.createWriteStream(outputFilePath, { flags: 'w' });

// Ejecutar el comando npm run cy:parallel a través de un subproceso
const npmCommand = spawn('npm', ['run', 'cy:parallel', '--', '--no-color'], { shell: true });

// Capturar y escribir la salida estándar (stdout)
npmCommand.stdout.on('data', (data) => {
  console.log(data.toString()); // Mostrar en consola
  outputStream.write(data); // Guardar en el archivo
});

// Capturar y escribir la salida de error estándar (stderr)
npmCommand.stderr.on('data', (data) => {
  console.error(data.toString()); // Mostrar errores en consola
  outputStream.write(data); // Guardar errores en el archivo
});

// Manejar el cierre del proceso
npmCommand.on('close', (code) => {
  console.log(`El comando finalizó con código: ${code}`);
  outputStream.end(); // Cerrar el flujo de escritura
});
