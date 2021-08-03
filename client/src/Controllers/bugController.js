import bugModel from '../Models/bugModel';

export function retrieveBugs(){
    let data = [];
    data.push(new bugModel({
        _id: 12345,
        name: "Crash on Load",
        details: "Crashes after 3 seconds",
        steps: "Open application and it will crash",
        version: "V2.1",
        assinged: "MPAW",
        creator: "Iron Man",
        priority: 1,
        time: "23:38",
    }))
    data.push(new bugModel({
        _id: 12346,
        name: "Partial Load",
        details: "The page fails to display all of the contents",
        steps: "While logged in, attempt to refresh the page",
        version: "V2.1",
        assinged: "MPAW",
        creator: "Green Lantern",
        priority: 3,
        time: "23:38",
    }))
    data.push(new bugModel({
        _id: 12347,
        name: "Can't update profile",
        details: "The update profile feature isn't working",
        steps: "On a standard user account attempt to update the profile information",
        version: "V2.1",
        assinged: "MPAW",
        creator: "Tony Stark",
        priority: 3,
        time: "23:38",
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority});

    return sorted;

}