package com.InstaCut.demo.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:80","http://localhost:3000","http://34.71.165.227:80","http://34.71.165.227:3000"},maxAge=3600)
public class HomeController {


    @GetMapping("/")
    public String demo(){
        return "Hello World this is Reene" ;
    }

    @GetMapping("/test")
    @Tag(name="Test",description = "The Test API.")
    @SecurityRequirement(name="rest-test1-api")
    public String test(){
        return "TEST Api" ;
    }
}


