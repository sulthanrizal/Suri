const fs = require("fs")
const data = fs.readFileSync("todo.json", "utf-8")
const quest = JSON.parse(data)

let counter = quest.length + 1
let count = process.argv[3]
let input = count - 1

if (!process.argv[2] || process.argv[2] === "help") {
    console.log(
        ">>> TODO LIST <<< \n",
        "$ node c13.js <command> \n",
        "$ node c13.js list \n",
        "$ node c13.js task <task_id> \n",
        "$ node c13.js add <task_content> \n",
        "$ node c13.js delete <task_id> \n",
        "$ node c13.js complete <task_id> \n",
        "$ node c13.js uncomplete <task_id> \n",
        "$ node c13.js list:outstanding asc|desc \n",
        "$ node c13.js list:completed asc|desc \n",
        "$ node c13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N> \n",
        "$ node c13.js filter:<tag_name>"
    )
}
else if (process.argv[2] === "list") {
    console.log("Jadwal Makan:")
    for (let i = 0; i < quest.length; i++) {
        console.log(
            `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content}.`
        );
    }
} else if (process.argv[2] === "task") {
    console.log("Jadwal Makan:")
    for (let x in quest[input]) {
        console.log(`${x}: ${quest[count - 1][x]}`)
    }
}
else if (process.argv[2] === "add") {
    console.log("Jadwal Makan:")
    quest.push({
        id: counter,
        content: process.argv.slice(3).join(" "),
        complete: false,
        tag: [],
    });
    fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
    console.log(`${process.argv.slice(3).join(" ")} status telah ditambahkan`);
} else if (process.argv[2] === "delete") {
    console.log("Jadwal Makan:")
    console.log(`${quest[input].content} telah di hapus dari daftar`)
    quest.splice(input, 1)
    for (let i = 0; i < quest.length; i++) quest[i].id = i + 1;
    fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
} else if (process.argv[2] === "complete") {
    console.log("Jadwal Makan:")
    quest[process.argv[3] - 1].complete = true;
    console.log(`${quest[process.argv[3] - 1].content} telah di complete`);
    fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
} else if (process.argv[2] === "uncomplete") {
    console.log("Jadwal Makan:")
    quest[process.argv[3] - 1].complete = false;
    console.log(`${quest[process.argv[3] - 1].content} telah dibatalkan`);
    fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");
} else if (process.argv[2] === "list:outstanding") {
    console.log("Jadwal Makan:")
    if (process.argv[3] === "asc") {

        for (let i = 0; i < quest.length; i++) {
            if (quest[i].complete === false) {
                console.log(
                    `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content
                    }.`
                );
            }
        }
    } else if (process.argv[3] === "desc") {

        for (let i = quest.length - 1; i >= 0; i--) {
            if (quest[i].complete === false) {
                console.log(
                    `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content
                    }.`
                );
            }
        }
    }
} else if (process.argv[2] === "list:completed") {
    console.log("Jadwal Makan:")
    if (process.argv[3] === "asc") {

        for (let i = 0; i < quest.length; i++) {
            if (quest[i].complete === true) {
                console.log(
                    `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content
                    }.`
                );
            }
        }
    } else if (process.argv[3] === "desc") {

        for (let i = quest.length - 1; i >= 0; i--) {
            if (quest[i].complete === true) {
                console.log(
                    `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content
                    }.`
                );
            }
        }
    }
} else if (process.argv[2] === "tag") {
    console.log("Jadwal Makan:")
    console.log(`"Tag ${process.argv.slice(4)}" telah ditambahkan ke dalam '${quest[quest.findIndex(x => x.id == count)].content} `);
    const tags = process.argv.slice(4)
    tags.forEach((tagging) => {
        if (!quest[input].tag.includes(tagging)) {
            quest[input].tag.push(tagging)
        }
    })

    fs.writeFileSync("todo.json", JSON.stringify(quest), "utf-8");

} else if (process.argv[2] === `filter:${process.argv[2].slice(7)}`) {
    console.log("Jadwal Makan:")
    for (let i = 0; i < quest.length; i++) {
        if (quest[i].tag.includes(process.argv[2].slice(7))) {
            console.log(
                `${quest[i].id}. [${quest[i].complete ? "x" : " "}] ${quest[i].content
                }.`
            );
        }
    }

}