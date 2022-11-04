from pyodide.ffi import create_proxy
from js import document, console, data


def get_path(id, data=data):
    if data.to_py()[id]:
        return data.to_py()[id]
    else:
        return ""


def check_final_node(*kwargs):
    p = document.getElementsByClassName("node")
    # console.log(p)
    final_node_count = 0
    for i in p:
        if i.style.visibility == "visible":
            if "final-node" in i.className:
                final_node_count += 1
                console.log(i.id)
                #    console.log(i.class)
                console.log(i.textContent)
                text_result = i.textContent
                id_to_get = i.id

    print(final_node_count)

    if final_node_count == 1:
        Element("resultado").write(text_result)
        Element("caminho").write(get_path(id_to_get))
        console.log(text_result)
        console.log(id_to_get)

    else:
        Element("resultado").write("")
        Element("caminho").write("")


# Create a Python proxy for the callback function
# process_file() is your function to process events from FileReader
visibility_event = create_proxy(check_final_node)
# console.log("aqui aqui")
# Set the listener to the callback
check_final_node()
#   document.getElementById("collapsable-example").addEventListener("mouseover", visibility_event)
document.getElementById("collapsable-example").addEventListener(
    "click", visibility_event
)
