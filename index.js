import inquirer from "inquirer";
import fs from 'fs';
import qr from 'qr-image';

import { input } from '@inquirer/prompts';
const answer = await input({ message: 'Enter your URL' });

let qr_svg = qr.image(answer, { type: 'svg' });
qr_svg.pipe(fs.createWriteStream(answer + '.svg'));
 
fs.writeFile("URL.txt", answer ,(err)=>
{
    if (err) throw err;
})





