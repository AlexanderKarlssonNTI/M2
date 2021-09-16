let renderer = {
    root_div: undefined
};

function renderer_init(root_div_id) {
    renderer.root_div = document.getElementById(root_div_id);
}

function renderer_render_scene(scene, selection_clicked_func) {

    // Clear previous scene
    while (renderer.root_div.firstChild) {
        renderer.root_div.removeChild(renderer.root_div.firstChild);
    }

    // Render info text
    const info_elem = renderer_create_text_div(scene.info, "info_text");

    // Render selections
    const selections_elem = renderer_render_selections(scene.selections, selection_clicked_func);

    // Append to root div
    renderer.root_div.appendChild(info_elem);
    renderer.root_div.appendChild(selections_elem);
    renderer.root_div.appendChild(artifacts_elem);
}

function renderer_render_end(message, was_success, restart_clicked_func) {

    // Clear previous scene
    while (renderer.root_div.firstChild) {
        renderer.root_div.removeChild(renderer.root_div.firstChild);
    }

    // Render end message
    const end_msg_elem = renderer_create_text_div(message, "end_message_text");

    // Render Game Over
    const game_over_elem = renderer_create_text_div("Game Over", "game_over_text");

    // Render restart button
    const restart_elem = renderer_create_text_div("Restart", "restart_button", () => {
        restart_clicked_func();
    });

    const end_container_elem = renderer_create_div("end_game_container");

    end_container_elem.appendChild(end_msg_elem);

    // Only if died
    if (!was_success) {
        end_container_elem.appendChild(game_over_elem);
    }

    end_container_elem.appendChild(restart_elem);

    renderer.root_div.appendChild(end_container_elem);
}


function renderer_render_selections(selections, selection_clicked_func) {

    const container = renderer_create_div("selections_container");

    selections.forEach(selection => {

        const selection_elem = renderer_create_text_div(selection.text, "selection", () => {

            selection_clicked_func(selection.action);
        });

        container.appendChild(selection_elem);
    });

    return container;
}

function renderer_create_div(className, click_func) {

    const div = document.createElement("div");
    div.className = className;

    if (click_func) {
        div.addEventListener("click", click_func);
    }

    return div;
}

function renderer_create_text_div(txt, className, click_func) {

    const div = renderer_create_div(className, click_func);
    div.textContent = txt;

    return div;
}