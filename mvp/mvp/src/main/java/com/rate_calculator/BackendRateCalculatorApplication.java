package com.rate_calculator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.rate_calculator", "com.rate_calculator.controller"})
public class BackendRateCalculatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendRateCalculatorApplication.class, args);
	}



}
