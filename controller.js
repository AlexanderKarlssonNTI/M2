let controller = {
    scene: scenes.start,
};

function controller_init() {

    controller_render_current();
}

function controller_on_selection(action) {

    let end_reached = false;
    let end_success = false;
    let end_msg = "";

    // What to do?
    if (action.type === 'move forward') {

        console.log("Go to: " + action.target);

        // Move to next scene
        controller.scene = scenes[action.target];
    }
    else
    if (action.type === 'bad end') {
        end_reached = true;
        end_msg = action.message;
    }
    else
    if (action.type === 'good end') {
        end_reached = true;
        end_success = true;
        end_msg = action.message;
    }

    if (end_reached) {

        // Render end and wait for click
        renderer_render_end(end_msg, end_success, () => {

            // Start over
            controller.scene = scenes.start;

            controller_render_current();
        });

    } else {

        // Render next scene
        controller_render_current();
    }
}

function controller_render_current() {
    renderer_render_scene(controller.scene, controller_on_selection);
}