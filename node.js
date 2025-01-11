class ItemForRegistry {
/**
 * Will create an instance of an item
 * @param {String} name The name of the item that will be added
 * @param {Number} price The price of the item that will be added
 */

constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	itemSummary() {
		return `You have added ${ this.name } to your registry and it costs $${ this.price.toFixed(2) }`;//added toFixed(2) to get code to show 2 decimal places for the price
	}
}

class Registry {
	/**
	 * Will create an instance of a Registry
	 * @param {String} eventName The event name that the registry is being created for
	 * @param {Date} dateOfEvent The date the event is to be held on
	 * @param {String} registryOwner The person who is making the registry
	 */
	
	constructor (registryOwner, eventName, dateOfEvent){
		this.registryOwner = registryOwner;
		this.eventName = eventName;
		this.dateOfEvent = dateOfEvent;
		this.listOfItems = [];
	}

	addItem(item){
			if (item instanceof ItemForRegistry) {
				this.listOfItems.push(new ItemForRegistry);
			} else {
				return ('Error. Please add a valid item');
			}
		}
	}

	registrySummary(){
		return `Thank you, ${ registryOwner } for creating`
	}

class Menu {
	/**
	 * Will create the methods in which the user can use/view a menu to manage the different registries 
	 */
	constructor(){
		this.registries = []; //an array for the list of registries
		this.currentRegistry = null; //there isn't a selected registry currently, but setting it to "null" will make it so the user can deal with one registry at a time
	}

	mainMenuOptions() {
		let selection = this.mainMenu;
		while (selection != 0){
			switch (selection) {
				case '1':
					this.createRegistry();
					break;
				case '2':
					this.registryMenu();
					break;
				case '3':
					this.deleteRegistry();
					break;
				default:
					selection = 0;
			}
			selection = this.mainMenu();
		}
		alert('Thank you. Goodbye!');
	}

	mainMenu(){ //Had to delete the tabs because it was showing arrows on the page that I didn't want
		return prompt (`
1) Create a registry
2) View and edit a registry
3) Delete a registry
___________________________________________________

To exit, press 0`);
	}

	registryMenuOptions() {
		let secondSelection = this.registryMenu;
		while (secondSelection > 0 && secondSelection <= 2){
			switch (secondSelection) {
				case '1':
					this.viewRegistry();
					break;
				case '2':
					this.editRegistry();
					break;
				default:
					secondSelection = this.mainMenuOptions();
					break;
			}
			secondSelection = this.registryMenu();
		}
		if (secondSelection === 0) {
			alert ('Thank you! Goodbye');
		} else {
			this.mainMenu();
		}
		
	}

	registryMenu(){
		return prompt (`
1) View a registry
2) Edit a registry
_____________________________________________________

To return to the main menu, press 3-9
To exit, press 0`);
	}

	createItem() {
		let name = prompt('Please enter the item you would like to add: ');
		let price = prompt('Please enter the price of that item: ');
		this.currentRegistry.addItem(new ItemForRegistry(name, price));
	}

	deleteItem() {
		let itemNumber = prompt ('Which item number would you like to delete?');
		if (itemNumber > -1 && itemNumber < this.currentRegistry.length) {
			this.currentRegistry.splice(itemNumber);
		} else {
			throw new Error("Please enter an existing item number");
		}
	}

	createRegistry() {
		let registryOwner = prompt ('Please enter your name: ');
		let eventName = prompt ('Please enter the name of your event (Birth, Wedding, etc.): ');
		let dateOfEvent = prompt ('Please enter the date of your event (dd/mm/yyyy): ');
		this.registries.push(new Registry(registryOwner, eventName, dateOfEvent));
	}

	viewRegistry(){

	}

	editRegistry() {

		}

	deleteRegistry() {
		let registryNumber = prompt ('Please enter the number of the registry you would like to delete: ');
		if (registryNumber > -1 && registryNumber < this.registries.length) {
			this.registries
		} else {
			throw new Error(`Please enter an existing registry number. ${ registryNumber } has not been created yet`);
		}
	}
}

let start = new Menu;
start.mainMenuOptions();
