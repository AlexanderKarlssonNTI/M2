let scenes = {

    start: {
        info: "You stand in the street and see 3 houses. Please select house to approach!",
        selections: [
            {
                text: "E22",
                type: "house",
                action: {
                    type: "die",
                    message: "3 five-year olds throw popcorn in your eyes as you approach the house!"
                }
            },
            {
                text: "E24",
                type: "house",
                action: {
                    type: "goto",
                    target: "e24"
                }
            },
            {
                text: "E26",
                type: "house",
                action: {
                    type: "die",
                    message: "House falls apart as you approach it!"
                }
            }
        ]
    },
    e24: {
        info: "The house has 2 entrances. Please select entrance!",
        selections: [
            {
                text: "Entrance 1",
                type: "door",
                action: {
                    type: "goto",
                    target: "utility_room"
                }
            },
            {
                text: "Entrance 2",
                type: "door",
                action: {
                    type: "goto",
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
                type: "wardrobe",
                action: {
                    type: "collect",
                    artifact: "dog_bone",
                    count: 1
                }
            },
            {
                text: "Open door",
                type: "door",
                action: {
                    type: "goto",
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
                type: "door",
                action: {
                    type: "die",
                    message: "A 12 week old cheese smells like someone died..."
                }
            },
            {
                text: "Enter the hallway",
                type: "door",
                action: {
                    type: "goto",
                    target: "hallway"
                }
            }
        ]
    },
    hallway: {
        requires_artifacts: {
            type: "dog_bone",
            failure: "Inside the hallway you are eaten up by the killer dog Flisa!",
            success: "The killer dog Flisa approaches you but calms down when you hand over the dog bone!"
        },
        info: "You are in the hallway, which contains 2 standard doors. What to do?",
        selections: [
            {
                text: "Open door 1",
                type: "door",
                action: {
                    type: "die",
                    message: "Your little brother just puked in here!"
                }
            },
            {
                text: "Open door 2",
                type: "door",
                action: {
                    type: "end",
                    message: "Congratulations, you are in the livingroom and reached the end!"
                }
            },
        ]
    }
};