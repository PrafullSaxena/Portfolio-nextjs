import {Education, Profile, Projects} from "@data/AppConstent";
import {howLongAgoString} from "@/utils/DateUtils";
import {Command} from "@/data/Types"


function getSocials() {

    let resp = "";

    Profile.socials.forEach((s) => {
        if (s.isVisibile) {
            resp += s.name + ' - ' + s.url + '\n';
        }
    });

    return resp;
}


function getHelp() {

    let response = "";

    for (const [key, value] of Object.entries(Commands)) {
        response += key + ' - ' + value.desc + '\n';
    }

    return response;

}

function getEducation() {
    const edu = Education;
    let response = "";
    edu.forEach((e) => {
        response += '' +
            e.title + ' in ' + e.specialisation + ' from ' + e.institute + '\n' +
            '';
    });
    return response;
}

function getProjects() {
    let response = "";
    Projects.forEach((p) => {
        response += '' +
            p.title + ' - ' + p.description + '\n' +
            '';
    });
    return response;
}

function getGreetings() {
    return {
        response: "Hey there! How can I help you?",
        desc: "Greet the user"
    }
}

const Greetings = ["hey", "hello", "sup"];

const Commands : Record<string, Command> = {
    "ls": {
        response: ". ..",
        desc: "List directory contents"
    },
    "name": {
        response: Profile.name,
        desc: "Print name"
    },
    "experience": {
        response: howLongAgoString(Profile.workingSince),
        desc: "Print years of experience"
    },
    "projects": {
        response: getProjects(),
        desc: "List all the projects"
    },
    "education": {
        response: getEducation(),
        desc: "Show my education"
    },
    "social": {
        response: getSocials(),
        desc: "Show all social accounts"
    },
}


export function getResponse(command: string){
    if (command.toLowerCase() === "help") {
        return getHelp();
    }

    if (Greetings.filter(c => c === command.toLowerCase()).length >= 1) {
        return getGreetings().response;
    }

    const resp = Commands[command.toLowerCase()];

    if (resp === undefined) {
        return `Command not found: "${command}", Try 'help' to see all commands`;
    }

    return resp.response;
}
