import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()



const employeeOrders = (employee) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
          
           
          ++fulfilledOrders  
          // Increment the number of fulfilled orders
        }
        
    }

    return fulfilledOrders
    // Return how many orders were fulfilled
}




document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if( itemClicked.id.startsWith("employee")){

            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {

                if (employee.id === parseInt(employeeId))
                {
                    const orderCount = employeeOrders(employee)

                    window.alert(`${employee.name} sold ${orderCount} products`)
                    }
                
            }
        }
    }
)



export const Employees = () => {
    let employeeHTML = "<ul>"

    for (const employee of employees) {
       employeeHTML += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeeHTML += "</ul>"

    return employeeHTML
}

