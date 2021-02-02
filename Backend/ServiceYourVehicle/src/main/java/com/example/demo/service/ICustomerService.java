package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.pojo.Customer;

public interface ICustomerService {
	
	List<Customer> getAllCustomers();
	Optional<Customer> findUserDetails(String username);
	Customer addNewCustomer(Customer newCustomer);
	Customer updateCustomerDetails(Customer oldDetails);
	Customer deleteCustomer(int customerId);
	Customer updateCustomerDetail(int cutomerId, Customer oldDetails);
	
	Customer fetchCustomerByUsernameAndPassword(String tempUsername, String tempPass);
}
