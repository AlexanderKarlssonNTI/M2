let controller = {
    scene: scenes.start,
    artifacts: {
        dog_bone: {
            count: 0,
            text: "Dog bone"
        }
    }
};

function controller_init() {

    controller_render_current();
}

function controller_on_selection(action) {

    let end_reached = false;
    let end_success = false;
    let end_msg = "";

    // What to do?
    if (action.type === 'goto') {

        console.log("Go to: " + action.target);

        // Move to next scene
        controller.scene = scenes[action.target];

        // Any artifacts required to enter this scene?
        if (controller.scene.requires_artifacts) {

            const artifact_type = controller.scene.requires_artifacts.type;
            const artifact_count = controller.artifacts[controller.scene.requires_artifacts.type].count;

            console.log("Required artifacts: " + artifact_type);
            console.log("Available artifacts: " + artifact_count);

            if (artifact_count > 0) {
                controller.artifacts[controller.scene.requires_artifacts.type].count--;
            } else {
                end_reached = true;
                end_msg = controller.scene.requires_artifacts.failure;
            }
        }
    }
    else
    if (action.type === 'die') {
        end_reached = true;
        end_msg = action.message;
    }
    else
    if (action.type === 'end') {
        end_reached = true;
        end_success = true;
        end_msg = action.message;
    }
    else
    if (action.type === 'collect') {
        controller.artifacts[action.artifact].count += action.count;
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
    renderer_render_scene(controller.scene, controller.artifacts, controller_on_selection);
}