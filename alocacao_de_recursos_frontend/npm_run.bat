::download npm at: https://brpucrs-my.sharepoint.com/personal/alexei_abianna_edu_pucrs_br/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Falexei%5Fabianna%5Fedu%5Fpucrs%5Fbr%2FDocuments%2Fenvironment%2Djava%2Dwindows%2Fnode%2Dv18%2E12%2E0%2Dwin%2Dx64%2Ezip&parent=%2Fpersonal%2Falexei%5Fabianna%5Fedu%5Fpucrs%5Fbr%2FDocuments%2Fenvironment%2Djava%2Dwindows&ga=1
REM npm_run.bat

::set this path at line 6 to where node is downloaded
SET PATH=C:\NPM\node-v18.12.0-win-x64;%PATH%

::uncomment line 9 for the first run only
::npm install %* && npm run build %* && 
npm start %*