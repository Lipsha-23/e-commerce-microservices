package com.ecommerce.authservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthTestController {

    @GetMapping("/test")
    public String testAuthService() {
        return "✅ Auth Service is running on port 8081!";
    }
}
