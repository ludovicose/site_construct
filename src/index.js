import {model} from "./model";
import {Site} from "./classes/site";
import {Sidebar} from "./classes/sidebar";
import './styles/main.css'
import {block} from "./utils";

const site = new Site('#site')
site.render(model)


new Sidebar('#panel',newBlock =>{
   model.push(newBlock)
   site.render(model)
})
