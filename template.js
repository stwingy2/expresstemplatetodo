const layout = require('./layout')



module.exports =(arr,date)=>{
    const todos=arr.map((todo)=>{
        return `
        <div class="item">
        <input type="checkbox"/>
        <p>${todo}</p>
        </div>
        `
    }).join("")
    const btn=`
    <form class="item" action="/" method ="POST">
    <input type="text" name="newItem" placeholder="add item" autocomplete="off"/>
    <button type="submit" name="button">+</button>
    </form>
    `
const todoForm = `<div class="box">${todos.concat(btn)}</div>`
    return layout({content:todoForm},date)
}