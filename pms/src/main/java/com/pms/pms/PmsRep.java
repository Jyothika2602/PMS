package com.pms.pms;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PmsRep extends JpaRepository<Pms, Integer>{

}
