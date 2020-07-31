import React from "react";
import AddItemForm from './shopping-list/AddItemForm';
import ShoppingList from './shopping-list/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
      <ShoppingList
        items={this.state.shoppingItems}
        
        /* add the two callback props here
        
        handleDeleteItem = (item) => {
        const newItems = this.state.shoppingItems.filter(itm => itm !== item)
        this.setState({
          shoppingItems: newItems
         })
        }
        handleCheckItem = (item) => {
        const newItems = this.state.shoppingItems.map(itm => {
          if (itm === item) {
         itm.checked = !itm.checked
         }
        return itm
         })
        this.setState({
        shoppingItems: newItems
          })
        }*/
        
        render() {
          return (
            <section>
              <AddItemForm
                onAddItem={this.handleAddItem}
              />
            </section>
          )
        }
        onDeleteItem={this.handleDeleteItem}
        onCheckItem={this.handleCheckItem}
      />
    </section>
        </main>
      </>
    )
  }
}