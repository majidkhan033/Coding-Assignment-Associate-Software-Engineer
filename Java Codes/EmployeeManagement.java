import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    // Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
        // Creating a list to store employees
        List<Employee> employees = new ArrayList<>();
        
        // Adding employees to the list
        employees.add(new Employee(101, "Jason", 80000));
        employees.add(new Employee(102, "Johnny", 750000));
        employees.add(new Employee(103, "Amber", 55000));
        
        // Displaying employee details
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
