package com.pms.pms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PmsService {

    @Autowired
    private PmsRep pm;

    public Pms insertPms(Pms p) {
        return pm.save(p); // return saved user
    }

    public List<Pms> getAllUsers() {
        return pm.findAll();
    }

    public Pms getUserById(int id) {
        return pm.findById(id).orElse(null);
    }
}
