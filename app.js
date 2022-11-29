import { createWorker } from 'tesseract.js';

const worker = await createWorker({
  logger: m => console.log(m)
});

(async () => {
  await worker.loadLanguage('por');
  await worker.initialize('por');
  const { data: { text } } = await worker.recognize('https://lenscope.com.br/blog/wp-content/uploads/2018/11/exemplo-comum.jpg');
 
  console.log(text);
 
 
 
  await worker.terminate();
})();