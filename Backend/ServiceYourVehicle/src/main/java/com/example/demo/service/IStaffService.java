package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.pojo.Staff;

public interface IStaffService {
	
	List<Staff> getAllStaff();
	Optional<Staff> findByUsername(String username);
	Staff addNewStaff(Staff newStaff);
	Staff updateStaffDetails(Staff oldDetails);
	Staff deleteStaff(int staffId);
	/*Staff updateStaffDetails(int staffId, Staff oldDetails);*/
	
	Staff fetchByUsernameAndPassword(String tempUsername, String tempPass);
	
}
