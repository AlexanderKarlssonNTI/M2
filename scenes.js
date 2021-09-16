let scenes = {

    start: {
        info: "The world you live in is in a very bad state. Governments the world over are controlled by corporations, and the only thing they care about is profit. They pollute the air, oceans and atmosphere, and have destroyed ecosystems the world over. The working conditions are just awful, with extremely long hours and you just earn barely more than enough for you to live by while also buying enough to keep their profits high and having very little freetime. The world has been ruined so much that in only a few decades the planet will become uninhabitable. There seems there’s a resistance group that fights against them.\n\nBut you don’t really care about any of this. You have too much to deal with right now. After a grueling day of work you just want to relax at your home in a run down apartment building. But when you open the door to your apartment you find what looks like a small envelope lying on the ground. Your first thoughts are “A letter? In this day and age? It has been a while since I’ve seen one of these”. But what’s it doing here?",
        selections: [
            {
                text: "Pick up the envelope",
                action: {
                    type: "move forward",
                    target: "letter_pickup"
                }
            }
        ]
    },
    letter_pickup: {
        info: "The envelope is very small, smaller than any old letter but due to it being thicker it seems like it has alot of contents in it. There's a note attached which reads “If you want to make a change to the world, go to the address on the back of this note. Be sure to not open it. A reward will be awarded to you if you succeed”. You carefully remove the note and turn it around to see both an address and picture. It’s far away from your home, somewhere in the abandoned parts of town, and it would take some time to get there. But then you’re likely to miss work for a few days, and it’ll likely mean you’ll be fired. You ponder for a moment.",
        selections: [
            {
                text: "Don't follow the instructions",
                action: {
                    type: "move forward",
                    target: "Dont_follow"
                }
            }
        ]
    },
    Dont_follow: {
        info: "You don’t have the time to listen to what some random note attached to a stupid envelope comming from who knows says. And with being a few days of work will likely risk your job, you can’t have that. You lay the letter on a table and just lie on your couch and rest. A few hours later you hear police sirens. You don’t think anything of it, after all you’ve heard it loads of times before; until you hear a knock on your door. You wonder who it is so you hide the letter and walk to the door. There you see two police officers. “Oh crap! Why are they here?” you think. They ask you if you’ve seen/heard of any suspicious activities. You answer that you haven’t. One thing that stands out is that they ask you if you’ve received or seen any strange letters or envelopes recently. You remember the envelope. You look down a bit, as if thinking.",
        selections: [
            {
                text: "Tell the police",
                action: {
                    type: "bad end",
                    message: "You tell them about the letter you got today. They both look at you with interest and ask to see it. You go in, take it and give it to them. They thank you for helping and leave. The next day you hear you’re getting promoted. You’re a bit surprised as you weren’t the most qualified for a promotion but you took it. Your life has improved since then, but the world’s beyond saving at this point so you’ll live the best life you’ve ever had until the end of the world."
                }
            },
            {
                text: "Don't tell the police",
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