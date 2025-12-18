const fs = require('fs');
const pdf = require('pdf-parse');

async function main() {
  const file = process.argv[2];
  if (!file) {
    console.error('Usage: node scripts/read-pdf.js <path-to-pdf>');
    process.exit(1);
  }
  try {
    const dataBuffer = fs.readFileSync(file);
    const data = await pdf(dataBuffer);
    console.log(data.text);
  } catch (err) {
    console.error('Failed to read PDF:', err.message);
    process.exit(1);
  }
}

main();

