const postActionsControllers = document.querySelectorAll(
    ".post-actions-controller"
);

postActionsControllers.forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target")
        const postActionsContent = document.getElementById(targetId)

        if (postActionsContent){
            const isVisible = postActionsContent.getAttribute("data-visible")
            if (isVisible==="false"){
                postActionsContent.setAttribute("data-visible", "true")
                postActionsContent.setAttribute("aria-hidden", "false")
                btn.setAttribute("aria-expanded", "true")
            }else{
                postActionsContent.setAttribute("data-visible", "false")
                postActionsContent.setAttribute("aria-hidden", "true")
                btn.setAttribute("aria-expanded", "false")
            }
        }
    })
})
function handleClickOutside(event){
    postActionsControllers.forEach((btn) => {
        const targetId = btn.getAttribute("data-target")
        const postActionsContent = document.getElementById(targetId)

        if (postActionsContent && postActionsContent.getAttribute("data-visible")==="true") {
            if (!postActionsContent.contains(event.target) && event.target !== btn){
                postActionsContent.setAttribute("data-visible", "false")
                postActionsContent.setAttribute("aria-hidden", "true")
                btn.setAttribute("aria-expanded", "false")
            }
        }
    })
}

document.addEventListener("click", handleClickOutside)

postActionsControllers.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation();
    })
})

const likeBtns = document.querySelectorAll(".post-like")

likeBtns.forEach((likeBtns) => {
    likeBtns.addEventListener("click", () => {
        if (likeBtns.classList.contains("active")){
            likeBtns.classList.remove("active")
        }else{
            likeBtns.classList.add("active")
        }
    })
})
