package com.pms.pms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // use @RestController for JSON-based API
@RequestMapping("/api") // base path for API
public class PmsController {

    @Autowired
    private PmsService pmsService;

    // POST /api/register
    @PostMapping("/register")
    public Pms register(@RequestBody Pms pms) {
        return pmsService.insertPms(pms);
    }

    // GET /api/users
    @GetMapping("/users")
    public List<Pms> getAllUsers() {
        return pmsService.getAllUsers();
    }

    // GET /api/user/{id}
    @GetMapping("/user/{id}")
    public Pms getUserById(@PathVariable int id) {
        return pmsService.getUserById(id);
    }
}
