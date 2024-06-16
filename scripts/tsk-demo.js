const fs = require('fs');

function getRandomTask() {
    const tasks = [
        "checar mensagens",
        "entrar na videochamada",
        "Revisar pull requests",
        "atualizar documentação",
        "Code review",
        "Testar nova feature",
        "consertar bugs",
        "Deploy application"
    ];

    // Shuffle tasks to get a random task list each hour
    for (let i = tasks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }

    return tasks;
}

function runHourlyTask() {
    const timestamp = new Date().toISOString();
    const taskList = getRandomTask();
    const message = `Tasks for ${timestamp}:\n${taskList.join('\n')}\n\n`;

    // Append the message to a log file
    fs.appendFileSync('hourly-task.log', message, (err) => {
        if (err) throw err;
    });

    console.log(message);
}

runHourlyTask();