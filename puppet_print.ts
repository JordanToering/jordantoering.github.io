import puppeteer from 'puppeteer';
import fs from 'node:fs';

const debug = false;

async function printPDF() {
	const browser = await puppeteer.launch({
		headless: !debug
	});
	const page = await browser.newPage();
	await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

	const pdf = await page.pdf({
		printBackground: true,
		scale: 0.78
	});

	if (!debug) {
		await browser.close();
	}

	return pdf;
}

printPDF().then((daPdf) => {
	try {
		fs.writeFileSync('./static/jt_resume.pdf', daPdf);
		console.log('Finished generating PDF.');
	} catch (error) {
		console.error(error);
	}
});
