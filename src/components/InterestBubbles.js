import React from "react";
import "../assets/css/styles1.css";
import InterestItems from "../components/InterestItems"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class Interests extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this); 
        this.deleteItem = this.deleteItem.bind(this);
    }

 
    deleteItem(key){
        const filteredItems = this.state.items.filter(item => 
            item.key !== key);
        this.setState({
            items:filteredItems
        })
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    addItem(e){
       e.preventDefault();
       const newItem = this.state.currentItem;
        if(newItem.text !== ""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }

    render(){
        return(
          
            <div>
                <header > 

                    <form id="to-do-form" onSubmit={this.addItem}>
                      <input type="text" placeholder="Add an Interest ..."
                        value={this.state.currentItem.text}
                        onChange={this.handleInput}
                        />
                        <button style ={{background:"#483D8B"}} type="submit" >
                            <strong>Save</strong></button>
                    </form>
                </header>
            {/* <div style={{
                textAlign: "center",
                marginLeft: "310px",
                marginRight: "310px"
            }}> */}
            <div>
            <InterestItems items = {this.state.items}
            deleteItem ={this.deleteItem}> </InterestItems>
            </div>
            </div>
                ); 
    }
}

export default Interests;