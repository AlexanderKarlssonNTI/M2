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
        ],
        backgroundImage: "./img/backgroundImage.jpg"
    },
    letter_pickup: {
        info: "The envelope is very small, smaller than any old envelopes, but due to it being thicker it seems like it has alot of contents in it. It's also has a seal over it. There's a note attached which reads “If you want to make a change to the world, go to the address on the back of this note. Be sure to not open it. A reward will be awarded to you if you succeed”. You carefully remove the note and turn it around to see both an address and picture. It’s far away from your home, somewhere in the abandoned parts of town, and it would take some time to get there. But then you’re likely to miss work for a few days, and it’ll likely mean you’ll be fired. You ponder for a moment.",
        selections: [
            {
                text: "Don't follow the instructions",
                action: {
                    type: "move forward",
                    target: "Dont_follow"
                }
            }
        ],
        backgroundImage: "./img/cat.jpg"
    },
    Dont_follow: {
        info: "You don’t have the time to listen to what some random note attached to a stupid envelope comming from who knows says. And with being a few days of work will likely risk your job, you can’t have that. You lay the letter on a table and just lie on your couch and rest. A few hours later you hear police sirens. You don’t think anything of it, after all you’ve heard it loads of times before; until you hear a knock on your door. You wonder who it is so you hide the letter and walk to the door. There you see two police officers. “Oh crap! Why are they here?” you think. They ask you if you’ve seen/heard of any suspicious activities. You answer that you haven’t. One thing that stands out is that they ask you if you’ve received or seen any strange letters or envelopes recently. You remember the envelope. You look down a bit, as if thinking.",
        selections: [
            {
                text: "Don't tell the police",
                action: {
                    type: "move forward",
                    target: "Dont_tell"
                }
            },
            {
                text: "Tell the police",
                action: {
                    type: "bad end",
                    message: "You tell them about the letter you got today. They both look at you with interest and ask to see it. You go in, take it and give it to them. They thank you for helping and leave. The next day you hear you’re getting promoted. You’re a bit surprised as you weren’t the most qualified for a promotion but you took it. Your life has improved since then, but the world’s beyond saving at this point so you’ll live the best life you’ve ever had until the end of the world."
                }
            },

        ]
    },
    Dont_tell: {
        info: "You tell them that you haven’t. The officers look at each other and sigh. They thank you for giving them some of your time and leave. You’ve done it now. Lying to the police is something that can get you in trouble for, so if you stay and they find out you’re screwed. You look at the letter. If you’re going to get in trouble, why not do it on your terms. You grab a backpack and pack it with some food, snacks, water and some clothes. You grab your wallet, keys and letter and put them in your jacket. You also grab an old baton you have, because the streets can be very dangerous. Just before leaving you look at your apartment one last time and say goodbye to it. You then close and lock the door. Now you could take the train then a bus before going the rest on foot, which wouldn’t take that long but you would be more likely to run in with the police. You could go on foot for most if not the entire way which would decrease the chances of running into the police but it would take longer.",
        selections: [
            {
                text: "Go on foot",
                action: {
                    type: "move forward",
                    target: "on_foot1"
                }
            },
            {
                text: "Take the train",
                action: {
                    type: "move forward",
                    target: "take_train"
                }
            }
        ]
    },
    take_train: {
        info: "You decide to go by train as far as you can go. So you go to the train station, buy yourself a ticket and get on a train. You take out the envelope and look at it wondering what’s inside. When you get off you see police at the exit and they’re body searching everybody coming through. You notice you forgot to put the envelope back. Starting to get nervous you quickly decide to hide it.",
        selections: [
            {
                text: "Hide in jacket",
                action: {
                    type: "bad end",
                    message: "You put the envelope in your jacket pocket. When they start body searching you it seems to be going well until the officer feels the envelope and takes it out. Your heart sinks. They lead you to be questioned. While they say that it won’t take a while, you know you aren’t going to be leaving at all."
                }
            },
            {
                text: "Hide in backpack",
                action: {
                    type: "move forward",
                    target: "hide_backpack"
                }
            }
        ]
    },
    on_foot1: {
        info: "You are on foot",
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
                    type: "move forward",
                    target: "choiceA"
                }
            }
        ]
    },
    hide_backpack: {
        info: "You take off your backpack and put the envelope in it. It’s nerve racking when they search you, but when the officer motions for the next person in line you breathe a sigh of relief. When you exit the train station you notice a bus stop. You wonder to take a bus or go the rest of the way on foot.",
        selections: [
            {
                text: "Take the buss",
                action: {
                    type: "move forward",
                    target: "take_bus"
                }
            },
            {
                text: "Go on foot",
                action: {
                    type: "move forward",
                    target: "on_foot2"
                }
            }
        ]
    },
    take_bus: {
        info: "You get onto the bus. During the busride the bus stops. The busdriver goes on to check and then announces that the engine stopped working and it would take a few minutes to fix. While they fix the engine you see a few cops in the distance. They look like they're going to search the buss for toublemakers. You could go off now but you will have to go the rest of the way, or you could risk it by staying.",
        selections: [
            {
                text: "Stay",
                action: {
                    type: "bad end",
                    message: "They search you and find the envelope"
                }
            },
            {
                text: "leave",
                action: {
                    type: "move forward",
                    target: "leave"
                }
            }
        ]
    },
    leave: {
        info: "You decide not to risk it and get off. While you're walking you notice someone calling for help. You wonder wether to help or not.",
        selections: [
            {
                text: "Don't help",
                action: {
                    type: "move forward",
                    target: "move_on"
                }
            },
            {
                text: "Help",
                action: {
                    type: "bad end",
                    message: "You got robbed and beaten by a group of thugs."
                }
            }

        ]
    },
    move_on: {
        info: "You decide it's safer to just go.",
        selections: [
            {
                text: "Finally arrive",
                action: {
                    type: "move forward",
                    target: "arrival"
                }
            }
        ]
    },
    on_foot2: {
        info: "You decide to walk instead. You go to rest at an hotel for the night. In the morning when while you're going on your merry way two criminals ambush you. You try to run but they have blocked off all the ways to escpae. You take your baton and prepare to strike.",
        selections: [
            {
                text: "Hit left thug",
                action: {
                    type: "move right forward",
                    target: "correct_hit"
                }
            },
            {
                text: "Hit thug A",
                action: {
                    type: "bad end",
                    message: "Your hits are ineffective towards the thug and they hit you back, knocking you out."
                }
            }

        ]
    },
    correct_hit: {
        info: "Your hit knocked the wind out of them. The other's stunned for a moment. You could possibly escape but you're not sure that you should.",
        selections: [
            {
                text: "Continue fighting",
                action: {
                    type: "bad end",
                    message: "You continue fighting but one of them hit you and you fall on the ground and one of them takes your bag before they beat you to death."
                }
            },
            {
                text: "Escape",
                action: {
                    type: "move forward",
                    target: "escape"
                }
            }
        ]
    },
    escape: {
        info: "You succesfully escape. After you catch your breath you keep on going the last distance to your destination.",
        selections: [
            {
                text: "Finally arrive",
                action: {
                    type: "move forward",
                    target: "arrival"
                }
            }
        ]
    },
    on_foot1: {
        info: "You decide to go on foot. A few hours in you find that the streets are filled with people, which makes it harder to navigate.",
        selections: [
            {
                text: "Choice 1a",
                action: {
                    
                    type: "move forward",
                    target: "on_foot3"
                }
            },
            {
                text: "choice 1b",
                action: {
                    type: "bad end",
                    message: "Bad end"
                }
            }
        ]
    },
    on_foot3: {
        info: "choice a or b nr2",
        selections: [
            {
                text: "Choice 2a",
                action: {
                    type: "bad end",
                    message: "Bad end"
                }
            },
            {
                text: "choice 2b",
                action: {
                    type: "move forward",
                    target: "on_foot4"
                }
            }
        ]
    },
    on_foot4: {
        info: "choice a or b nr3",
        selections: [
            {
                text: "Choice 3a",
                action: {
                    type: "bad end",
                    message: "Bad end"
                }
            },
            {
                text: "choice 3b",
                action: {
                    type: "move forward",
                    target: "on_foot5"
                }
            }
        ]
    },
    on_foot5: {
        info: "choice a or b nr4",
        selections: [
            {
                text: "Choice 4a",
                action: {
                    type: "move forward",
                    target: "on_foot6"
                }
            },
            {
                text: "choice 4b",
                action: {
                    type: "bad end",
                    message: "Bad end"
                }
            }
        ]
    },
    on_foot6: {
        info: "Your are almost at your destination.",
        selections: [
            {
                text: "Finally arive",
                action: {
                    type: "move forward",
                    target: "arrival"
                }
            }
        ]
    },
    arrival: {
        info: "After finally looking for hours you find the building the address belonged to. You look at the picture on the note to be sure. It’s an old abandoned warehouse. Nothing that stands out. Trying to locate the nearest entrance to get inside you find a closed door. When you try to turn the door handle you find that it’s stuck. A bit strange as it looks abandoned. You look around for anything to pry the door open. But you don’t find anything. “Looking for anything?” you hear from your right. Looking towards the direction of the voice you see what looks like three people standing in front of the big warehouse door. You answer that yes, you were looking for something. They look at each other then move towards you. The one in front asks what this something you’re looking for is. When they see the note in your hand they ask to see it. You are a bit nervous when you show them the note. You see their eyes light up then they ask you to follow them. They take out a key and open the door. Nervously following them you all go into the abandoned warehouse. There are more people in the warehouse. Some are armed, some are not. Some are wearing armbands, and when you look closer you see the symbol of the resistance. Someone, who looks like a scientist, comes up to you holding a picture. ”Do you have an envelope like this with you?” they ask. The envelope in the picture looks just like the one you have. You take out the envelope from your backpack and give it to them. Everyone's faces light up when they see you pull out the letter. The scientists carefully break the seal and check the contents. The room's atmosphere is filled with eager anticipation and the only sounds that can be heard are the ones of ruffling paper. “It’s legit” are the words that break the silence. People start cheering. The scientist comes and thanks you for delivering the envelope. They see the puzzlement from your face. “You probably have some questions, do you?”.",
        selections: [
            {
                text: "Time for some answers",
                action: {
                    type: "move forward",
                    target: "question_time"
                }
            }
        ]
    },
    question_time: {
        info: "‘We’ve fought the government for a while. While my comrades are fighting with weapons, I and my fellow scientists fight using science. Anything to help the earth and the people, while also potentially decreasing the profits of those in charge of the government. It has been a stalemate for a while. Until recently that is. A recent discovery could not only help the environment and people but also may be the thing we need to have a chance. But the government tries to stop us any way they can so it’s very risky to send and spread the data without it being intercepted. But that’s where you come in.’ he points at the opened envelope. ‘That envelope is one of thousands of others and it has everything we need to put this discovery into effect. It was sent to people who were likely to forward it. We of course didn’t expect everyone to do it and we also expected some to give it to the police. But you’re currently the first one, but hopefully not the last, to have made it. Now, as for your reward.’ He pulls out a cheque with an amount of money that you could live off of for a year or two. ‘Here, take it.’ You take the cheque and place it in your jacket. ‘ You could leave right now, but due to you having taken this journey I got a proposition for you. Would you like to join the resistance? We need everyone we can muster to help our cause. So do you want to help build a better tomorrow?’ He puts his hand out, as if to want to shake your hand. After going over what you’ve been through in your mind, you shake his hand and respond.",
        selections: [
            {
                text: "For a better tomorrow!",
                action: {
                    type: "good end",
                    message: "You reached the end, but why not try a different route?"
                }
            }
        ]
    }
};