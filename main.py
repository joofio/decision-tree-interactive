from pyodide.ffi import create_proxy
from js import document, console, data, pythonclick
import time


def get_path(id, data=data):
    if data.to_py()[id]:
        return data.to_py()[id]
    else:
        return ""


def unselect_same_level(element):
    # console.log(element)
    console.log("clicked", element.srcElement.offsetParent.id)
    select_id = element.srcElement.offsetParent.id
    if "_" not in select_id:
        return None
    else:
        select_base = "_".join(select_id.split("_")[0:-1])
        # console.log("select_base", select_base)
        selected = select_id.split("_")[-1]
        for i in range(1, 5):
            if i != int(selected):
                # select_id.split("_")[0:-1]
                to_select = select_base + "_" + str(i)
                console.log("to unselect", to_select)

                #  console.log(document.getElementById(to_select))
                pythonclick(to_select)
                #  document.getElementById(to_select).getElementsByClassName(
                #      "collapse-switch"
                #  )[0].click()


safeguard = create_proxy(unselect_same_level)


def check_final_node(*kwargs):
    pointer_type = ""
    try:
        pointer_type = kwargs[0].pointerType
        # print("pointer ->>" + pointer_type)
    except Exception as e:
        print(e)

    if pointer_type == "mouse":  # these are triggered by this function
        print("HERRRRE")
        safeguard(kwargs[0])
    p = document.getElementsByClassName("node")
    # console.log(p)
    final_node_count = 0
    for i in p:
        if i.style.visibility == "visible":
            if "final-node" in i.className:
                final_node_count += 1
                #   console.log(i.id)
                #    console.log(i.class)
                #   console.log(i.textContent)
                text_result = i.textContent
                id_to_get = i.id

    # print(final_node_count)

    if final_node_count == 1:
        Element("resultado").write(text_result)
        Element("caminho").write(get_path(id_to_get))
        #  console.log(text_result)
        #   console.log(id_to_get)

    else:
        Element("resultado").write("")
        Element("caminho").write("")


# Create a Python proxy for the callback function
# process_file() is your function to process events from FileReader
visibility_event = create_proxy(check_final_node)
# Set the listener to the callback
document.getElementById("l1_1").getElementsByClassName("collapse-switch")[0].click()
nodes = document.getElementsByClassName("node")
for node in nodes:
    node.addEventListener("click", visibility_event)
