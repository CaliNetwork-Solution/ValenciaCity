import { clear } from 'console';
import chalk from 'chalk';
import figlet from 'figlet';

//print banner
console.log(
    chalk.bold(
        figlet.textSync('ValenciaCity', { horizontalLayout: 'full' })
    ),
    chalk.bold(
        '\nA high performance system statistics solution'
    )
);
//ready to serve
