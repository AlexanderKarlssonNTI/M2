let scenes = {

    start: {
        info: "The world you live in is in a very bad state. Governments the world over are controlled by corporations, and the only thing they care about is profit. They pollute the air, oceans and atmosphere, and have destroyed ecosystems the world over. The working conditions are just awful, with extremely long hours and you just earn barely more than enough for you to live by while also buying enough to keep their profits high and having very little freetime. The world has been ruined so much that in only a few decades the planet will become uninhabitable. There seems there’s a resistance group that fights against them.\n\nBut you don’t really care about any of this. You have too much to deal with right now. After a grueling day of work you just want to relax at your home in a run down apartment building. But when you open the door to your apartment you find what looks like a small envelope lying on the ground. Your first thoughts are “A letter? In this day and age? It has been a while since I’ve seen one of these”. But what’s it doing here?",
        selections: [
            {
                text: "Pick up the letter",
                action: {
                    type: "move forward",
                    target: "letter_pickup"
                }
            }
        ]
    },
    letter_pickup: {
        info: "The letter is very small, smaller than any old letter but due to it being thicker it seems like it has alot of contents in it. There's a note attached which reads “If you want to make a change to the world, go to the address on the back of this note. Be sure to not open it. A reward will be awarded to you if you succeed”. You carefully remove the note and turn it around to see both an address and picture. It’s far away from your home, somewhere in the abandoned parts of town, and it would take some time to get there. But then you’re likely to miss work for a few days, and it’ll likely mean you’ll be fired. You ponder for a moment.",
        selections: [
            {
                text: "Entrance 1",
                action: {
                    type: "move forward",
                    target: "utility_room"
                }
            },
            {
                text: "Entrance 2",
                action: {
                    type: "move forward",
                    target: "hallway",
                }
            }
        ]
    },
    utility_room: {
        info: "The utility room has 1 wardrobe and one door. What to do?",
        selections: [
            {
                text: "Open wardrobe 1",
                action: {
                    type: "collect",
                }
            },
            {
                text: "Open door",
                action: {
                    type: "move forward",
                    target: "kitchen"
                }
            }
        ]
    },
    kitchen: {
        info: "You are in the kitchen. What to do?",
        selections: [
            {
                text: "Open fridge",
                action: {
                    type: "bad end",
                    message: "A 12 week old cheese smells like someone died..."
                }
            },
            {
                text: "Enter the hallway",
                action: {
                    type: "move forward",
                    target: "hallway"
                }
            }
        ]
    },
    hallway: {
        info: "You are in the hallway, which contains 2 standard doors. What to do?",
        selections: [
            {
                text: "Open door 1",
                action: {
                    type: "bad end",
                    message: "Your little brother just puked in here!"
                }
            },
            {
                text: "Open door 2",
                action: {
                    type: "good end",
                    message: "Congratulations, you are in the livingroom and reached the end!"
                }
            },
        ]
    }
};